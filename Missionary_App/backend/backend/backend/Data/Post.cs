using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;

namespace backend.Data;

public class Post
{
    [Key]
    public int post_id  { get; set; }
    [Required]
    public int user_id  { get; set; }
    [Required]
    public string title  { get; set; }
    [Required]
    public string text { get; set; }
    public byte[] image { get; set; }
    [Required]
    public DateTime created_at { get; set; }
}