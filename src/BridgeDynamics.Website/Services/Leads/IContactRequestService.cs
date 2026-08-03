using BridgeDynamics.Website.Models.Forms;

namespace BridgeDynamics.Website.Services.Leads;

public interface IContactRequestService
{
    Task SubmitAsync(ContactInput request, CancellationToken cancellationToken = default);
}
