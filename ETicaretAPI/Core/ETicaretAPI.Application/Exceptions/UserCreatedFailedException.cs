﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Exceptions
{
    public class UserCreatedFailedException : Exception
    {
        public UserCreatedFailedException() : base("Kullanıcı oluşturulurken hata oluştu")
        {
        }

        public UserCreatedFailedException(string message) : base(message)
        {
        }

        public UserCreatedFailedException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}