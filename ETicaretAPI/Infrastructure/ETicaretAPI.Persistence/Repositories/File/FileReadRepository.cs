using F = ETicaretAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ETicaretAPI.Application.Repositories;
using ETicaretAPI.Persistence.Concretes;

namespace ETicaretAPI.Persistence.Repositories.File
{
    public class FileReadRepository : ReadRepository<F::File>, IFileReadRepository
    {
        public FileReadRepository(ETicaretAPIDbContext context) : base(context)
        {
        }
    }
}
