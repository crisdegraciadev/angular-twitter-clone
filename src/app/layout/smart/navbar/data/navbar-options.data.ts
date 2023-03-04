import {
  faHashtag,
  faHome,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faBookmark,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { NavbarOption } from '../types/navbar-option.type';

export const NAVBAR_OPTIONS: NavbarOption[] = [
  {
    icon: faHome,
    value: 'Inicio',
  },
  {
    icon: faHashtag,
    value: 'Explorar',
  },
  {
    icon: faBell,
    value: 'Notificaciones',
  },
  {
    icon: faEnvelope,
    value: 'Mensajes',
  },
  {
    icon: faBookmark,
    value: 'Guardados',
  },
  {
    icon: faUser,
    value: 'Perfil',
  },
];
