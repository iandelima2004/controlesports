using ControlESports.Core.Interfaces.Helpers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace ControlESports.Core.Helpers
{
  public class CryptographyHelper : ICryptographyHelper
  {
    private static readonly byte[] initVectorBytes = { 64, 49, 66, 50, 99, 51, 68, 52, 101, 53, 70, 54, 103, 55, 72, 56 };

    public string Encrypt(
      string plainText,
      string passPhrase,
      string saltValue)
    {

      var plainTextBytes = Encoding.UTF8.GetBytes(plainText);
      var keyBytes = GetKeyBytes(passPhrase, saltValue);
      var symmetricKey = new RijndaelManaged();
      symmetricKey.Mode = CipherMode.CBC;
      var encryptor = symmetricKey.CreateEncryptor(keyBytes, initVectorBytes);
      var memoryStream = new MemoryStream();
      var cryptoStream = new CryptoStream(memoryStream, encryptor, CryptoStreamMode.Write);
      cryptoStream.Write(plainTextBytes, 0, plainTextBytes.Length);
      cryptoStream.FlushFinalBlock();
      var cipherTextBytes = memoryStream.ToArray();
      memoryStream.Close();
      cryptoStream.Close();
      var cipherText = Convert.ToBase64String(cipherTextBytes);
      return cipherText;
    }

    public string Decrypt(
      string cipherText,
      string passPhrase,
      string saltValue)
    {

      var cipherTextBytes = Convert.FromBase64String(cipherText);
      var keyBytes = GetKeyBytes(passPhrase, saltValue);
      var symmetricKey = new RijndaelManaged();
      symmetricKey.Mode = CipherMode.CBC;
      var decryptor = symmetricKey.CreateDecryptor(keyBytes, initVectorBytes);
      var memoryStream = new MemoryStream(cipherTextBytes);
      var cryptoStream = new CryptoStream(memoryStream, decryptor, CryptoStreamMode.Read);
      var plainTextBytes = new byte[cipherTextBytes.Length];
      var decryptedByteCount = cryptoStream.Read(plainTextBytes, 0, plainTextBytes.Length);
      memoryStream.Close();
      cryptoStream.Close();
      var plainText = Encoding.UTF8.GetString(plainTextBytes, 0, decryptedByteCount);
      return plainText;
    }

    public byte[] EncodePassword(string plainPassword, byte[] initVector)
    {
      var input = Encoding.Unicode.GetBytes(plainPassword);
      var temp = new byte[initVector.Length + input.Length];
      Buffer.BlockCopy(initVector, 0, temp, 0, initVector.Length);
      Buffer.BlockCopy(input, 0, temp, initVector.Length, input.Length);
      var s = HashAlgorithm.Create("SHA1");
      return s.ComputeHash(temp);
    }

    public byte[] GenerateInitVector()
    {
      var buffer = new byte[16];
      var cryptoProvider = new RNGCryptoServiceProvider();
      cryptoProvider.GetBytes(buffer);
      return buffer;
    }

    public bool IsValidPassword(string plainPassword, byte[] encodedPassword, byte[] initVector)
    {

      string testPassword = Convert.ToBase64String(EncodePassword(plainPassword, initVector));
      string encoded = Convert.ToBase64String(encodedPassword);
      return encoded.Equals(testPassword);

    }

    public string GenerateRandomPassword()
    {
      return Convert.ToBase64String(GenerateInitVector(), 0, 12).Substring(0, 10);
    }

    private Byte[] GetKeyBytes(
      string passPhrase,
      string saltValue)
    {
      var saltValueBytes = Encoding.ASCII.GetBytes(saltValue);
      var password = new PasswordDeriveBytes(passPhrase, saltValueBytes, "SHA1", 8);
      var keyBytes = password.GetBytes(32);
      return keyBytes;
    }
  }
}
