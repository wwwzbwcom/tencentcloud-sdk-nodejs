/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * CreateDBInstances请求参数结构体
 */
export interface CreateDBInstancesRequest {
  /**
   * 售卖规格ID。该参数可以通过调用DescribeProductConfig的返回值中的SpecCode字段来获取。
   */
  SpecCode: string

  /**
   * PostgreSQL内核版本，目前支持：9.3.5、9.5.4、10.4三种版本。
   */
  DBVersion: string

  /**
   * 实例容量大小，单位：GB。
   */
  Storage: number

  /**
   * 一次性购买的实例数量。取值1-100
   */
  InstanceCount: number

  /**
   * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值，按量计费模式下该参数传1。
   */
  Period: number

  /**
   * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
   */
  Zone: string

  /**
   * 项目ID。
   */
  ProjectId?: number

  /**
   * 实例计费类型。目前支持：PREPAID（预付费，即包年包月），POSTPAID_BY_HOUR（后付费，即按量计费）。
   */
  InstanceChargeType?: string

  /**
   * 是否自动使用代金券。1（是），0（否），默认不使用。
   */
  AutoVoucher?: number

  /**
   * 代金券ID列表，目前仅支持指定一张代金券。
   */
  VoucherIds?: Array<string>

  /**
   * 私有网络ID。
   */
  VpcId?: string

  /**
   * 私有网络子网ID。
   */
  SubnetId?: string

  /**
   * 续费标记：0-正常续费（默认）；1-自动续费；
   */
  AutoRenewFlag?: number

  /**
   * 活动ID
   */
  ActivityId?: number

  /**
   * 实例名(后续支持)
   */
  Name?: string

  /**
   * 是否需要支持Ipv6，1：是，0：否
   */
  NeedSupportIpv6?: number

  /**
   * 实例需要绑定的Tag信息，默认为空
   */
  TagList?: Array<Tag>
}

/**
 * CloseServerlessDBExtranetAccess返回参数结构体
 */
export interface CloseServerlessDBExtranetAccessResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyDBInstance请求参数结构体
 */
export interface DestroyDBInstanceRequest {
  /**
   * 待删除实例标识符
   */
  DBInstanceId: string
}

/**
 * CreateServerlessDBInstance请求参数结构体
 */
export interface CreateServerlessDBInstanceRequest {
  /**
   * 可用区ID。公测阶段仅支持ap-shanghai-2、ap-beijing-1,ap-guangzhou-2.
   */
  Zone: string

  /**
   * DB实例名称，同一个账号下该值必须唯一。
   */
  DBInstanceName: string

  /**
   * PostgreSQL内核版本，目前只支持：10.4。
   */
  DBVersion: string

  /**
   * PostgreSQL数据库字符集，目前支持UTF8。
   */
  DBCharset: string

  /**
   * 项目ID。
   */
  ProjectId?: number

  /**
   * 私有网络ID。
   */
  VpcId?: string

  /**
   * 私有网络子网ID。
   */
  SubnetId?: string

  /**
   * 实例需要绑定的标签数组信息
   */
  TagList?: Array<Tag>
}

/**
 * InquiryPriceRenewDBInstance请求参数结构体
 */
export interface InquiryPriceRenewDBInstanceRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string

  /**
   * 续费周期，按月计算，最大不超过48
   */
  Period: number
}

/**
 * SetAutoRenewFlag请求参数结构体
 */
export interface SetAutoRenewFlagRequest {
  /**
   * 实例ID数组
   */
  DBInstanceIdSet: Array<string>

  /**
   * 续费标记。0-正常续费；1-自动续费；2-到期不续费
   */
  AutoRenewFlag: number
}

/**
 * DescribeOrders返回参数结构体
 */
export interface DescribeOrdersResponse {
  /**
   * 订单数量
   */
  TotalCount?: number

  /**
   * 订单数组
   */
  Deals?: Array<PgDeal>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteServerlessDBInstance请求参数结构体
 */
export interface DeleteServerlessDBInstanceRequest {
  /**
   * DB实例名称，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
   */
  DBInstanceName?: string

