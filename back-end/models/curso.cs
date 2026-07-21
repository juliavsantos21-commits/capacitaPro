namespace CapacitaPro.API.Models;

public class Curso
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string Area { get; set; } = string.Empty; // Ex: "Área Técnica"
    public string Nivel { get; set; } = string.Empty; // Ex: "Básico"[cite: 6]
    public string Status { get; set; } = string.Empty; // Ex: "Disponível"[cite: 6]
    public int CargaHoraria { get; set; }
    public int TotalAlunos { get; set; }
    public string IconeClasse { get; set; } = string.Empty;
}