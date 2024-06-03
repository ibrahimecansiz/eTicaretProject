using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Infrastructure.Operations
{
    public static class NameOperation
    {
        public static string CharacterRegulatory(string name) =>
            name.Replace("\"", "")
                .Replace("!", "")
                .Replace("'", "")
                .Replace("^", "")
                .Replace("+", "")
                .Replace("%", "")
                .Replace("&", "")
                .Replace("/", "")
                .Replace("(", "")
                .Replace(")", "")
                .Replace("=", "")
                .Replace("?", "")
                .Replace("_", "")
                .Replace("-", "")
                .Replace(" ", "-")
                .Replace("@", "")
                .Replace("~", "")
                .Replace("#", "")
                .Replace("$", "")
                .Replace("*", "")
                .Replace(":", "")
                .Replace(";", "")
                .Replace(">", "")
                .Replace("<", "")
                .Replace("`", "")
                .Replace("Ö", "O")
                .Replace("ö", "o")
                .Replace("Ü", "U")
                .Replace("ü", "u")
                .Replace("İ", "I")
                .Replace("ı", "i")
                .Replace("Ş", "s")
                .Replace("ş", "s")
                .Replace("Ğ", "G")
                .Replace("ğ", "g")
                .Replace("Ç", "C")
                .Replace("ç", "c")
                .Replace("£", "")
                .Replace("½", "")
                .Replace("{", "")
                .Replace("[", "")
                .Replace("]", "")
                .Replace("}", "").ToString();
    }
}
