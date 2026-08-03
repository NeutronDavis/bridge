using System.ComponentModel.DataAnnotations;

namespace BridgeDynamics.Website.Models.Forms;

public sealed class ContactInput
{
    [Required, StringLength(100)] public string Name { get; set; } = string.Empty;
    [Required, EmailAddress, StringLength(254)] public string Email { get; set; } = string.Empty;
    [StringLength(150)] public string? Company { get; set; }
    [Required, StringLength(80), Display(Name = "Enquiry type")] public string EnquiryType { get; set; } = string.Empty;
    [Required, StringLength(2000), MinLength(10)] public string Message { get; set; } = string.Empty;
    [StringLength(0), Display(Name = "Leave this field empty")] public string? Website { get; set; }
}