  /**
   * DB实例ID，实例名和实例ID必须至少传一个，如果同时存在，将只以实例ID为准。
   */
  DBInstanceId?: string
}

/**
 * DescribeDBXlogs请求参数结构体
 */
export interface DescribeDBXlogsRequest {
  /**
   * 实例ID，形如postgres-4wdeb0zv。
   */
  DBInstanceId: string

  /**
   * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
   */
  StartTime: string

  /**
   * 查询结束时间，形如2018-06-10 17:06:38
   */
  EndTime: string

  /**
   * 分页返回，表示返回第几页的条目。从第0页开始计数。
   */
  Offset?: number

  /**
   * 分页返回，表示每页有多少条目。取值为1-100。
   */
  Limit?: number
}

/**
 * InquiryPriceCreateDBInstances返回参数结构体
 */
export interface InquiryPriceCreateDBInstancesResponse {
  /**
   * 原始价格，单位：分
   */
  OriginalPrice?: number

  /**
   * 折后价格，单位：分
   */
  Price?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 账户信息
 */
export interface AccountInfo {
  /**
   * 实例ID，形如postgres-lnp6j617
   */
  DBInstanceId: string

  /**
   * 帐号
   */
  UserName: string

  /**
   * 帐号备注
   */
  Remark: string

  /**
   * 帐号状态。 1-创建中，2-正常，3-修改中，4-密码重置中，-1-删除中
   */
  Status: number

  /**
   * 帐号创建时间
   */
  CreateTime: string

  /**
   * 帐号最后一次更新时间
   */
  UpdateTime: string
}

/**
 * InquiryPriceUpgradeDBInstance请求参数结构体
 */
export interface InquiryPriceUpgradeDBInstanceRequest {
  /**
   * 实例的磁盘大小，单位GB
   */
  Storage: number

  /**
   * 实例的内存大小，单位GB
   */
  Memory: number

  /**
   * 实例ID，形如postgres-hez4fh0v
   */
  DBInstanceId: string

  /**
   * 实例计费类型，预付费或者后付费。PREPAID-预付费。目前只支持预付费。
   */
  InstanceChargeType?: string
}

/**
 * DescribeAccounts请求参数结构体
 */
export interface DescribeAccountsRequest {
  /**
   * 实例ID，形如postgres-6fego161
   */
  DBInstanceId: string

  /**
   * 分页返回，每页最大返回数目，默认20，取值范围为1-100
   */
  Limit?: number

  /**
   * 分页返回，返回第几页的用户数据。页码从0开始计数
   */
  Offset?: number

  /**
   * 返回数据按照创建时间或者用户名排序。取值只能为createTime或者name。createTime-按照创建时间排序；name-按照用户名排序
   */
  OrderBy?: string

  /**
   * 返回结果是升序还是降序。取值只能为desc或者asc。desc-降序；asc-升序
   */
  OrderByType?: string
}

/**
 * DescribeDBErrlogs返回参数结构体
 */
export interface DescribeDBErrlogsResponse {
  /**
   * 本次调用返回了多少条数据
   */
  TotalCount?: number

  /**
   * 错误日志列表
   */
  Details?: Array<ErrLogDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceCreateDBInstances请求参数结构体
 */
export interface InquiryPriceCreateDBInstancesRequest {
  /**
   * 可用区ID。该参数可以通过调用 DescribeZones 接口的返回值中的Zone字段来获取。
   */
  Zone: string

  /**
   * 规格ID。该参数可以通过调用DescribeProductConfig接口的返回值中的SpecCode字段来获取。
   */
  SpecCode: string

  /**
   * 存储容量大小，单位：GB。
   */
  Storage: number

  /**
   * 实例数量。目前最大数量不超过100，如需一次性创建更多实例，请联系客服支持。
   */
  InstanceCount: number

  /**
   * 购买时长，单位：月。目前只支持1,2,3,4,5,6,7,8,9,10,11,12,24,36这些值。
   */
  Period: number

  /**
   * 计费ID。该参数可以通过调用DescribeProductConfig接口的返回值中的Pid字段来获取。
   */
  Pid: number

