# Challenge Performance - ARW

Este proyecto tiene como objetivo ejecutar pruebas de rendimiento utilizando **K6**.

## Requisitos

- **Windows** (para seguir los pasos de instalación con Chocolatey)
- **Chocolatey**: Un gestor de paquetes para Windows
- **K6**: Herramienta para pruebas de carga y rendimiento

## Instalación

1. **Instalar Chocolatey**:
   Para instalar **Chocolatey**, abre una terminal de PowerShell con permisos de administrador y ejecuta el siguiente comando:

   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   
```

## Instalar K6:

 Una vez que tengas Chocolatey instalado, puedes instalar K6 utilizando el siguiente comando:

```bash
 choco install k6
```
Ejecución del Script de Pruebas
Una vez que K6 esté instalado, puedes correr el script de rendimiento con el siguiente comando:

```bash
k6 run scripts/performance-test.js
```