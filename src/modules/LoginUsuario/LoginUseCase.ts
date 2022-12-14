import { ILoginDTO } from '../../DTO/LoginDTO'
import {LoginSapiens} from '../../pytonRequest/loginSapiens'

export class LoginUseCase {
    async execute(data: ILoginDTO): Promise<string> {
        return await LoginSapiens(data);
    }
}