  /**
   * 实例计费类型。目前只支持：PREPAID（预付费，即包年包月）。
   */
  InstanceChargeType?: string
}

/**
 * ModifyDBInstanceName请求参数结构体
 */
export interface ModifyDBInstanceNameRequest {
  /**
   * 数据库实例ID，形如postgres-6fego161
   */
  DBInstanceId: string

  /**
   * 新的数据库实例名字
   */
  InstanceName: string
}

/**
 * 描述一种规格的信息
 */
export interface SpecItemInfo {
  /**
   * 规格ID
   */
  SpecCode: string

  /**
   * PostgreSQL的内核版本编号
   */
  Version: string

  /**
   * 内核编号对应的完整版本名称
   */
  VersionName: string

  /**
   * CPU核数
   */
  Cpu: number

  /**
   * 内存大小，单位：MB
   */
  Memory: number

  /**
   * 该规格所支持最大存储容量，单位：GB
   */
  MaxStorage: number

  /**
   * 该规格所支持最小存储容量，单位：GB
   */
  MinStorage: number

  /**
   * 该规格的预估QPS
   */
  Qps: number

  /**
   * 该规格对应的计费ID
   */
  Pid: number

  /**
   * 机器类型
   */
  Type: string
}

/**
 * DescribeProductConfig请求参数结构体
 */
export interface DescribeProductConfigRequest {
  /**
   * 可用区名称
   */
  Zone?: string
}

/**
 * CreateDBInstances返回参数结构体
 */
export interface CreateDBInstancesResponse {
  /**
   * 订单号列表。每个实例对应一个订单号。
   */
  DealNames?: Array<string>

  /**
   * 冻结流水号
   */
  BillId?: string

  /**
   * 创建成功的实例ID集合，只在后付费情景下有返回值
   */
  DBInstanceIdSet?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartDBInstance请求参数结构体
 */
export interface RestartDBInstanceRequest {
  /**
   * 实例ID，形如postgres-6r233v55
   */
  DBInstanceId: string
}

/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
  /**
   * 过滤条件，目前支持：db-instance-id、db-instance-name、db-project-id、db-pay-mode、db-tag-key。
   */
  Filters?: Array<Filter>

  /**
   * 每页显示数量，默认返回10条。
   */
  Limit?: number

  /**
   * 分页序号，从0开始。
   */
  Offset?: number

  /**
   * 排序指标，如实例名、创建时间等，支持DBInstanceId,CreateTime,Name,EndTime
   */
  OrderBy?: string

  /**
   * 排序方式，包括升序、降序
   */
  OrderByType?: string
}

/**
 * 错误日志详情
 */
export interface ErrLogDetail {
  /**
   * 用户名
   */
  UserName: string

  /**
   * 数据库名字
   */
  Database: string

  /**
   * 错误发生时间
   */
  ErrTime: string

  /**
   * 错误消息
   */
  ErrMsg: string
}

/**
 * serverless实例描述
 */
export interface ServerlessDBInstance {
  /**
      * 实例id，唯一标识符
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBInstanceId?: string

  /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBInstanceName?: string

  /**
      * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBInstanceStatus?: string

  /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region?: string

  /**
      * 可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone?: string

  /**
      * 项目id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId?: number

  /**
      * 私有网络Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId?: string

  /**
      * 子网id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId?: string

  /**
      * 字符集
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBCharset?: string

  /**
      * 数据库版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBVersion?: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime?: string

  /**
      * 实例网络信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBInstanceNetInfo?: Array<ServerlessDBInstanceNetInfo>

  /**
      * 实例账户信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBAccountSet?: Array<ServerlessDBAccount>

  /**
      * 实例下的db信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBDatabaseList?: Array<string>

  /**
      * 实例绑定的标签数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagList?: Array<Tag>
}

/**
 * DescribeServerlessDBInstances返回参数结构体
 */
export interface DescribeServerlessDBInstancesResponse {
  /**
   * 查询结果数
   */
  TotalCount?: number

  /**
      * 查询结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBInstanceSet?: Array<ServerlessDBInstance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstancesProject返回参数结构体
 */
export interface ModifyDBInstancesProjectResponse {
  /**
   * 转移项目成功的实例个数
   */
  Count?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewInstance返回参数结构体
 */
export interface RenewInstanceResponse {
  /**
   * 订单名
   */
  DealName?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZones请求参数结构体
 */
export type DescribeZonesRequest = null

/**
 * UpgradeDBInstance请求参数结构体
 */
export interface UpgradeDBInstanceRequest {
  /**
   * 升级后的实例内存大小，单位GB
   */
  Memory: number

