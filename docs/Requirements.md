# Requerimientos para Cosmonavt: The Flood

**Niveles de relevancia**:

- `[Crítico]`: Esencial para un prototipo jugable.
- `[Importante]`: Ideal para un segundo prototipo más completo.
- `[Opcional]`: Útil después del prototipo; se puede implementar más adelante.

## Funcionales

### Jugabilidad Principal

- `[Crítico]` Sistema de infección ramificada: Narrativa desde la perspectiva del Flood que avanza con absorción de conocimiento de científicos y otros humanos clave.
- `[Crítico]` Exploración predatoria de mapas: Mapas generados con semilla donde el Flood busca expandir su dominio.
- `[Crítico]` Sistema de biomasa adaptativa: Acumulación y gasto de biomasa para evolucionar y dividirse con efectos directos en gameplay.
- `[Crítico]` Gestión de recursos Flood: Recolección de biomasa, infectados potenciales, y sabotaje de componentes de la cura.
- `[Importante]` Sistema de evolución del Flood: Árbol de mutaciones y especializaciones que persisten entre sesiones.
- `[Importante]` Gestión de riesgo-recompensa: Infección de objetivos valiosos (científicos, capitanes) vs. expansión rápida con unidades básicas.
- `[Opcional]` Eventos de resistencia humana: Purgas, cuarentenas y defensas que dificultan la expansión del Flood.
- `[Opcional]` Finales múltiples: Variaciones narrativas basadas en el nivel de dominación o conocimiento absorbido.
- `[Importante]` Progresión entre runs: Conservación de evoluciones y conocimiento absorbido entre sesiones.
- `[Importante]` Sentidos mejorados del Flood: Visión ampliada (180°) con capacidad para detectar calor o señales a través de obstáculos.
- `[Importante]` Sistema de asimilación: Infectar diferentes tipos de humanos para obtener beneficios específicos.

### IA y Humanos

- `[Crítico]` Sistema de resistencia humana: IA con detección del Flood, defensa coordinada y uso de herramientas anti-Flood.
- `[Crítico]` Escalada de defensa: Humanos más preparados y mejor equipados conforme avanza la infección.
- `[Importante]` Contaminación del entorno: Capacidad del Flood para transformar zonas limpias en áreas de biomasa.
- `[Importante]` Científicos y personal especializado: Humanos con habilidades únicas que representan amenazas o recompensas al ser infectados.

### Multijugador

- `[Crítico]` Mente colmena compartida: Coordinación entre jugadores Flood con visión y objetivos compartidos.
- `[Crítico]` Transferencia de biomasa: Capacidad para compartir recursos entre Floods jugadores.
- `[Importante]` Especialización cooperativa: Distintos jugadores pueden evolucionar en diferentes ramas para complementarse.
- `[Importante]` Comunicación telepática: Chat de texto o comandos rápidos entre jugadores Flood.
- `[Opcional]` Distribución táctica: Asignación de zonas y objetivos entre jugadores de la colmena.
- `[Opcional]` Jerarquía Flood: Sistema donde un jugador puede actuar como Flood primario con beneficios y responsabilidades.
- `[Opcional]` Resumen de dominación: Estadísticas de áreas infectadas, humanos convertidos y conocimiento absorbido.

### Mundo y Ambientación

- `[Crítico]` Ecosistemas diversos: Al menos dos biomas con diferentes desafíos para la infección (estación espacial, nave, colonia minera).
- `[Crítico]` Transformación ambiental: El entorno cambia visualmente según el nivel de contaminación Flood.
- `[Importante]` Regeneración por semilla: Mostrar, guardar y reutilizar semillas de mapa para desafíos específicos.
- `[Opcional]` Zonas de alta biomasa: Lugares con alta concentración de recursos donde establecer nidos principales.
- `[Opcional]` Entornos hostiles: Zonas con radiación, descontaminación o defensas automatizadas que afectan al Flood.

### Personalización

- `[Importante]` Evoluciones visuales: Cambios en la apariencia del Flood según su rama evolutiva.
- `[Importante]` Sistema de mutaciones: Slots para diferentes evoluciones (sentidos, movilidad, infección, ataque).
- `[Importante]` Especialización de colonia: Diferentes tipos de nidos y estructuras para funciones específicas.
- `[Opcional]` Formas Flood desbloqueables: Variantes estéticas o funcionales basadas en logros anteriores.

