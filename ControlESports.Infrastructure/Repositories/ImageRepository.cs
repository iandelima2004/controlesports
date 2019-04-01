using ControlESports.Core.Entities;
using ControlESports.Core.Interfaces.Infrastructure.Repositories;
using ControlESports.Infrastructure.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Infrastructure.Repositories
{
  public class ImageRepository : GenericRepository<Image>, IImageRepository
  {
    public ImageRepository(ControlESportsEntities dataContext) : base(dataContext)
    {

    }

    public void DeleteImageById(Guid id)
    {
      var currentImage = Context.Images.FirstOrDefault(a => a.Guid == id);

      if(currentImage != null)
      {
        Context.Images.Remove(currentImage);
        Context.SaveChanges();
      }
    }
  }
}
