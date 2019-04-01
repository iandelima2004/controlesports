using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Interfaces.Helpers
{
  public interface ICacheProviderHelper
  {
    T2 GetFromCacheOrDataSource<T2>(string key, Func<T2> action, int inCacheDuration = 60);
    void RemoveFromCache(string key);
  }
}
