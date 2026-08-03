using BridgeDynamics.Website.Models.Forms;
using BridgeDynamics.Website.Services.Leads;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.RateLimiting;

namespace BridgeDynamics.Website.Pages;

[EnableRateLimiting("lead-forms")]
public sealed class RequestDemoModel(IDemoRequestService demoRequestService) : PageModel
{
    public static readonly string[] InterestOptions = ["Core Platform", "People Suite", "Customer Suite", "Operations Suite", "Governance Suite", "Insights Suite"];
    [BindProperty] public DemoRequestInput Input { get; set; } = new();
    public async Task<IActionResult> OnPostAsync(CancellationToken cancellationToken)
    {
        if (!ModelState.IsValid) return Page();
        await demoRequestService.SubmitAsync(Input, cancellationToken);
        return RedirectToPage("/RequestDemoSuccess");
    }
}
