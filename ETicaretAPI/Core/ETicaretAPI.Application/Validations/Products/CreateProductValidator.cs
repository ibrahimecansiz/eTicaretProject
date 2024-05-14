using ETicaretAPI.Application.ViewModels.Products;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Validations.Products
{
    public class CreateProductValidator : AbstractValidator<VM_Create_Product>
    {
        public CreateProductValidator() {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Lütfen  ürün adını boş geçmeyiniz")
                .MaximumLength(150)
                .MinimumLength(5)
                    .WithMessage("Lütfen ürün adını 5 ile 150 karakter arası olmalıdır");
            RuleFor(p => p.Stock)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Lütfen  stok bilgisini boş geçmeyiniz")
                .Must(m => m >= 0)
                    .WithMessage("Stok bilgisi negatif olamaz");

            RuleFor(p => p.Price)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Lütfen  fiyat bilgisini boş geçmeyiniz")
                .Must(m => m >= 0)
                    .WithMessage("fiyat bilgisi negatif olamaz");
        }
    }
}
