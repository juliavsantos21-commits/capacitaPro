namespace CapacitaPro.API.Models;

public class Matricula
{
    public int Id { get; set; }
    public int UsuarioId { get; set; }
    public Usuario? Usuario { get; set; }
    public int CursoId { get; set; }
    public Curso? Curso { get; set; }
    public DateTime DataMatricula { get; set; } = DateTime.UtcNow;
}