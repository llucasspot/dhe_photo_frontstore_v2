import { Form, FormButton, HiddenInput, Input } from '#components';
import { useService } from '#di/react';
import { PhotographerSlugGetterPort, SignInBody } from '#features/auth/domain';
import { useI18n } from '#i18n/react';
import { RoutingServicePort } from '#routing/domain';

export const SignInForm = () => {
  const routingService = useService(RoutingServicePort);
  const photographerSlugGetter = useService(PhotographerSlugGetterPort);
  const { t } = useI18n();

  const photographerSlug = photographerSlugGetter.get();

  const onSubmit = async (data: SignInBody) => {
    console.log(data);
    await routingService.redirect('/home');
  };

  return (
    <Form dto={SignInBody} onSubmit={onSubmit} className="space-y-6">
      <Input formKey="email" label={'auth.signIn.email'} type="email" />
      <Input formKey="studentCode" label={'auth.signIn.studentCode'} />
      <HiddenInput formKey="photographerSlug" value={photographerSlug} />
      <FormButton className="w-full">{t('auth.signIn.submit')}</FormButton>
    </Form>
  );
};
