import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SendVcodeResponse, DeleteAccountRequest, CreateSealRequest, CreateSealResponse, DescribeTaskStatusResponse, CheckVcodeRequest, CheckVcodeResponse, DownloadContractResponse, SignContractByKeywordResponse, DeleteSealRequest, DownloadContractRequest, CreateEnterpriseAccountResponse, CreatePersonalAccountResponse, CreateEnterpriseAccountRequest, CreateContractByUploadRequest, CreateContractByUploadResponse, DeleteSealResponse, CreatePersonalAccountRequest, DescribeTaskStatusRequest, SignContractByKeywordRequest, SendVcodeRequest, SignContractByCoordinateRequest, SignContractByCoordinateResponse, DeleteAccountResponse } from "./ds_models";
/**
 * ds client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 此接口适用于：客户平台通过上传PDF文件作为合同，以备未来进行签署。接口返回任务号，可调用DescribeTaskStatus接口查看任务执行结果。
     */
    CreateContractByUpload(req: CreateContractByUploadRequest, cb?: (error: string, rep: CreateContractByUploadResponse) => void): Promise<CreateContractByUploadResponse>;
    /**
     * 此接口用于客户电子合同平台增加某用户的印章图片。客户平台可以调用此接口增加某用户的印章图片。
     */
    CreateSeal(req: CreateSealRequest, cb?: (error: string, rep: CreateSealResponse) => void): Promise<CreateSealResponse>;
    /**
     * 下载合同接口。调用该接口可以下载签署中和签署完成的合同。接口返回任务号，可调用DescribeTaskStatus接口查看任务执行结果。
     */
    DownloadContract(req: DownloadContractRequest, cb?: (error: string, rep: DownloadContractResponse) => void): Promise<DownloadContractResponse>;
    /**
     * 删除企业电子合同平台的最终用户。调用该接口后，腾讯云将删除该用户账号。删除账号后，已经签名的合同不受影响。
     */
    DeleteAccount(req: DeleteAccountRequest, cb?: (error: string, rep: DeleteAccountResponse) => void): Promise<DeleteAccountResponse>;
    /**
     * 接口使用于：客户平台可使用该接口查询任务执行状态或者执行结果
     */
    DescribeTaskStatus(req: DescribeTaskStatusRequest, cb?: (error: string, rep: DescribeTaskStatusResponse) => void): Promise<DescribeTaskStatusResponse>;
    /**
     * 为企业电子合同平台的最终个人用户进行开户。在企业电子合同平台进行操作的个人用户，企业电子合同平台向腾讯云发送个人用户的信息，提交开户命令。腾讯云接到请求后，自动为企业电子合同平台的个人用户生成一张数字证书。
     */
    CreatePersonalAccount(req: CreatePersonalAccountRequest, cb?: (error: string, rep: CreatePersonalAccountResponse) => void): Promise<CreatePersonalAccountResponse>;
    /**
     * 此接口适用于：客户平台在创建好合同后，由合同签署方对创建的合同内容进行确认，无误后再进行签署。客户平台使用该接口对PDF合同文档按照关键字和坐标进行签署。
     */
    SignContractByKeyword(req: SignContractByKeywordRequest, cb?: (error: string, rep: SignContractByKeywordResponse) => void): Promise<SignContractByKeywordResponse>;
    /**
     * 删除印章接口，删除指定账号的某个印章
     */
    DeleteSeal(req: DeleteSealRequest, cb?: (error: string, rep: DeleteSealResponse) => void): Promise<DeleteSealResponse>;
    /**
     * 为企业电子合同平台的最终企业用户进行开户。在企业电子合同平台进行操作的企业用户，企业电子合同平台向腾讯云发送企业用户的信息，提交开户命令。腾讯云接到请求后，自动为企业电子合同平台的企业用户生成一张数字证书。
     */
    CreateEnterpriseAccount(req: CreateEnterpriseAccountRequest, cb?: (error: string, rep: CreateEnterpriseAccountResponse) => void): Promise<CreateEnterpriseAccountResponse>;
    /**
     * 发送验证码接口。此接口用于：企业电子合同平台需要腾讯云发送验证码对其用户进行验证时调用，腾讯云将向其用户联系手机(企业电子合同平台为用户开户时通过接口传入)发送验证码，以验证码授权方式签署合同。用户验证工作由企业电子合同平台自身完成。
     */
    SendVcode(req: SendVcodeRequest, cb?: (error: string, rep: SendVcodeResponse) => void): Promise<SendVcodeResponse>;
    /**
     * 检测验证码接口。此接口用于企业电子合同平台通过给用户发送短信验证码，以短信授权方式签署合同。此接口配合发送验证码接口使用。

用户在企业电子合同平台输入收到的验证码后，由企业电子合同平台调用该接口向腾讯云提交确认受托签署合同验证码命令。验证码验证正确时，本次合同签署的授权成功。
     */
    CheckVcode(req: CheckVcodeRequest, cb?: (error: string, rep: CheckVcodeResponse) => void): Promise<CheckVcodeResponse>;
    /**
     * 此接口适用于：客户平台在创建好合同后，由合同签署方对创建的合同内容进行确认，无误后再进行签署。客户平台使用该接口提供详细的PDF文档签名坐标进行签署。
     */
    SignContractByCoordinate(req: SignContractByCoordinateRequest, cb?: (error: string, rep: SignContractByCoordinateResponse) => void): Promise<SignContractByCoordinateResponse>;
}
