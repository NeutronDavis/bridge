using System.ComponentModel.DataAnnotations;
using BridgeDynamics.Website.Models.Forms;

namespace BridgeDynamics.Website.Tests;

public sealed class ValidationTests
{
    [Fact]
    public void Demo_request_requires_core_fields_and_consent()
    {
        var errors = Validate(new DemoRequestInput());
        Assert.Contains(errors, e => e.MemberNames.Contains(nameof(DemoRequestInput.FullName)));
        Assert.Contains(errors, e => e.MemberNames.Contains(nameof(DemoRequestInput.AreasOfInterest)));
        Assert.Contains(errors, e => e.MemberNames.Contains(nameof(DemoRequestInput.ConsentToContact)));
    }

    [Theory]
    [InlineData("not-an-email")]
    [InlineData("name@")]
    public void Demo_request_rejects_invalid_email(string email)
    {
        var model = ValidDemoRequest();
        model.WorkEmail = email;
        Assert.Contains(Validate(model), e => e.MemberNames.Contains(nameof(DemoRequestInput.WorkEmail)));
    }

    [Fact]
    public void Demo_request_rejects_honeypot_content()
    {
        var model = ValidDemoRequest();
        model.Website = "robot";
        Assert.Contains(Validate(model), e => e.MemberNames.Contains(nameof(DemoRequestInput.Website)));
    }

    [Fact]
    public void Valid_demo_request_passes_validation() => Assert.Empty(Validate(ValidDemoRequest()));

    [Fact]
    public void Contact_requires_name_email_type_and_message()
    {
        var errors = Validate(new ContactInput());
        Assert.Contains(errors, e => e.MemberNames.Contains(nameof(ContactInput.Name)));
        Assert.Contains(errors, e => e.MemberNames.Contains(nameof(ContactInput.Email)));
        Assert.Contains(errors, e => e.MemberNames.Contains(nameof(ContactInput.EnquiryType)));
        Assert.Contains(errors, e => e.MemberNames.Contains(nameof(ContactInput.Message)));
    }

    [Fact]
    public void Contact_rejects_invalid_email_and_honeypot()
    {
        var model = new ContactInput { Name = "Ada", Email = "bad", EnquiryType = "Pricing", Message = "Please send more details.", Website = "bot" };
        var errors = Validate(model);
        Assert.Contains(errors, e => e.MemberNames.Contains(nameof(ContactInput.Email)));
        Assert.Contains(errors, e => e.MemberNames.Contains(nameof(ContactInput.Website)));
    }

    private static DemoRequestInput ValidDemoRequest() => new() { FullName = "Ada Okafor", Company = "Example Ltd", WorkEmail = "ada@example.com", Phone = "+234 800 000 0000", Industry = "Professional Services", OrganisationSize = "50–199 employees", AreasOfInterest = ["Core Platform"], ConsentToContact = true };

    private static List<ValidationResult> Validate(object value)
    {
        var results = new List<ValidationResult>();
        Validator.TryValidateObject(value, new ValidationContext(value), results, true);
        return results;
    }
}
