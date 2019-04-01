using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.DomainModels.AppLogic.Blog
{
  public class BlogDetailDomainModel
  {
    public Guid Id { get; set; }

    public int GameId { get; set; }
    public string Title { get; set; }

    public string Description { get; set; }
    public string Post { get; set; }

    public Guid? HeaderImage { get; set; }

    public Guid? FooterImage { get; set; }

    public DateTime CreatedDate { get; set; }
  }
}
