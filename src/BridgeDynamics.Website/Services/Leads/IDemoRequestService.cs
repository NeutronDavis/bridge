using BridgeDynamics.Website.Models.Forms;

namespace BridgeDynamics.Website.Services.Leads;

public interface IDemoRequestService
{
    Task SubmitAsync(DemoRequestInput request, CancellationToken cancellationToken = default);
}
