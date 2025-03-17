using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;

namespace backend.Data;

public class User
{
    [Key]
    public int user_id  { get; set; }
    [Required]
    public string username { get; set; }
    [Required]
    public string password { get; set; }
    [Required]
    public string email { get; set; }
    [Required]
    public string first_name { get; set; }
    [Required]
    public string last_name { get; set; }
    [Required]
    public string mission { get; set; }
    [Required]
    public string home_city { get; set; }
    [Required]
    public string  home_state  { get; set; }
    [Required]
    public string home_country { get; set; }
    [Required]
    public string birthday { get; set; }
    [Required]
    public byte[] profile_picture { get; set; }
}