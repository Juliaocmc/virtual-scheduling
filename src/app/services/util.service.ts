import { Injectable } from '@angular/core';


export function getTimes(): string[] {
  const horas: string[] = [];

  for (let hora = 0; hora < 24; hora++) {
    for (let minuto = 0; minuto < 60; minuto += 30) {
      const horaFormatada = String(hora).padStart(2, '0');
      const minutoFormatado = String(minuto).padStart(2, '0');
      const horario = `${horaFormatada}:${minutoFormatado}`;
      horas.push(horario);
    }
  }
  return horas;
}
