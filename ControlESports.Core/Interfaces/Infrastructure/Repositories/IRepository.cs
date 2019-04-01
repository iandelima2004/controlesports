using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Interfaces.Infrastructure.Repositories
{
  public interface IRepository<TEntity> where TEntity : class
  {
    IList<TEntity> GetAll();

    TEntity GetById(Guid id);

    TEntity GetById(int id);

    TEntity GetById(string id);

    TEntity Insert(TEntity entity);

    void Update(TEntity entity);

    void Delete(TEntity entity);

    void Save();
  }
}
