using ETicaretAPI.Application.Repositories;
using F = ETicaretAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ETicaretAPI.Persistence.Concretes;

namespace ETicaretAPI.Persistence.Repositories.File
{
    public class FileWriteRepository : WriteRepository<F::File>, IFileWriteRepository
    {
        public FileWriteRepository(ETicaretAPIDbContext context) : base(context)
        {
        }
    }
}