### Interfaces y Feedback

- `[Crítico]` HUD orgánico e inmersivo: Biomasa, nodos controlados, cooldowns y mapa de infección.
- `[Crítico]` Registro de conocimiento absorbido: Información extraída de humanos importantes.
- `[Importante]` Evoluciones permanentes: Gasto de biomasa rara en mejoras genéticas iniciales.
- `[Opcional]` Leaderboard de dominación: Comparativa de infección y control al final de la sesión.
- `[Importante]` Indicadores sensoriales del Flood: Feedback visual y sonoro único para la detección de humanos, daño o evolución.

---

## No Funcionales

### Rendimiento

- `[Crítico]` Gestión eficiente de múltiples unidades: El sistema debe soportar el control simultáneo de varios nodos Flood sin caídas de rendimiento.
- `[Crítico]` Soporte para transformación ambiental: El motor debe manejar cambios visuales progresivos en tiles afectados por biomasa Flood.
- `[Crítico]` Multijugador sincronizado: Las interacciones de la mente colmena deben mantener latencia por debajo de 100 ms.
- `[Importante]` Optimización de partículas y efectos: Los efectos de infección, evolución y biomasa deben ser visualmente impactantes sin afectar el rendimiento.
- `[Importante]` Consumo eficiente en división celular: La mecánica de control multi-unidad debe escalar sin problemas de memoria.

### Escalabilidad y Red

- `[Importante]` Escalabilidad de la colmena: El servidor debe gestionar múltiples jugadores Flood controlando múltiples unidades cada uno.
- `[Crítico]` Persistencia de evoluciones: Las mutaciones y conocimientos absorbidos deben guardarse entre sesiones.
- `[Importante]` Sincronización de infección: WebSocket optimizado para actualizar el estado de contaminación y transformación de humanos.
- `[Importante]` Gestión de colmenas múltiples: Soporte para varias partidas con diferentes configuraciones de dificultad o semilla.
- `[Opcional]` Recuperación de nodo primario: Si un jugador se desconecta, sus unidades Flood pueden ser asumidas por otro jugador o volverse autónomas.

### Seguridad

- `[Crítico]` Validación de evoluciones: Prevención de mutaciones ilegítimas o aceleradas mediante verificación en servidor.
- `[Importante]` Integridad de la biomasa: Control servidor-lado de los recursos acumulados para prevenir cheats.
- `[Crítico]` Control de acceso a colmenas: Sistema de invitación para partidas privadas entre jugadores Flood.
- `[Opcional]` Equilibrio entre jugadores: Mecanismos para prevenir monopolización de recursos o áreas por un solo jugador.

### Experiencia de Usuario

- `[Crítico]` Diseño biomórfico del HUD: Interfaz orgánica que transmita la sensación de ser un organismo alienígena.
- `[Importante]` Feedback sensorial único: Sistema visual y sonoro que comunique la percepción alienígena del entorno.
- `[Importante]` Accesibilidad: Configuración de controles, ayudas visuales para gestión multi-unidad, indicaciones claras.
- `[Importante]` Satisfacción táctil: Animaciones y efectos sonoros gratificantes al infectar, evolucionar o dividirse.
- `[Opcional]` Tutorial de asimilación: Guía inicial integrada sobre mecánicas básicas del Flood.

### Mantenibilidad

- `[Crítico]` Arquitectura modular: Separación clara entre sistemas de infección, evolución, control de unidades y transformación ambiental.
- `[Importante]` Componentes reutilizables: Mecánicas compartidas entre diferentes tipos de Flood y evoluciones.
- `[Importante]` Registro de actividad colmena: Logs detallados de eventos importantes durante la expansión del Flood.
- `[Opcional]` Soporte para nuevas evoluciones: Estructura que facilite añadir nuevas ramas evolutivas, habilidades o tipos de Flood.
- `[Opcional]` Documentación biológica: Comentarios y estándares que describan el comportamiento y lógica de los sistemas orgánicos implementados.
