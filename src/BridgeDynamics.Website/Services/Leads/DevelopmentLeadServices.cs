using BridgeDynamics.Website.Models.Forms;

namespace BridgeDynamics.Website.Services.Leads;

// Development-only sinks deliberately retain and log no personal information.
public sealed class DevelopmentDemoRequestService : IDemoRequestService
{
    public Task SubmitAsync(DemoRequestInput request, CancellationToken cancellationToken = default) => Task.CompletedTask;
}

public sealed class DevelopmentContactRequestService : IContactRequestService
{
    public Task SubmitAsync(ContactInput request, CancellationToken cancellationToken = default) => Task.CompletedTask;
}
