import { IconDownload, IconLink } from '@tabler/icons-react'
import android from '../../../assets/android.jpg'
import google from '../../../assets/google.jpg'

export const TITLE = 'Prueba nuestra aplicación'
export const TEXT =
  'Optimiza tu tiempo y logra tus objetivos con nuestra aplicación de productividad diseñada para el éxito personal'
export const DEVICES = [
  {
    id: 0,
    device: 'Aplicación web',
    image: google,
    available: [
      'Resumen de tus habitos.',
      'Recordatorio de tus habitos.',
      'Temporizador y pomodoro incluidos.',
      'Contador de rachas',
      'Tendras tu propia lista de tareas.',
      'Graficos mas detallados.',
      'Acceso a nuevas funcionalidades.',
    ],
    noAvilable: ['No tedras notificaciónes de tus habitos.'],
    icon: <IconLink />,
    button: 'Abrir aplicación',
  },
  {
    id: 1,
    device: 'Aplicación android',
    image: android,
    available: [
      'Resumen de tus habitos.',
      'Recordatorio de tus habitos.',
      'Temporizador y pomodoro incluidos.',
      'Contador de rachas',
      'Tendras tu propia lista de tareas.',
      'Recibiras notificaciónes de tus habitos.',
    ],
    noAvilable: ['Los graficos seran mas simples.', 'No habran muchas actualizaciones.'],
    icon: <IconDownload />,
    button: 'Descargar aplicación',
  },
]