  /**
   * 升级后的实例磁盘大小，单位GB
   */
  Storage: number

  /**
   * 实例ID，形如postgres-lnp6j617
   */
  DBInstanceId: string

  /**
   * 是否自动使用代金券,1是,0否，默认不使用
   */
  AutoVoucher?: number

  /**
   * 代金券ID列表，目前仅支持指定一张代金券
   */
  VoucherIds?: Array<string>

  /**
   * 活动ID
   */
  ActivityId?: number
}

/**
 * OpenServerlessDBExtranetAccess请求参数结构体
 */
export interface OpenServerlessDBExtranetAccessRequest {
  /**
   * 实例的唯一标识符
   */
  DBInstanceId?: string

  /**
   * 实例名称
   */
  DBInstanceName?: string
}

/**
 * 描述地域的编码和状态等信息
 */
export interface RegionInfo {
  /**
   * 该地域对应的英文名称
   */
  Region: string

  /**
   * 该地域对应的中文名称
   */
  RegionName: string

  /**
   * 该地域对应的数字编号
   */
  RegionId: number

  /**
   * 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用
   */
  RegionState: string
}

/**
 * DeleteServerlessDBInstance返回参数结构体
 */
export interface DeleteServerlessDBInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 慢查询详情
 */
export interface SlowlogDetail {
  /**
   * 花费总时间
   */
  TotalTime: number

  /**
   * 调用总次数
   */
  TotalCalls: number

  /**
   * 脱敏后的慢SQL列表
   */
  NormalQueries: Array<NormalQueryItem>
}

/**
 * InitDBInstances请求参数结构体
 */
export interface InitDBInstancesRequest {
  /**
   * 实例ID集合。
   */
  DBInstanceIdSet: Array<string>

  /**
   * 实例根账号用户名。
   */
  AdminName: string

  /**
   * 实例根账号用户名对应的密码。
   */
  AdminPassword: string

  /**
   * 实例字符集，目前只支持：UTF8、LATIN1。
   */
  Charset: string
}

/**
 * RestartDBInstance返回参数结构体
 */
export interface RestartDBInstanceResponse {
  /**
   * 异步流程ID
   */
  FlowId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetAutoRenewFlag返回参数结构体
 */
export interface SetAutoRenewFlagResponse {
  /**
   * 设置成功的实例个数
   */
  Count?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
  /**
   * 查询到的实例数量。
   */
  TotalCount?: number

  /**
   * 实例详细信息集合。
   */
  DBInstanceSet?: Array<DBInstance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述某个地域下某个可用区的可售卖规格详细信息。
 */
export interface SpecInfo {
  /**
   * 地域英文编码，对应RegionSet的Region字段
   */
  Region: string

  /**
   * 区域英文编码，对应ZoneSet的Zone字段
   */
  Zone: string

  /**
   * 规格详细信息列表
   */
  SpecItemInfoList: Array<SpecItemInfo>
}

/**
 * 描述实例的详细信息
 */
export interface DBInstance {
  /**
   * 实例所属地域，如: ap-guangzhou，对应RegionSet的Region字段
   */
  Region: string

  /**
   * 实例所属可用区， 如：ap-guangzhou-3，对应ZoneSet的Zone字段
   */
  Zone: string

  /**
   * 项目ID
   */
  ProjectId: number

  /**
   * 私有网络ID
   */
  VpcId: string

  /**
   * 子网ID
   */
  SubnetId: string

  /**
   * 实例ID
   */
  DBInstanceId: string

  /**
   * 实例名称
   */
  DBInstanceName: string

  /**
   * 实例状态，分别为：applying（申请中）、init(待初始化)、initing(初始化中)、running(运行中)、limited run（受限运行）、isolated（已隔离）、recycling（回收中）、recycled（已回收）、job running（任务执行中）、offline（下线）、migrating（迁移中）、expanding（扩容中）、readonly（只读）、restarting（重启中）
   */
  DBInstanceStatus: string

