using Microsoft.AspNetCore.Mvc;

namespace CapacitaPro.API;

[ApiController]
[Route("api/[controller]")]
public class CursosController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { mensagem = "API de Cursos funcional" });
}