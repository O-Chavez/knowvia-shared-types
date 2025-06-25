export var authProviderEnum;
(function (authProviderEnum) {
    authProviderEnum["google"] = "google";
    authProviderEnum["local"] = "local";
})(authProviderEnum || (authProviderEnum = {}));
export var subscriptionStatusEnum;
(function (subscriptionStatusEnum) {
    subscriptionStatusEnum["active"] = "active";
    subscriptionStatusEnum["trialing"] = "trialing";
    subscriptionStatusEnum["past_due"] = "past_due";
    subscriptionStatusEnum["unpaid"] = "unpaid";
    subscriptionStatusEnum["canceled"] = "canceled";
    subscriptionStatusEnum["incomplete"] = "incomplete";
    subscriptionStatusEnum["incomplete_expired"] = "incomplete_expired";
})(subscriptionStatusEnum || (subscriptionStatusEnum = {}));
export var packageTypeEnum;
(function (packageTypeEnum) {
    packageTypeEnum["starter"] = "starter";
    packageTypeEnum["growth"] = "growth";
    packageTypeEnum["pro"] = "pro";
    packageTypeEnum["enterprise"] = "enterprise";
})(packageTypeEnum || (packageTypeEnum = {}));
export var billingCycleEnum;
(function (billingCycleEnum) {
    billingCycleEnum["monthly"] = "monthly";
    billingCycleEnum["yearly"] = "annual";
})(billingCycleEnum || (billingCycleEnum = {}));
export var accountStatusEnum;
(function (accountStatusEnum) {
    accountStatusEnum["created"] = "created";
    accountStatusEnum["payment_provided"] = "payment_provided";
    accountStatusEnum["documents_provided"] = "documents_provided";
    accountStatusEnum["active"] = "active";
    accountStatusEnum["inactive"] = "inactive";
    accountStatusEnum["deleted"] = "deleted";
    accountStatusEnum["email_verified"] = "email_verified";
    accountStatusEnum["payment_failed"] = "payment_failed";
})(accountStatusEnum || (accountStatusEnum = {}));
