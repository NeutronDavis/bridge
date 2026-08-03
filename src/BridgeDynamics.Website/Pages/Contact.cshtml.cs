using BridgeDynamics.Website.Models.Forms;
using BridgeDynamics.Website.Services.Leads;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.RateLimiting;

namespace BridgeDynamics.Website.Pages;

[EnableRateLimiting("lead-forms")]
public sealed class ContactModel(IContactRequestService contactService) : PageModel
{
    [BindProperty] public ContactInput Input { get; set; } = new();
    public bool IsSubmitted { get; private set; }
    public async Task<IActionResult> OnPostAsync(CancellationToken cancellationToken)
    {
        if (!ModelState.IsValid) return Page();
        await contactService.SubmitAsync(Input, cancellationToken);
        IsSubmitted = true;
        ModelState.Clear();
        return Page();
    }
}
