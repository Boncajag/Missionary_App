using System.ComponentModel.DataAnnotations;

namespace backend.Data;

public class Reply
{
    [Key]
    public int reply_id { get; set; }
    [Required]
    public int post_id { get; set; }
    [Required]
    public int user_id { get; set; }
    [Required]
    public string? reply_content { get; set; }
    [Required]
    public DateTime sent_at { get; set; }
    
}