  /**
   * 实例分配的内存大小，单位：GB
   */
  DBInstanceMemory: number

  /**
   * 实例分配的存储空间大小，单位：GB
   */
  DBInstanceStorage: number

  /**
   * 实例分配的CPU数量，单位：个
   */
  DBInstanceCpu: number

  /**
   * 售卖规格ID
   */
  DBInstanceClass: string

  /**
   * 实例类型，类型有：1、primary（主实例）；2、readonly（只读实例）；3、guard（灾备实例）；4、temp（临时实例）
   */
  DBInstanceType: string

  /**
   * 实例版本，目前只支持standard（双机高可用版, 一主一从）
   */
  DBInstanceVersion: string

  /**
   * 实例DB字符集
   */
  DBCharset: string

  /**
   * PostgreSQL内核版本
   */
  DBVersion: string

  /**
   * 实例创建时间
   */
  CreateTime: string

  /**
   * 实例执行最后一次更新的时间
   */
  UpdateTime: string

  /**
   * 实例到期时间
   */
  ExpireTime: string

  /**
   * 实例隔离时间
   */
  IsolatedTime: string

  /**
   * 计费模式，1、prepaid（包年包月,预付费）；2、postpaid（按量计费，后付费）
   */
  PayType: string

  /**
   * 是否自动续费，1：自动续费，0：不自动续费
   */
  AutoRenew: number

  /**
   * 实例网络连接信息
   */
  DBInstanceNetInfo: Array<DBInstanceNetInfo>

  /**
   * 机器类型
   */
  Type: string

  /**
   * 用户的AppId
   */
  AppId: number

  /**
   * 实例的Uid
   */
  Uid: number

  /**
   * 实例是否支持Ipv6，1：支持，0：不支持
   */
  SupportIpv6: number

  /**
      * 实例绑定的标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagList: Array<Tag>

  /**
      * 主实例信息，仅在实例为只读实例时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  MasterDBInstanceId: string

  /**
      * 只读实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReadOnlyInstanceNum: number

  /**
      * 只读实例在只读组中的状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusInReadonlyGroup: string
}

/**
 * DescribeProductConfig返回参数结构体
 */
export interface DescribeProductConfigResponse {
  /**
   * 售卖规格列表。
   */
  SpecInfoList?: Array<SpecInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetAccountPassword返回参数结构体
 */
export interface ResetAccountPasswordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetAccountPassword请求参数结构体
 */
export interface ResetAccountPasswordRequest {
  /**
   * 实例ID，形如postgres-4wdeb0zv
   */
  DBInstanceId: string

  /**
   * 实例账户名
   */
  UserName: string

  /**
   * UserName账户对应的新密码
   */
  Password: string
}

/**
 * DescribeOrders请求参数结构体
 */
export interface DescribeOrdersRequest {
  /**
   * 订单名集合
   */
  DealNames: Array<string>
}

/**
 * InquiryPriceUpgradeDBInstance返回参数结构体
 */
export interface InquiryPriceUpgradeDBInstanceResponse {
  /**
   * 总费用，打折前的
   */
  OriginalPrice?: number

  /**
   * 实际需要付款金额
   */
  Price?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InitDBInstances返回参数结构体
 */
export interface InitDBInstancesResponse {
  /**
   * 实例ID集合。
   */
  DBInstanceIdSet?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBBackups请求参数结构体
 */
export interface DescribeDBBackupsRequest {
  /**
   * 实例ID，形如postgres-4wdeb0zv。
   */
  DBInstanceId: string

  /**
   * 备份方式（1-全量）。目前只支持全量，取值为1。
   */
  Type: number

  /**
   * 查询开始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
   */
  StartTime: string

  /**
   * 查询结束时间，形如2018-06-10 17:06:38
   */
  EndTime: string

  /**
   * 备份列表分页返回，每页返回数量，默认为 20，最小为1，最大值为 100。（当该参数不传或者传0时按默认值处理）
   */
  Limit?: number

