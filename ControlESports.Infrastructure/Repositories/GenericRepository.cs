using ControlESports.Core.Interfaces.Infrastructure.Repositories;
using ControlESports.Infrastructure.DbContext;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Infrastructure.Repositories
{
  public class GenericRepository<T> : IRepository<T> where T : class
  {
    #region private variables
    private ControlESportsEntities _context;
    private IDbSet<T> _dbset;
    #endregion

    public ControlESportsEntities Context
    {
      get { return _context; }
      set
      {
        _context = value;
        _dbset = _context.Set<T>();
      }
    }

    public GenericRepository(ControlESportsEntities dataContext)
    {
      Context = dataContext;
    }

    public IList<T> GetAll()
    {
      return _dbset.ToList<T>();
    }

    public T GetById(Guid id)
    {
      return _dbset.Find(id);
    }

    public T GetById(int id)
    {
      return _dbset.Find(id);
    }

    public T GetById(string id)
    {
      return _dbset.Find(id);
    }

    public T Insert(T entity)
    {
      _dbset.Add(entity);
      return entity;
    }

    public void Update(T entity)
    {
      _dbset.Attach(entity);
      Context.Entry(entity).State = EntityState.Modified;
    }

    public void Delete(T entity)
    {
      _dbset.Remove(entity);
    }

    public void Save()
    {
      Context.SaveChanges();
    }
  }
}
