using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace BridgeDynamics.Website.Tests;

public sealed class WebsiteTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient client;
    public WebsiteTests(WebApplicationFactory<Program> factory)
    {
        var isolatedFactory = factory.WithWebHostBuilder(builder => builder.ConfigureServices(services => services.AddLogging(logging => logging.ClearProviders())));
        client = isolatedFactory.CreateClient(new WebApplicationFactoryClientOptions { BaseAddress = new Uri("https://localhost") });
    }

    public static TheoryData<string> PublicRoutes => new() { "/", "/platform", "/solutions", "/industries", "/pricing", "/security", "/resources", "/company", "/contact", "/request-demo", "/privacy", "/terms" };

    [Theory, MemberData(nameof(PublicRoutes))]
    public async Task Public_routes_return_success(string route)
    {
        using var response = await client.GetAsync(route);
        Assert.True(response.IsSuccessStatusCode, $"{route} returned {response.StatusCode}");
    }

    [Fact]
    public async Task Unknown_route_returns_friendly_404()
    {
        using var response = await client.GetAsync("/not-a-real-page");
        Assert.Equal(System.Net.HttpStatusCode.NotFound, response.StatusCode);
        Assert.Contains("We could not find that page", await response.Content.ReadAsStringAsync());
    }

    [Fact]
    public async Task Pages_include_metadata()
    {
        var html = await client.GetStringAsync("/platform");
        Assert.Contains("<title>Platform | Bridge Dynamics</title>", html);
        Assert.Contains("name=\"description\"", html);
        Assert.Contains("property=\"og:title\"", html);
        Assert.Contains("rel=\"canonical\"", html);
        Assert.Contains("name=\"robots\"", html);
    }

    [Fact]
    public async Task Responses_include_security_headers()
    {
        using var response = await client.GetAsync("/");
        Assert.Equal("nosniff", response.Headers.GetValues("X-Content-Type-Options").Single());
        Assert.Equal("DENY", response.Headers.GetValues("X-Frame-Options").Single());
        Assert.True(response.Headers.Contains("Content-Security-Policy"));
        Assert.True(response.Headers.Contains("Permissions-Policy"));
    }
}