  /**
   * 返回结果中的第几页，从第0页开始。默认为0。
   */
  Offset?: number
}

/**
 * serverless账号描述
 */
export interface ServerlessDBAccount {
  /**
      * 用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBUser: string

  /**
      * 密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBPassword: string

  /**
      * 连接数限制
注意：此字段可能返回 null，表示取不到有效值。
      */
  DBConnLimit: number
}

/**
 * OpenDBExtranetAccess返回参数结构体
 */
export interface OpenDBExtranetAccessResponse {
  /**
   * 异步任务流程ID
   */
  FlowId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称等
 * 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
 * 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 过滤键的名称。
   */
  Name?: string

  /**
   * 一个或者多个过滤值。
   */
  Values?: Array<string>
}

/**
 * RenewInstance请求参数结构体
 */
export interface RenewInstanceRequest {
  /**
   * 实例ID，形如postgres-6fego161
   */
  DBInstanceId: string

  /**
   * 续费多少个月
   */
  Period: number

  /**
   * 是否自动使用代金券,1是,0否，默认不使用
   */
  AutoVoucher?: number

  /**
   * 代金券ID列表，目前仅支持指定一张代金券
   */
  VoucherIds?: Array<string>
}

/**
 * 实例绑定的标签信息，包含标签键TagKey和标签值TagValue
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey: string

  /**
   * 标签值
   */
  TagValue: string
}

/**
 * 订单详情
 */
export interface PgDeal {
  /**
   * 订单名
   */
  DealName: string

  /**
   * 所属用户
   */
  OwnerUin: string

  /**
   * 订单涉及多少个实例
   */
  Count: number

  /**
   * 付费模式。1-预付费；0-后付费
   */
  PayMode: number

  /**
   * 异步任务流程ID
   */
  FlowId: number

  /**
   * 实例ID数组
   */
  DBInstanceIdSet: Array<string>
}

/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
  /**
   * 返回的结果数量。
   */
  TotalCount?: number

  /**
   * 地域信息集合。
   */
  RegionSet?: Array<RegionInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabases请求参数结构体
 */
export interface DescribeDatabasesRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
}

/**
 * DescribeAccounts返回参数结构体
 */
export interface DescribeAccountsResponse {
  /**
   * 本次调用接口共返回了多少条数据。
   */
  TotalCount?: number

  /**
   * 帐号列表详细信息。
   */
  Details?: Array<AccountInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceRenewDBInstance返回参数结构体
 */
export interface InquiryPriceRenewDBInstanceResponse {
  /**
   * 总费用，打折前的。比如24650表示246.5元
   */
  OriginalPrice?: number

  /**
   * 实际需要付款金额。比如24650表示246.5元
   */
  Price?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBErrlogs请求参数结构体
 */
export interface DescribeDBErrlogsRequest {
  /**
   * 实例ID，形如postgres-5bq3wfjd
   */
  DBInstanceId: string

  /**
   * 查询起始时间，形如2018-01-01 00:00:00，起始时间不得小于7天以前
   */
  StartTime: string

  /**
   * 查询结束时间，形如2018-01-01 00:00:00
   */
  EndTime: string

  /**
   * 数据库名字
   */
  DatabaseName?: string

  /**
   * 搜索关键字
   */
  SearchKeys?: Array<string>

  /**
   * 分页返回，每页返回的最大数量。取值为1-100
   */
  Limit?: number

  /**
   * 分页返回，返回第几页的数据，从第0页开始计数
   */
  Offset?: number
}

/**
 * 描述可用区的编码和状态信息
 */
export interface ZoneInfo {
  /**
   * 该可用区的英文名称
   */
  Zone: string

  /**
   * 该可用区的中文名称
   */
  ZoneName: string

  /**
   * 该可用区对应的数字编号
   */
  ZoneId: number

  /**
   * 可用状态，UNAVAILABLE表示不可用，AVAILABLE表示可用
   */
  ZoneState: string

  /**
   * 该可用区是否支持Ipv6
   */
  ZoneSupportIpv6: number
}

/**
 * 数据库备份信息
 */
export interface DBBackup {
  /**
   * 备份文件唯一标识
   */
  Id: number

  /**
   * 文件生成的开始时间
   */
  StartTime: string

  /**
   * 文件生成的结束时间
   */
  EndTime: string

  /**
   * 文件大小(K)
   */
  Size: number

