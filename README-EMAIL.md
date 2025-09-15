# Configuración de Email con Resend

## Variables de Entorno Requeridas

Para que el formulario de contacto funcione correctamente, necesitas configurar las siguientes variables de entorno en tu archivo `.env.local`:

```bash
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Configuración de Resend

1. **Crear cuenta en Resend**: Visita [resend.com](https://resend.com) y crea una cuenta
2. **Obtener API Key**: En el dashboard de Resend, ve a "API Keys" y crea una nueva API key
3. **Verificar dominio**: Para usar un dominio personalizado (recomendado), verifica tu dominio en la sección "Domains"

## Configuración del Dominio

### Opción 1: Usar dominio verificado (Recomendado)
Si tienes un dominio verificado en Resend, actualiza la línea 21 en `/src/app/api/email/route.ts`:

```typescript
from: "Ariane Presskit <booking@tudominio.com>", // Cambia por tu dominio verificado
```

### Opción 2: Usar dominio de prueba
Para pruebas, puedes usar el dominio de sandbox de Resend:

```typescript
from: "Ariane Presskit <booking@resend.dev>",
```

## Configuración del Email de Destino

El email donde se reciben las consultas se configura en la línea 22 de `/src/app/api/email/route.ts`:

```typescript
to: ["killsyncproducciones@gmail.com"], // Cambia por tu email
```

## Funcionalidades Implementadas

### Template de Email
- Email con formato HTML profesional
- Incluye toda la información del formulario:
  - Nombre completo
  - Ciudad
  - Mensaje
- Diseño responsive y profesional

### Formulario de Contacto
- Validación de campos requeridos
- Estados de carga (loading spinner)
- Mensajes de éxito y error
- Limpieza automática del formulario tras envío exitoso
- Feedback visual al usuario

### API Route
- Validación de datos en el servidor
- Manejo de errores completo
- Respuestas JSON estructuradas
- Logs de errores para debugging

## Testing

Para probar el formulario:

1. Configura las variables de entorno
2. Ejecuta `npm run dev`
3. Ve al formulario de contacto en el sitio
4. Completa y envía el formulario
5. Verifica que recibas el email en la dirección configurada

## Solución de Problemas

### Error: "Missing API key"
- Verifica que `RESEND_API_KEY` está configurada en `.env.local`
- Reinicia el servidor de desarrollo después de agregar variables de entorno

### Error: "Invalid from address"
- Asegúrate de usar un dominio verificado en Resend
- O usa `booking@resend.dev` para pruebas

### El email no llega
- Verifica la dirección de destino en `to:`
- Revisa la consola del servidor para errores
- Verifica los logs en el dashboard de Resend