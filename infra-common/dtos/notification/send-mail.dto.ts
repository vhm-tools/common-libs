import { EMailProvider } from '../../enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmptyObject, IsString } from 'class-validator';

class SendEmailInput {
  @ApiProperty()
  @IsEmail()
  to: string;

  @ApiProperty()
  @IsString()
  subject: string;

  @ApiProperty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsString()
  html: string;
}

export class SendMailPayload {
  @ApiProperty({ examples: EMailProvider, default: EMailProvider.SEND_GRID })
  @IsEnum(EMailProvider)
  provider: EMailProvider;

  @ApiProperty()
  @IsNotEmptyObject()
  data: SendEmailInput;
}
