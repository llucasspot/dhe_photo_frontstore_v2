import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';

function build(relativePath: string) {
  return path.resolve(__dirname, relativePath);
}

dotenv.config();

// TODO
const basepath = process.env.VITE_BASE_PATH ?? '/';
console.log('basepath : ', basepath);

export default defineConfig({
  plugins: [react()],
  base: basepath,
  server: {
    host: '0.0.0.0',
    port: 3002,
  },
  resolve: {
    alias: {
      '#lib': build('src/lib'),
      '#assets': build('src/assets'),
      '#components': build('src/components'),
      '#features/auth/i18n': build('src/features/auth/i18n'),
      '#features/auth/domain': build('src/features/auth/domain'),
      '#features/auth/react': build('src/features/auth/react'),
      '#features/auth/use-cases': build('src/features/auth/use-cases'),
      '#features/home/i18n': build('src/features/home/i18n'),
      '#features/home/domain': build('src/features/home/domain'),
      '#features/home/react': build('src/features/home/react'),
      '#features/home/use-cases': build('src/features/home/use-cases'),
      '#features/students/i18n': build('src/features/students/i18n'),
      '#features/students/domain': build('src/features/students/domain'),
      '#features/students/react': build('src/features/students/react'),
      '#features/students/use-cases': build('src/features/students/use-cases'),
      '#layout': build('src/layout'),
      '#di/domain': build('src/lib/di/src/domain'),
      '#di/react': build('src/lib/di/src/react'),
      '#di': build('src/lib/di/src'),
      '#i18n/domain': build('src/features/_/i18n/src/domain'),
      '#i18n/react': build('src/features/_/i18n/src/react'),
      '#i18n': build('src/features/_/i18n/src'),
      '#routing/domain': build('src/features/_/routing/domain'),
      '#routing/react': build('src/features/_/routing/react'),
      '#routing': build('src/features/_/routing'),
      '#class-transformer': build('libs/class-transformer'),
      '#@nestjs/common': build('libs/@nestjs/common'),
      '#@nestjs/mapped-types': build('libs/@nestjs/mapped-types'),
      '#core/domain': build('src/features/_/core/domain'),
      '#core/infra': build('src/features/_/core/infra'),
      '#core/react': build('src/features/_/core/react'),
      '#toast/domain': build('src/features/_/toast/domain'),
      '#toast/react': build('src/features/_/toast/react'),
      '#toast': build('src/features/_/toast'),
      '#mock': build('src/features/_/mock'),
      '#mock/domain': build('src/features/_/mock/domain'),
      '#mock/infra': build('src/features/_/mock/infra'),
      '#api': build('src/features/_/api'),
      '#state/domain': build('src/features/_/state/domain'),
      '#state/modules': build('src/features/_/state/modules'),
      '#state/react': build('src/features/_/state/react'),
      '#storage/domain': build('src/features/_/storage/domain'),
      '#storage/modules': build('src/features/_/storage/modules'),
      '#action/domain': build('src/features/_/action/domain'),
      '#action/react': build('src/features/_/action/react'),
      '#cache': build('src/features/_/cache'),
      '#cache/domain': build('src/features/_/cache/domain'),
    },
  },
});
