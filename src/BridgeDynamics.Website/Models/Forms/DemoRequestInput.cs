using System.ComponentModel.DataAnnotations;

namespace BridgeDynamics.Website.Models.Forms;

public sealed class DemoRequestInput
{
    [Required, StringLength(100), Display(Name = "Full name")]
    public string FullName { get; set; } = string.Empty;

    [Required, StringLength(150)]
    public string Company { get; set; } = string.Empty;

    [Required, EmailAddress, StringLength(254), Display(Name = "Work email")]
    public string WorkEmail { get; set; } = string.Empty;

    [Required, Phone, StringLength(40)]
    public string Phone { get; set; } = string.Empty;

    [Required, StringLength(80)]
    public string Industry { get; set; } = string.Empty;

    [Required, StringLength(50), Display(Name = "Organisation size")]
    public string OrganisationSize { get; set; } = string.Empty;

    [Required(ErrorMessage = "Select at least one area of interest."), MinLength(1), Display(Name = "Areas of interest")]
    public List<string> AreasOfInterest { get; set; } = [];

    [StringLength(2000)]
    public string? Message { get; set; }

    [Range(typeof(bool), "true", "true", ErrorMessage = "You must consent to being contacted."), Display(Name = "Consent to contact")]
    public bool ConsentToContact { get; set; }

    [StringLength(0), Display(Name = "Leave this field empty")]
    public string? Website { get; set; }
}