  /**
   * 策略（0-实例备份；1-多库备份）
   */
  Strategy: number

  /**
   * 类型（0-定时）
   */
  Way: number

  /**
   * 备份方式（1-完整）
   */
  Type: number

  /**
   * 状态（1-创建中；2-成功；3-失败）
   */
  Status: number

  /**
   * DB列表
   */
  DbList: Array<string>

  /**
   * 内网下载地址
   */
  InternalAddr: string

  /**
   * 外网下载地址
   */
  ExternalAddr: string
}

/**
 * 描述实例的网络连接信息。
 */
export interface DBInstanceNetInfo {
  /**
   * DNS域名
   */
  Address: string

  /**
   * IP地址
   */
  Ip: string

  /**
   * 连接Port地址
   */
  Port: number

  /**
   * 网络类型，1、inner（基础网络内网地址）；2、private（私有网络内网地址）；3、public（基础网络或私有网络的外网地址）；
   */
  NetType: string

  /**
   * 网络连接状态
   */
  Status: string
}

/**
 * ModifyDBInstancesProject请求参数结构体
 */
export interface ModifyDBInstancesProjectRequest {
  /**
   * postgresql实例ID数组
   */
  DBInstanceIdSet: Array<string>

  /**
   * postgresql实例所属新项目的ID
   */
  ProjectId: string
}

/**
 * serverless实例网络信息描述
 */
export interface ServerlessDBInstanceNetInfo {
  /**
      * 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Address: string

  /**
      * ip地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ip: string

  /**
      * 端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 网络类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  NetType: string
}

/**
 * UpgradeDBInstance返回参数结构体
 */
export interface UpgradeDBInstanceResponse {
  /**
   * 交易名字。
   */
  DealName?: string

  /**
   * 冻结流水号
   */
  BillId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceName返回参数结构体
 */
export interface ModifyDBInstanceNameResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenServerlessDBExtranetAccess返回参数结构体
 */
export interface OpenServerlessDBExtranetAccessResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseDBExtranetAccess返回参数结构体
 */
export interface CloseDBExtranetAccessResponse {
  /**
   * 异步任务流程ID
   */
  FlowId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyDBInstance返回参数结构体
 */
export interface DestroyDBInstanceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceAttribute返回参数结构体
 */
export interface DescribeDBInstanceAttributeResponse {
  /**
   * 实例详细信息。
   */
  DBInstance?: DBInstance

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBSlowlogs请求参数结构体
 */
export interface DescribeDBSlowlogsRequest {
  /**
   * 实例ID，形如postgres-lnp6j617
   */
  DBInstanceId: string

  /**
   * 查询起始时间，形如2018-06-10 17:06:38，起始时间不得小于7天以前
   */
  StartTime: string

  /**
   * 查询结束时间，形如2018-06-10 17:06:38
   */
  EndTime: string

  /**
   * 数据库名字
   */
  DatabaseName?: string

  /**
   * 按照何种指标排序，取值为sum_calls或者sum_cost_time。sum_calls-总调用次数；sum_cost_time-总的花费时间
   */
  OrderBy?: string

  /**
   * 排序规则。desc-降序；asc-升序
   */
  OrderByType?: string

  /**
   * 分页返回结果，每页最大返回数量，取值为1-100，默认20
   */
  Limit?: number

  /**
   * 分页返回结果，返回结果的第几页，从0开始计数
   */
  Offset?: number
}

/**
 * DescribeServerlessDBInstances请求参数结构体
 */
export interface DescribeServerlessDBInstancesRequest {
  /**
   * 查询条件
   */
  Filter?: Array<Filter>

  /**
   * 查询个数
   */
  Limit?: number

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 排序指标，目前支持实例创建时间CreateTime
   */
  OrderBy?: string

  /**
   * 排序方式，包括升序、降序
   */
  OrderByType?: string
}

/**
 * OpenDBExtranetAccess请求参数结构体
 */
export interface OpenDBExtranetAccessRequest {
  /**
   * 实例ID，形如postgres-hez4fh0v
   */
  DBInstanceId: string

