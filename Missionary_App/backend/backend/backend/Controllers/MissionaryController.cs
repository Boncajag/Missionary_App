using backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MissionaryController : ControllerBase
    {
        private readonly MissionaryAppContext _context;

        public MissionaryController(MissionaryAppContext context)
        {
            _context = context;
        }

        [HttpGet("allData")]
        public IActionResult GetAllData()
        {
            var users = _context.users.ToList();
            var posts = _context.posts.ToList();
            var replies = _context.replies.ToList();

            return Ok(new { users, posts, replies });
        }
    }
}
