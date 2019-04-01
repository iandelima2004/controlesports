using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.DomainModels.AppLogic.User
{
  public class UserInfoDomainModel
  {
    public Guid Id { get; set; }
    public string UserName { get; set; }

    public bool IsActive { get; set; }

    public string FirstName { get; set; }

    public string DisplayName { get; set; }

    public string LastName { get; set; }

    public string EmailAddress { get; set; }

    public int CountryId { get; set; }

    public byte[] ImageData { get; set; }

    public List<int> Roles { get; set; }

    public DateTime ModifiedDate { get; set; }
  }
}