  /**
   * 是否开通Ipv6外网，1：是，0：否
   */
  IsIpv6?: number
}

/**
 * DescribeDBBackups返回参数结构体
 */
export interface DescribeDBBackupsResponse {
  /**
   * 返回备份列表中备份文件的个数
   */
  TotalCount?: number

  /**
   * 备份列表
   */
  BackupList?: Array<DBBackup>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRegions请求参数结构体
 */
export type DescribeRegionsRequest = null

/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
  /**
   * 返回的结果数量。
   */
  TotalCount?: number

  /**
   * 可用区信息集合。
   */
  ZoneSet?: Array<ZoneInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单条SlowQuery信息
 */
export interface NormalQueryItem {
  /**
   * 用户名
   */
  UserName: string

  /**
   * 调用次数
   */
  Calls: number

  /**
   * 粒度点
   */
  CallsGrids: Array<number>

  /**
   * 花费总时间
   */
  CostTime: number

  /**
   * 影响的行数
   */
  Rows: number

  /**
   * 花费最小时间
   */
  MinCostTime: number

  /**
   * 花费最大时间
   */
  MaxCostTime: number

  /**
   * 最早一条慢SQL时间
   */
  FirstTime: string

  /**
   * 最晚一条慢SQL时间
   */
  LastTime: string

  /**
   * 读共享内存块数
   */
  SharedReadBlks: number

  /**
   * 写共享内存块数
   */
  SharedWriteBlks: number

  /**
   * 读io总耗时
   */
  ReadCostTime: number

  /**
   * 写io总耗时
   */
  WriteCostTime: number

  /**
   * 数据库名字
   */
  DatabaseName: string

  /**
   * 脱敏后的慢SQL
   */
  NormalQuery: string
}

/**
 * CreateServerlessDBInstance返回参数结构体
 */
export interface CreateServerlessDBInstanceResponse {
  /**
   * 实例ID，该ID全局唯一，如：postgres-xxxxx
   */
  DBInstanceId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
  /**
   * 数据库信息
   */
  Items?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBXlogs返回参数结构体
 */
export interface DescribeDBXlogsResponse {
  /**
   * 表示此次返回结果有多少条数据。
   */
  TotalCount?: number

  /**
   * Xlog列表
   */
  XlogList?: Array<Xlog>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceAttribute请求参数结构体
 */
export interface DescribeDBInstanceAttributeRequest {
  /**
   * 实例ID
   */
  DBInstanceId: string
}

/**
 * CloseServerlessDBExtranetAccess请求参数结构体
 */
export interface CloseServerlessDBExtranetAccessRequest {
  /**
   * 实例唯一标识符
   */
  DBInstanceId?: string

  /**
   * 实例名称
   */
  DBInstanceName?: string
}

/**
 * ModifyAccountRemark返回参数结构体
 */
export interface ModifyAccountRemarkResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBSlowlogs返回参数结构体
 */
export interface DescribeDBSlowlogsResponse {
  /**
   * 本次返回多少条数据
   */
  TotalCount?: number

  /**
   * 慢查询日志详情
   */
  Detail?: SlowlogDetail

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccountRemark请求参数结构体
 */
export interface ModifyAccountRemarkRequest {
  /**
   * 实例ID，形如postgres-4wdeb0zv
   */
  DBInstanceId: string

  /**
   * 实例用户名
   */
  UserName: string

  /**
   * 用户UserName对应的新备注
   */
  Remark: string
}

/**
 * CloseDBExtranetAccess请求参数结构体
 */
export interface CloseDBExtranetAccessRequest {
  /**
   * 实例ID，形如postgres-6r233v55
   */
  DBInstanceId: string

  /**
   * 是否关闭Ipv6外网，1：是，0：否
   */
  IsIpv6?: number
}

/**
 * 数据库Xlog信息
 */
export interface Xlog {
  /**
   * 备份文件唯一标识
   */
  Id: number

  /**
   * 文件生成的开始时间
   */
  StartTime: string

  /**
   * 文件生成的结束时间
   */
  EndTime: string

  /**
   * 内网下载地址
   */
  InternalAddr: string

  /**
   * 外网下载地址
   */
  ExternalAddr: string

  /**
   * 备份文件大小
   */
  Size: number
}
