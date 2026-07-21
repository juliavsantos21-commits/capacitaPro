using Microsoft.AspNetCore.Mvc;

namespace CapacitaPro.API;

[ApiController]
[Route("api/[controller]")]
public class ContatoController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { mensagem = "API de Contato funcional" });
}