export type AuthI18nTranslationsKeys = {
  signIn: {
    title: string;
    subtitle: string;
    email: string;
    studentCode: string;
    submit: string;
    validation: {
      email: {
        IsEmail: string;
        IsNotEmpty: string;
      };
      photographerSlug: {
        IsNotEmpty: string;
      };
      studentCode: {
        IsString: string;
        IsNotEmpty: string;
      };
    };
  };
};
