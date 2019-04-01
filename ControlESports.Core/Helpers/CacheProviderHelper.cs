using ControlESports.Core.Interfaces.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Helpers
{
  public class CacheProviderHelper : ICacheProviderHelper
  {
    private interface ICacheProvider
    {
      T Get<T>(string key);
      void Set(string key, object data, int cacheTime);
      bool IsSet(string key);
      void Invalidate(string key);
    }

    private class DefaultCacheProvider : ICacheProvider
    {
      private ObjectCache Cache { get { return MemoryCache.Default; } }

      public T Get<T>(string key)
      {
        return (T)Cache[key];
      }

      public void Set(string key, object data, int cacheTime)
      {
        var policy = new CacheItemPolicy();
        policy.AbsoluteExpiration = DateTime.Now + TimeSpan.FromMinutes(cacheTime);

        Cache.Add(new CacheItem(key, data), policy);
      }

      public bool IsSet(string key)
      {
        return (Cache[key] != null);
      }

      public void Invalidate(string key)
      {
        Cache.Remove(key);
      }
    }

    private static bool IsCachinEnabled = true;

    private static DefaultCacheProvider cacheProvider = new DefaultCacheProvider();

    public T2 GetFromCacheOrDataSource<T2>(string key, Func<T2> action, int inCacheDuration = 60)
    {
      if (!IsCachinEnabled)
      {
        return action();
      }

      if (cacheProvider.IsSet(key))
      {
        return cacheProvider.Get<T2>(key);
      }
      var data = action();
      cacheProvider.Set(key, data, inCacheDuration);

      return data;
    }

    public void RemoveFromCache(string key)
    {
      cacheProvider.Invalidate(key);
    }
  }
}
