# Table of Contents

- [Open Collective Public GraphQL](#open-collective-public-graphql)
- [How to access the API](#how-to-access-the-api)
- [Account Information](#account-information)
- [Backers](#backers)
- [Contributions](#contributions)
- [Expenses](#expenses)
- [accountQuery](#accountquery)
- [accountsQuery](#accountsquery)
- [activitiesQuery](#activitiesquery)
- [applicationQuery](#applicationquery)
- [collectiveQuery](#collectivequery)
- [conversationQuery](#conversationquery)
- [currencyExchangeRateQuery](#currencyexchangeratequery)
- [eventQuery](#eventquery)
- [expenseQuery](#expensequery)
- [expenseTagStatsQuery](#expensetagstatsquery)
- [expensesQuery](#expensesquery)
- [fundQuery](#fundquery)
- [hostQuery](#hostquery)
- [hostApplicationQuery](#hostapplicationquery)
- [hostsQuery](#hostsquery)
- [individualQuery](#individualquery)
- [loggedInAccountQuery](#loggedinaccountquery)
- [meQuery](#mequery)
- [memberInvitationsQuery](#memberinvitationsquery)
- [orderQuery](#orderquery)
- [ordersQuery](#ordersquery)
- [organizationQuery](#organizationquery)
- [paypalPlanQuery](#paypalplanquery)
- [personalTokenQuery](#personaltokenquery)
- [projectQuery](#projectquery)
- [searchQuery](#searchquery)
- [tagStatsQuery](#tagstatsquery)
- [tierQuery](#tierquery)
- [transactionQuery](#transactionquery)
- [transactionGroupQuery](#transactiongroupquery)
- [transactionGroupsQuery](#transactiongroupsquery)
- [transactionsQuery](#transactionsquery)
- [transactionsImportQuery](#transactionsimportquery)
- [updateQuery](#updatequery)
- [updatesQuery](#updatesquery)
- [virtualCardQuery](#virtualcardquery)
- [virtualCardRequestQuery](#virtualcardrequestquery)
- [virtualCardRequestsQuery](#virtualcardrequestsquery)
- [addAgreementMutation](#addagreementmutation)
- [addCreditCardMutation](#addcreditcardmutation)
- [addEmojiReactionMutation](#addemojireactionmutation)
- [addFundsMutation](#addfundsmutation)
- [addStripePaymentMethodFromSetupIntentMutation](#addstripepaymentmethodfromsetupintentmutation)
- [addTwoFactorAuthTokenToIndividualMutation](#addtwofactorauthtokentoindividualmutation)
- [applyToHostMutation](#applytohostmutation)
- [assignNewVirtualCardMutation](#assignnewvirtualcardmutation)
- [banAccountMutation](#banaccountmutation)
- [cancelOrderMutation](#cancelordermutation)
- [clearCacheForAccountMutation](#clearcacheforaccountmutation)
- [confirmCreditCardMutation](#confirmcreditcardmutation)
- [confirmEmailMutation](#confirmemailmutation)
- [confirmGuestAccountMutation](#confirmguestaccountmutation)
- [confirmOrderMutation](#confirmordermutation)
- [connectPlaidAccountMutation](#connectplaidaccountmutation)
- [convertOrganizationToVendorMutation](#convertorganizationtovendormutation)
- [createApplicationMutation](#createapplicationmutation)
- [createCollectiveMutation](#createcollectivemutation)
- [createCommentMutation](#createcommentmutation)
- [createConnectedAccountMutation](#createconnectedaccountmutation)
- [createConversationMutation](#createconversationmutation)
- [createEventMutation](#createeventmutation)
- [createExpenseMutation](#createexpensemutation)
- [createFundMutation](#createfundmutation)
- [createMemberMutation](#createmembermutation)
- [createOrderMutation](#createordermutation)
- [createOrganizationMutation](#createorganizationmutation)
- [createPaymentIntentMutation](#createpaymentintentmutation)
- [createPayoutMethodMutation](#createpayoutmethodmutation)
- [createPendingOrderMutation](#creatependingordermutation)
- [createPersonalTokenMutation](#createpersonaltokenmutation)
- [createProjectMutation](#createprojectmutation)
- [createSetupIntentMutation](#createsetupintentmutation)
- [createTierMutation](#createtiermutation)
- [createTransactionsImportMutation](#createtransactionsimportmutation)
- [createUpdateMutation](#createupdatemutation)
- [createVendorMutation](#createvendormutation)
- [createVirtualCardMutation](#createvirtualcardmutation)
- [createWebAuthnRegistrationOptionsMutation](#createwebauthnregistrationoptionsmutation)
- [createWebhookMutation](#createwebhookmutation)
- [deleteAccountMutation](#deleteaccountmutation)
- [deleteAgreementMutation](#deleteagreementmutation)
- [deleteApplicationMutation](#deleteapplicationmutation)
- [deleteCommentMutation](#deletecommentmutation)
- [deleteConnectedAccountMutation](#deleteconnectedaccountmutation)
- [deleteExpenseMutation](#deleteexpensemutation)
- [deletePersonalTokenMutation](#deletepersonaltokenmutation)
- [deleteTierMutation](#deletetiermutation)
- [deleteTransactionsImportMutation](#deletetransactionsimportmutation)
- [deleteUpdateMutation](#deleteupdatemutation)
- [deleteVendorMutation](#deletevendormutation)
- [deleteVirtualCardMutation](#deletevirtualcardmutation)
- [deleteWebhookMutation](#deletewebhookmutation)
- [draftExpenseAndInviteUserMutation](#draftexpenseandinviteusermutation)
- [duplicateAccountMutation](#duplicateaccountmutation)
- [editAccountMutation](#editaccountmutation)
- [editAccountFeeStructureMutation](#editaccountfeestructuremutation)
- [editAccountFlagsMutation](#editaccountflagsmutation)
- [editAccountFreezeStatusMutation](#editaccountfreezestatusmutation)
- [editAccountSettingMutation](#editaccountsettingmutation)
- [editAccountTypeMutation](#editaccounttypemutation)
- [editAccountingCategoriesMutation](#editaccountingcategoriesmutation)
- [editAddedFundsMutation](#editaddedfundsmutation)
- [editAgreementMutation](#editagreementmutation)
- [editCommentMutation](#editcommentmutation)
- [editConversationMutation](#editconversationmutation)
- [editExpenseMutation](#editexpensemutation)
- [editLegalDocumentStatusMutation](#editlegaldocumentstatusmutation)
- [editMemberMutation](#editmembermutation)
- [editMemberInvitationMutation](#editmemberinvitationmutation)
- [editPayoutMethodMutation](#editpayoutmethodmutation)
- [editPendingOrderMutation](#editpendingordermutation)
- [editPublicMessageMutation](#editpublicmessagemutation)
- [editTierMutation](#edittiermutation)
- [editTransactionsImportMutation](#edittransactionsimportmutation)
- [editTwoFactorAuthenticationMethodMutation](#edittwofactorauthenticationmethodmutation)
- [editUpdateMutation](#editupdatemutation)
- [editVendorMutation](#editvendormutation)
- [editVirtualCardMutation](#editvirtualcardmutation)
- [followAccountMutation](#followaccountmutation)
- [followConversationMutation](#followconversationmutation)
- [generatePlaidLinkTokenMutation](#generateplaidlinktokenmutation)
- [importTransactionsMutation](#importtransactionsmutation)
- [inviteMemberMutation](#invitemembermutation)
- [mergeAccountsMutation](#mergeaccountsmutation)
- [moveExpensesMutation](#moveexpensesmutation)
- [moveOrdersMutation](#moveordersmutation)
- [pauseVirtualCardMutation](#pausevirtualcardmutation)
- [processExpenseMutation](#processexpensemutation)
- [processHostApplicationMutation](#processhostapplicationmutation)
- [processPendingOrderMutation](#processpendingordermutation)
- [publishUpdateMutation](#publishupdatemutation)
- [refreshPlaidAccountMutation](#refreshplaidaccountmutation)
- [refundTransactionMutation](#refundtransactionmutation)
- [regenerateRecoveryCodesMutation](#regeneraterecoverycodesmutation)
- [rejectTransactionMutation](#rejecttransactionmutation)
- [rejectVirtualCardRequestMutation](#rejectvirtualcardrequestmutation)
- [removeEmojiReactionMutation](#removeemojireactionmutation)
- [removeHostMutation](#removehostmutation)
- [removeMemberMutation](#removemembermutation)
- [removePaymentMethodMutation](#removepaymentmethodmutation)
- [removePayoutMethodMutation](#removepayoutmethodmutation)
- [removeTwoFactorAuthTokenFromIndividualMutation](#removetwofactorauthtokenfromindividualmutation)
- [replyToMemberInvitationMutation](#replytomemberinvitationmutation)
- [requestVirtualCardMutation](#requestvirtualcardmutation)
- [resendDraftExpenseInviteMutation](#resenddraftexpenseinvitemutation)
- [restorePayoutMethodMutation](#restorepayoutmethodmutation)
- [resumeVirtualCardMutation](#resumevirtualcardmutation)
- [revokeOAuthAuthorizationMutation](#revokeoauthauthorizationmutation)
- [rootAnonymizeAccountMutation](#rootanonymizeaccountmutation)
- [sendGuestConfirmationEmailMutation](#sendguestconfirmationemailmutation)
- [sendMessageMutation](#sendmessagemutation)
- [sendSurveyResponseMutation](#sendsurveyresponsemutation)
- [setChangelogViewDateMutation](#setchangelogviewdatemutation)
- [setEmailNotificationMutation](#setemailnotificationmutation)
- [setNewsletterOptInMutation](#setnewsletteroptinmutation)
- [setPasswordMutation](#setpasswordmutation)
- [setPoliciesMutation](#setpoliciesmutation)
- [setTagsMutation](#settagsmutation)
- [startResumeOrdersProcessMutation](#startresumeordersprocessmutation)
- [submitLegalDocumentMutation](#submitlegaldocumentmutation)
- [syncPlaidAccountMutation](#syncplaidaccountmutation)
- [unfollowAccountMutation](#unfollowaccountmutation)
- [unpublishUpdateMutation](#unpublishupdatemutation)
- [updateApplicationMutation](#updateapplicationmutation)
- [updateOrderMutation](#updateordermutation)
- [updateOrderAccountingCategoryMutation](#updateorderaccountingcategorymutation)
- [updatePersonalTokenMutation](#updatepersonaltokenmutation)
- [updateSocialLinksMutation](#updatesociallinksmutation)
- [updateTransactionsImportRowsMutation](#updatetransactionsimportrowsmutation)
- [updateWebhookMutation](#updatewebhookmutation)
- [uploadFileMutation](#uploadfilemutation)
- [AccountInterface](#accountinterface)
- [AccountCacheTypeEnum](#accountcachetypeenum)
- [AccountCollectionObject](#accountcollectionobject)
- [AccountFreezeActionEnum](#accountfreezeactionenum)
- [AccountOrdersFilterEnum](#accountordersfilterenum)
- [AccountPermissionsObject](#accountpermissionsobject)
- [AccountReferenceInputInput Object](#accountreferenceinputinput-object)
- [AccountSettingsKeyScalar](#accountsettingskeyscalar)
- [AccountStatsObject](#accountstatsobject)
- [AccountTypeEnum](#accounttypeenum)
- [AccountUpdateInputInput Object](#accountupdateinputinput-object)
- [AccountWithContributionsInterface](#accountwithcontributionsinterface)
- [AccountWithHostInterface](#accountwithhostinterface)
- [AccountWithParentInterface](#accountwithparentinterface)
- [AccountingCategoryObject](#accountingcategoryobject)
- [AccountingCategoryAppliesToEnum](#accountingcategoryappliestoenum)
- [AccountingCategoryCollectionObject](#accountingcategorycollectionobject)
- [AccountingCategoryInputInput Object](#accountingcategoryinputinput-object)
- [AccountingCategoryKindEnum](#accountingcategorykindenum)
- [AccountingCategoryReferenceInputInput Object](#accountingcategoryreferenceinputinput-object)
- [ActivityObject](#activityobject)
- [ActivityAndClassesTypeEnum](#activityandclassestypeenum)
- [ActivityChannelEnum](#activitychannelenum)
- [ActivityClassTypeEnum](#activityclasstypeenum)
- [ActivityCollectionObject](#activitycollectionobject)
- [ActivitySubscriptionObject](#activitysubscriptionobject)
- [ActivityTypeEnum](#activitytypeenum)
- [AddTwoFactorAuthTokenToIndividualResponseObject](#addtwofactorauthtokentoindividualresponseobject)
- [AgreementObject](#agreementobject)
- [AgreementCollectionObject](#agreementcollectionobject)
- [AgreementReferenceInputInput Object](#agreementreferenceinputinput-object)
- [AmountObject](#amountobject)
- [AmountInputInput Object](#amountinputinput-object)
- [AmountRangeInputInput Object](#amountrangeinputinput-object)
- [AmountStatsObject](#amountstatsobject)
- [ApplicationObject](#applicationobject)
- [ApplicationCreateInputInput Object](#applicationcreateinputinput-object)
- [ApplicationReferenceInputInput Object](#applicationreferenceinputinput-object)
- [ApplicationTypeEnum](#applicationtypeenum)
- [ApplicationUpdateInputInput Object](#applicationupdateinputinput-object)
- [AveragePeriodEnum](#averageperiodenum)
- [BanAccountResponseObject](#banaccountresponseobject)
- [BooleanScalar](#booleanscalar)
- [BotObject](#botobject)
- [COLLECTIVE_MINIMUM_ADMINSObject](#collective-minimum-adminsobject)
- [CONTRIBUTOR_INFO_THRESHOLDSObject](#contributor-info-thresholdsobject)
- [CaptchaInputInput Object](#captchainputinput-object)
- [CaptchaProviderEnum](#captchaproviderenum)
- [ChronologicalOrderInputInput Object](#chronologicalorderinputinput-object)
- [CollectionInterface](#collectioninterface)
- [CollectiveObject](#collectiveobject)
- [CollectiveCreateInputInput Object](#collectivecreateinputinput-object)
- [CollectiveFeatureStatusEnum](#collectivefeaturestatusenum)
- [CollectiveFeaturesObject](#collectivefeaturesobject)
- [CommentObject](#commentobject)
- [CommentCollectionObject](#commentcollectionobject)
- [CommentCreateInputInput Object](#commentcreateinputinput-object)
- [CommentReferenceInputInput Object](#commentreferenceinputinput-object)
- [CommentTypeEnum](#commenttypeenum)
- [CommentUpdateInputInput Object](#commentupdateinputinput-object)
- [ConfirmGuestAccountResponseObject](#confirmguestaccountresponseobject)
- [ConnectedAccountObject](#connectedaccountobject)
- [ConnectedAccountCreateInputInput Object](#connectedaccountcreateinputinput-object)
- [ConnectedAccountReferenceInputInput Object](#connectedaccountreferenceinputinput-object)
- [ConnectedAccountServiceEnum](#connectedaccountserviceenum)
- [ContributionFrequencyEnum](#contributionfrequencyenum)
- [ContributionStatsObject](#contributionstatsobject)
- [ContributorObject](#contributorobject)
- [ContributorCollectionObject](#contributorcollectionobject)
- [ContributorProfileObject](#contributorprofileobject)
- [ConversationObject](#conversationobject)
- [ConversationCollectionObject](#conversationcollectionobject)
- [ConversationReferenceInputInput Object](#conversationreferenceinputinput-object)
- [ConversationStatsObject](#conversationstatsobject)
- [CountryISOEnum](#countryisoenum)
- [CreditObject](#creditobject)
- [CreditCardCreateInputInput Object](#creditcardcreateinputinput-object)
- [CreditCardWithStripeErrorObject](#creditcardwithstripeerrorobject)
- [CurrencyEnum](#currencyenum)
- [CurrencyExchangeRateObject](#currencyexchangerateobject)
- [CurrencyExchangeRateInputInput Object](#currencyexchangerateinputinput-object)
- [CurrencyExchangeRateRequestInput Object](#currencyexchangeraterequestinput-object)
- [CurrencyExchangeRateSourceTypeEnum](#currencyexchangeratesourcetypeenum)
- [DateScalar](#datescalar)
- [DateTimeScalar](#datetimescalar)
- [DateTimeFieldEnum](#datetimefieldenum)
- [DebitObject](#debitobject)
- [DuplicateAccountDataTypeInputInput Object](#duplicateaccountdatatypeinputinput-object)
- [EXPENSE_AUTHOR_CANNOT_APPROVEObject](#expense-author-cannot-approveobject)
- [EXPENSE_CATEGORIZATIONObject](#expense-categorizationobject)
- [EXPENSE_POLICIESObject](#expense-policiesobject)
- [EmailAddressScalar](#emailaddressscalar)
- [EmojiReactionResponseObject](#emojireactionresponseobject)
- [EventObject](#eventobject)
- [EventCreateInputInput Object](#eventcreateinputinput-object)
- [ExpectedFundsFilterEnum](#expectedfundsfilterenum)
- [ExpenseObject](#expenseobject)
- [ExpenseAttachedFileObject](#expenseattachedfileobject)
- [ExpenseAttachedFileInputInput Object](#expenseattachedfileinputinput-object)
- [ExpenseCollectionObject](#expensecollectionobject)
- [ExpenseCollectionTotalAmountObject](#expensecollectiontotalamountobject)
- [ExpenseCreateInputInput Object](#expensecreateinputinput-object)
- [ExpenseCurrencySourceEnum](#expensecurrencysourceenum)
- [ExpenseDirectionEnum](#expensedirectionenum)
- [ExpenseInviteDraftInputInput Object](#expenseinvitedraftinputinput-object)
- [ExpenseInviteeInput Object](#expenseinviteeinput-object)
- [ExpenseInviteeOrganizationInputInput Object](#expenseinviteeorganizationinputinput-object)
- [ExpenseItemObject](#expenseitemobject)
- [ExpenseItemCreateInputInput Object](#expenseitemcreateinputinput-object)
- [ExpenseItemInputInput Object](#expenseiteminputinput-object)
- [ExpenseItemParsedFileInfoObject](#expenseitemparsedfileinfoobject)
- [ExpenseLockableFieldsEnum](#expenselockablefieldsenum)
- [ExpenseParsedFileInfoObject](#expenseparsedfileinfoobject)
- [ExpensePermissionsObject](#expensepermissionsobject)
- [ExpenseProcessActionEnum](#expenseprocessactionenum)
- [ExpenseQuoteObject](#expensequoteobject)
- [ExpenseReferenceInputInput Object](#expensereferenceinputinput-object)
- [ExpenseStatsObject](#expensestatsobject)
- [ExpenseStatusEnum](#expensestatusenum)
- [ExpenseStatusFilterEnum](#expensestatusfilterenum)
- [ExpenseTaxInputInput Object](#expensetaxinputinput-object)
- [ExpenseTypeEnum](#expensetypeenum)
- [ExpenseUpdateInputInput Object](#expenseupdateinputinput-object)
- [ExpenseValuesByRoleObject](#expensevaluesbyroleobject)
- [ExpenseValuesRoleDetailsObject](#expensevaluesroledetailsobject)
- [FeesPayerEnum](#feespayerenum)
- [FileInfoInterface](#fileinfointerface)
- [FloatScalar](#floatscalar)
- [FollowAccountResultObject](#followaccountresultobject)
- [FundObject](#fundobject)
- [FundCreateInputInput Object](#fundcreateinputinput-object)
- [GenericFileInfoObject](#genericfileinfoobject)
- [GuestInfoInputInput Object](#guestinfoinputinput-object)
- [HostObject](#hostobject)
- [HostApplicationObject](#hostapplicationobject)
- [HostApplicationCollectionObject](#hostapplicationcollectionobject)
- [HostApplicationReferenceInputInput Object](#hostapplicationreferenceinputinput-object)
- [HostApplicationStatusEnum](#hostapplicationstatusenum)
- [HostCollectionObject](#hostcollectionobject)
- [HostExpensesReportNodeObject](#hostexpensesreportnodeobject)
- [HostExpensesReportsObject](#hostexpensesreportsobject)
- [HostFeeStructureEnum](#hostfeestructureenum)
- [HostMetricsObject](#hostmetricsobject)
- [HostMetricsTimeSeriesObject](#hostmetricstimeseriesobject)
- [HostPlanObject](#hostplanobject)
- [HostTransactionReportNodeObject](#hosttransactionreportnodeobject)
- [HostTransactionReportsObject](#hosttransactionreportsobject)
- [HostedAccountCollectionObject](#hostedaccountcollectionobject)
- [HostedAccountSummaryObject](#hostedaccountsummaryobject)
- [ImageFileInfoObject](#imagefileinfoobject)
- [ImageFormatEnum](#imageformatenum)
- [IndividualObject](#individualobject)
- [IndividualConfirmEmailResponseObject](#individualconfirmemailresponseobject)
- [IndividualCreateInputInput Object](#individualcreateinputinput-object)
- [IntScalar](#intscalar)
- [InviteMemberInputInput Object](#invitememberinputinput-object)
- [JSONScalar](#jsonscalar)
- [JSONObjectScalar](#jsonobjectscalar)
- [LastCommentByEnum](#lastcommentbyenum)
- [LegalDocumentObject](#legaldocumentobject)
- [LegalDocumentCollectionObject](#legaldocumentcollectionobject)
- [LegalDocumentRequestStatusEnum](#legaldocumentrequeststatusenum)
- [LegalDocumentServiceEnum](#legaldocumentserviceenum)
- [LegalDocumentTypeEnum](#legaldocumenttypeenum)
- [LocaleScalar](#localescalar)
- [LocationObject](#locationobject)
- [LocationInputInput Object](#locationinputinput-object)
- [MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVALObject](#maximum-virtual-card-limit-amount-for-intervalobject)
- [MarkAsUnPaidExpenseStatusEnum](#markasunpaidexpensestatusenum)
- [MemberObject](#memberobject)
- [MemberCollectionObject](#membercollectionobject)
- [MemberInvitationObject](#memberinvitationobject)
- [MemberInvitationReferenceInputInput Object](#memberinvitationreferenceinputinput-object)
- [MemberOfObject](#memberofobject)
- [MemberOfCollectionObject](#memberofcollectionobject)
- [MemberOfCollectionRolesObject](#memberofcollectionrolesobject)
- [MemberRoleEnum](#memberroleenum)
- [MergeAccountsResponseObject](#mergeaccountsresponseobject)
- [MutationObject](#mutationobject)
- [NewAccountOrReferenceInputInput Object](#newaccountorreferenceinputinput-object)
- [NewAccountOrganizationInputInput Object](#newaccountorganizationinputinput-object)
- [NonEmptyStringScalar](#nonemptystringscalar)
- [OAuthApplicationCollectionObject](#oauthapplicationcollectionobject)
- [OAuthAuthorizationObject](#oauthauthorizationobject)
- [OAuthAuthorizationCollectionObject](#oauthauthorizationcollectionobject)
- [OAuthAuthorizationReferenceInputInput Object](#oauthauthorizationreferenceinputinput-object)
- [OAuthScopeEnum](#oauthscopeenum)
- [OCRParsingOptionsInputInput Object](#ocrparsingoptionsinputinput-object)
- [OrderObject](#orderobject)
- [OrderByFieldTypeEnum](#orderbyfieldtypeenum)
- [OrderByInputInput Object](#orderbyinputinput-object)
- [OrderCollectionObject](#ordercollectionobject)
- [OrderContextInputInput Object](#ordercontextinputinput-object)
- [OrderCreateInputInput Object](#ordercreateinputinput-object)
- [OrderDirectionEnum](#orderdirectionenum)
- [OrderFromAccountInfoInput Object](#orderfromaccountinfoinput-object)
- [OrderPausedByEnum](#orderpausedbyenum)
- [OrderPermissionsObject](#orderpermissionsobject)
- [OrderReferenceInputInput Object](#orderreferenceinputinput-object)
- [OrderStatusEnum](#orderstatusenum)
- [OrderTaxObject](#ordertaxobject)
- [OrderTaxInputInput Object](#ordertaxinputinput-object)
- [OrderUpdateInputInput Object](#orderupdateinputinput-object)
- [OrderWithPaymentObject](#orderwithpaymentobject)
- [OrganizationObject](#organizationobject)
- [OrganizationCreateInputInput Object](#organizationcreateinputinput-object)
- [ParseUploadedFileResultObject](#parseuploadedfileresultobject)
- [PaymentIntentObject](#paymentintentobject)
- [PaymentIntentInputInput Object](#paymentintentinputinput-object)
- [PaymentMethodObject](#paymentmethodobject)
- [PaymentMethodInputInput Object](#paymentmethodinputinput-object)
- [PaymentMethodLegacyTypeEnum](#paymentmethodlegacytypeenum)
- [PaymentMethodReferenceInputInput Object](#paymentmethodreferenceinputinput-object)
- [PaymentMethodServiceEnum](#paymentmethodserviceenum)
- [PaymentMethodTypeEnum](#paymentmethodtypeenum)
- [PayoutMethodObject](#payoutmethodobject)
- [PayoutMethodInputInput Object](#payoutmethodinputinput-object)
- [PayoutMethodReferenceInputInput Object](#payoutmethodreferenceinputinput-object)
- [PayoutMethodTypeEnum](#payoutmethodtypeenum)
- [PaypalPaymentInputInput Object](#paypalpaymentinputinput-object)
- [PaypalPlanObject](#paypalplanobject)
- [PendingOrderCreateInputInput Object](#pendingordercreateinputinput-object)
- [PendingOrderDataObject](#pendingorderdataobject)
- [PendingOrderEditInputInput Object](#pendingordereditinputinput-object)
- [PendingOrderFromAccountInfoObject](#pendingorderfromaccountinfoobject)
- [PermissionObject](#permissionobject)
- [PersonalTokenObject](#personaltokenobject)
- [PersonalTokenCollectionObject](#personaltokencollectionobject)
- [PersonalTokenCreateInputInput Object](#personaltokencreateinputinput-object)
- [PersonalTokenReferenceInputInput Object](#personaltokenreferenceinputinput-object)
- [PersonalTokenUpdateInputInput Object](#personaltokenupdateinputinput-object)
- [PlaidAccountObject](#plaidaccountobject)
- [PlaidAccountTypeEnum](#plaidaccounttypeenum)
- [PlaidConnectAccountResponseObject](#plaidconnectaccountresponseobject)
- [PlaidLinkTokenCreateResponseObject](#plaidlinktokencreateresponseobject)
- [PoliciesObject](#policiesobject)
- [PoliciesCollectiveExpenseAuthorCannotApproveInput Object](#policiescollectiveexpenseauthorcannotapproveinput-object)
- [PoliciesCollectiveMinimumAdminsInputInput Object](#policiescollectiveminimumadminsinputinput-object)
- [PoliciesContributorInfoThresholdsInputInput Object](#policiescontributorinfothresholdsinputinput-object)
- [PoliciesExpenseCategorizationInputInput Object](#policiesexpensecategorizationinputinput-object)
- [PoliciesExpensePoliciesInput Object](#policiesexpensepoliciesinput-object)
- [PoliciesInputInput Object](#policiesinputinput-object)
- [PolicyApplicationEnum](#policyapplicationenum)
- [ProcessExpensePaymentParamsInput Object](#processexpensepaymentparamsinput-object)
- [ProcessExpenseTransferParamsInput Object](#processexpensetransferparamsinput-object)
- [ProcessHostApplicationActionEnum](#processhostapplicationactionenum)
- [ProcessHostApplicationResponseObject](#processhostapplicationresponseobject)
- [ProcessOrderActionEnum](#processorderactionenum)
- [ProjectObject](#projectobject)
- [ProjectCreateInputInput Object](#projectcreateinputinput-object)
- [QueryObject](#queryobject)
- [RecurringExpenseObject](#recurringexpenseobject)
- [RecurringExpenseInputInput Object](#recurringexpenseinputinput-object)
- [RecurringExpenseIntervalEnum](#recurringexpenseintervalenum)
- [SearchResponseObject](#searchresponseobject)
- [SearchResultsObject](#searchresultsobject)
- [SearchResultsAccountsObject](#searchresultsaccountsobject)
- [SearchResultsCommentsObject](#searchresultscommentsobject)
- [SearchResultsExpensesObject](#searchresultsexpensesobject)
- [SearchResultsHostApplicationsObject](#searchresultshostapplicationsobject)
- [SearchResultsOrdersObject](#searchresultsordersobject)
- [SearchResultsTiersObject](#searchresultstiersobject)
- [SearchResultsTransactionsObject](#searchresultstransactionsobject)
- [SearchResultsUpdatesObject](#searchresultsupdatesobject)
- [SecurityCheckObject](#securitycheckobject)
- [SecurityCheckLevelEnum](#securitychecklevelenum)
- [SecurityCheckScopeEnum](#securitycheckscopeenum)
- [SendMessageResultObject](#sendmessageresultobject)
- [SetPasswordResponseObject](#setpasswordresponseobject)
- [SetupIntentObject](#setupintentobject)
- [SetupIntentInputInput Object](#setupintentinputinput-object)
- [SocialLinkObject](#sociallinkobject)
- [SocialLinkInputInput Object](#sociallinkinputinput-object)
- [SocialLinkTypeEnum](#sociallinktypeenum)
- [StrictPercentageScalar](#strictpercentagescalar)
- [StringScalar](#stringscalar)
- [StripeConnectedAccountObject](#stripeconnectedaccountobject)
- [StripeErrorObject](#stripeerrorobject)
- [TagResponseObject](#tagresponseobject)
- [TagSearchOperatorEnum](#tagsearchoperatorenum)
- [TagStatObject](#tagstatobject)
- [TagStatsCollectionObject](#tagstatscollectionobject)
- [TaxInfoObject](#taxinfoobject)
- [TaxInputInput Object](#taxinputinput-object)
- [TaxTypeEnum](#taxtypeenum)
- [TierObject](#tierobject)
- [TierAmountTypeEnum](#tieramounttypeenum)
- [TierCollectionObject](#tiercollectionobject)
- [TierCreateInputInput Object](#tiercreateinputinput-object)
- [TierFrequencyEnum](#tierfrequencyenum)
- [TierIntervalEnum](#tierintervalenum)
- [TierReferenceInputInput Object](#tierreferenceinputinput-object)
- [TierStatsObject](#tierstatsobject)
- [TierTypeEnum](#tiertypeenum)
- [TierUpdateInputInput Object](#tierupdateinputinput-object)
- [TimeSeriesInterface](#timeseriesinterface)
- [TimeSeriesAmountObject](#timeseriesamountobject)
- [TimeSeriesAmountNodeObject](#timeseriesamountnodeobject)
- [TimeSeriesAmountWithKindObject](#timeseriesamountwithkindobject)
- [TimeSeriesAmountWithKindNodeObject](#timeseriesamountwithkindnodeobject)
- [TimeSeriesAmountWithSettlementObject](#timeseriesamountwithsettlementobject)
- [TimeSeriesAmountWithSettlementNodeObject](#timeseriesamountwithsettlementnodeobject)
- [TimeUnitEnum](#timeunitenum)
- [TransactionInterface](#transactioninterface)
- [TransactionCollectionObject](#transactioncollectionobject)
- [TransactionGroupObject](#transactiongroupobject)
- [TransactionGroupCollectionObject](#transactiongroupcollectionobject)
- [TransactionKindEnum](#transactionkindenum)
- [TransactionPermissionsObject](#transactionpermissionsobject)
- [TransactionReferenceInputInput Object](#transactionreferenceinputinput-object)
- [TransactionReportObject](#transactionreportobject)
- [TransactionReportsObject](#transactionreportsobject)
- [TransactionSettlementStatusEnum](#transactionsettlementstatusenum)
- [TransactionTypeEnum](#transactiontypeenum)
- [TransactionsAmountGroupObject](#transactionsamountgroupobject)
- [TransactionsImportObject](#transactionsimportobject)
- [TransactionsImportAssignmentObject](#transactionsimportassignmentobject)
- [TransactionsImportAssignmentInputInput Object](#transactionsimportassignmentinputinput-object)
- [TransactionsImportEditResponseObject](#transactionsimporteditresponseobject)
- [TransactionsImportReferenceInputInput Object](#transactionsimportreferenceinputinput-object)
- [TransactionsImportRowObject](#transactionsimportrowobject)
- [TransactionsImportRowActionEnum](#transactionsimportrowactionenum)
- [TransactionsImportRowCollectionObject](#transactionsimportrowcollectionobject)
- [TransactionsImportRowCreateInputInput Object](#transactionsimportrowcreateinputinput-object)
- [TransactionsImportRowReferenceInputInput Object](#transactionsimportrowreferenceinputinput-object)
- [TransactionsImportRowStatusEnum](#transactionsimportrowstatusenum)
- [TransactionsImportRowUpdateInputInput Object](#transactionsimportrowupdateinputinput-object)
- [TransactionsImportStatsObject](#transactionsimportstatsobject)
- [TransactionsImportTypeEnum](#transactionsimporttypeenum)
- [TransactionsImportsCollectionObject](#transactionsimportscollectionobject)
- [TransferWiseObject](#transferwiseobject)
- [TransferWiseFieldObject](#transferwisefieldobject)
- [TransferWiseFieldGroupObject](#transferwisefieldgroupobject)
- [TransferWiseFieldVatvkluesAllowedObject](#transferwisefieldvatvkluesallowedobject)
- [TransferWiseRequiredFieldObject](#transferwiserequiredfieldobject)
- [TwoFactorMethodEnum](#twofactormethodenum)
- [URLScalar](#urlscalar)
- [UnfollowAccountResultObject](#unfollowaccountresultobject)
- [UpdateObject](#updateobject)
- [UpdateAudienceEnum](#updateaudienceenum)
- [UpdateAudienceStatsObject](#updateaudiencestatsobject)
- [UpdateChronologicalOrderInputInput Object](#updatechronologicalorderinputinput-object)
- [UpdateCollectionObject](#updatecollectionobject)
- [UpdateCreateInputInput Object](#updatecreateinputinput-object)
- [UpdateDateTimeFieldEnum](#updatedatetimefieldenum)
- [UpdateReferenceInputInput Object](#updatereferenceinputinput-object)
- [UpdateUpdateInputInput Object](#updateupdateinputinput-object)
- [UploadScalar](#uploadscalar)
- [UploadFileInputInput Object](#uploadfileinputinput-object)
- [UploadFileResultObject](#uploadfileresultobject)
- [UploadedFileKindEnum](#uploadedfilekindenum)
- [UserTwoFactorMethodObject](#usertwofactormethodobject)
- [UserTwoFactorMethodReferenceInputInput Object](#usertwofactormethodreferenceinputinput-object)
- [VendorObject](#vendorobject)
- [VendorCollectionObject](#vendorcollectionobject)
- [VendorContactObject](#vendorcontactobject)
- [VendorContactInputInput Object](#vendorcontactinputinput-object)
- [VendorCreateInputInput Object](#vendorcreateinputinput-object)
- [VendorEditInputInput Object](#vendoreditinputinput-object)
- [VendorInfoObject](#vendorinfoobject)
- [VendorInfoInputInput Object](#vendorinfoinputinput-object)
- [VirtualCardObject](#virtualcardobject)
- [VirtualCardCollectionObject](#virtualcardcollectionobject)
- [VirtualCardInputInput Object](#virtualcardinputinput-object)
- [VirtualCardLimitIntervalEnum](#virtualcardlimitintervalenum)
- [VirtualCardProviderEnum](#virtualcardproviderenum)
- [VirtualCardReferenceInputInput Object](#virtualcardreferenceinputinput-object)
- [VirtualCardRequestObject](#virtualcardrequestobject)
- [VirtualCardRequestCollectionObject](#virtualcardrequestcollectionobject)
- [VirtualCardRequestReferenceInputInput Object](#virtualcardrequestreferenceinputinput-object)
- [VirtualCardRequestStatusEnum](#virtualcardrequeststatusenum)
- [VirtualCardStatusEnum](#virtualcardstatusenum)
- [WebhookObject](#webhookobject)
- [WebhookCollectionObject](#webhookcollectionobject)
- [WebhookCreateInputInput Object](#webhookcreateinputinput-object)
- [WebhookReferenceInputInput Object](#webhookreferenceinputinput-object)
- [WebhookUpdateInputInput Object](#webhookupdateinputinput-object)
- [WiseTransferDetailsInput Object](#wisetransferdetailsinput-object)

---


# Open Collective Public GraphQL

Source: https://graphql-docs-v2.opencollective.com/welcome

# Open Collective Public GraphQL

 Welcome to [Open Collective](https://opencollective.com) 's public GraphQL API documentation. 

This documentation will help you get started using our public GraphQL API (v2). 

 

---

  **Next**  [Access](/access)

---


# How to access the API

Source: https://graphql-docs-v2.opencollective.com/access

# How to access the API

 ## First Contact

 ## [#](#first-contact)

 For your first contact with our API, we recommend to use a GraphQL explorer, such as [Altair GraphQL Client](https://altairgraphql.dev/) . It’s available as a desktop application and we really like it like that. 

## Endpoint

 ## [#](#endpoint)

 The GraphQL API's endpoint is the following: <https://api.opencollective.com/graphql/v2> 

## Authentication

 ## [#](#authentication)

 The API is public and you can freely use it up to 10 requests / minute without authentication. 

By authenticating, you get up to 100 requests / minute, access to sensitive data and can perform actions. 

## With a Personal Token

 ## [#](#with-a-personal-token)

 The Personal Token gives you access to the API and is automatically authenticating you as an individual. To create one, go to your personal settings and navigate to the `For developers`  section. 

There are multiple ways to pass the Personal Token: 

* In the URL: `https://api.opencollective.com/graphql/v2?personalToken=<PERSONAL_TOKEN>`
* As an HTTP header: `Personal-Token: <PERSONAL_TOKEN>`

## With OAuth

 ## [#](#with-oauth)

 OAuth lets you create applications that can access Open Collective's API to read information and trigger changes on the platform. 

Documentation is here for now: <https://docs.opencollective.com/help/developers/oauth> 

 

---

 **Previous**   [Welcome](/welcome) **Next
 - First Queries** [Account Information](/first-queries/account-information)

---


# Account Information

Source: https://graphql-docs-v2.opencollective.com/first-queries/account-information

# Account Information

 ## Logged in account

 ## [#](#logged-in-account)

 You can easily query the information of the currently logged in account by using the following query: 

```
    
  
```
 
## Any account

 ## [#](#any-account)

 Want to query the information for any account? 

 Show menu options * [Query](#)
* [Variables](#)
 

```
    
  
```
  

```
    
  
```
   

---

 **Previous**   [Access](/access) **Next**  [Backers](/first-queries/backers)

---


# Backers

Source: https://graphql-docs-v2.opencollective.com/first-queries/backers

# Backers

 You may want to see all the collectives that a user is supporting using the following: 

 Show menu options * [Query](#)
* [Variables](#)
 

```
    
  
```
  

```
    
  
```
  
On the opposite, if you want to see all the members of a given Collective: 

 Show menu options * [Query](#)
* [Variables](#)
 

```
    
  
```
  

```
    
  
```
   

---

 **Previous**   [Account Information](/first-queries/account-information) **Next**  [Contributions](/first-queries/contributions)

---


# Contributions

Source: https://graphql-docs-v2.opencollective.com/first-queries/contributions

# Contributions

 You may browse the latest contributions received by a Collective. 

 Show menu options * [Query](#)
* [Variables](#)
 

```
    
  
```
  

```
    
  
```
   

---

 **Previous**   [Backers](/first-queries/backers) **Next**  [Expenses](/first-queries/expenses)

---


# Expenses

Source: https://graphql-docs-v2.opencollective.com/first-queries/expenses

# Expenses

 You can query the latest expenses performed by a given collective with the following: 

 Show menu options * [Query](#)
* [Variables](#)
 

```
    
  
```
  

```
    
  
```
   

---

 **Previous**   [Contributions](/first-queries/contributions) **Next
 - Queries** [account](/queries/account)

---


# accountQuery

Source: https://graphql-docs-v2.opencollective.com/queries/account

# account  Query

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String)  

 The public id identifying the Account (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    slug   [String](/../types/String)  

 The slug identifying the Account (ie: babel for <https://opencollective.com/babel>) 

 

    githubHandle   [String](/../types/String)  

 The githubHandle attached to the Account (ie: babel for <https://opencollective.com/babel>) 

 

    throwIfMissing = true   [Boolean](/../types/Boolean)  

 If false, will return null instead of an error if the Account is not found 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) .

 ## Example

 ## [#](#example)

   

---

 **Previous

 - First Queries**  [Expenses](/first-queries/expenses) **Next**  [accounts](/queries/accounts)

---


# accountsQuery

Source: https://graphql-docs-v2.opencollective.com/queries/accounts

# accounts  Query

  ## Arguments

 ## [#](#arguments)

     limit = 10   [Int](/../types/Int) !  Non-null 

 The number of results to fetch (default 10, max 1000) 

 

    offset   [Int](/../types/Int) !  Non-null 

 The offset to use to fetch 

 

    searchTerm   [String](/../types/String)  

 Search accounts related to this term based on name, description, tags, slug, and location 

 

    tag  [ [String](/../types/String) ] 

 Only accounts that match these tags 

 

    tagSearchOperator = "AND"   [TagSearchOperator](/../types/TagSearchOperator) !  Non-null 

 Operator to use when searching with tags. Defaults to 'AND' 

 

    includeArchived   [Boolean](/../types/Boolean)  

 Included collectives which are archived 

 

    skipGuests = true   [Boolean](/../types/Boolean)  

 Ignore individual accounts used to make contributions as guests 

 

    isActive   [Boolean](/../types/Boolean)  

 Only return "active" accounts with Financial Contributions enabled if true. 

 

    skipRecentAccounts   [Boolean](/../types/Boolean)  

 Whether to skip recent suspicious accounts (48h) 

 

    country  [ [CountryISO](/../types/CountryISO) ] 

 Limit the search to collectives belonging to these countries 

 

    host  [ [AccountReferenceInput](/../types/AccountReferenceInput) ] 

 Host hosting the account 

 

    parent  [ [AccountReferenceInput](/../types/AccountReferenceInput) ] 

 Parent Collective hosting the account 

 

    type  [ [AccountType](/../types/AccountType) ] 

 Only return accounts that match these account types (COLLECTIVE, FUND, EVENT, PROJECT, ORGANIZATION or INDIVIDUAL) 

 

    isHost   [Boolean](/../types/Boolean)  

 Only return Fiscal Hosts accounts if true 

 

    hasCustomContributionsEnabled   [Boolean](/../types/Boolean)  

 Only accounts with custom contribution (/donate) enabled 

 

    orderBy   [OrderByInput](/../types/OrderByInput)  

 The order of results. Defaults to [RANK, DESC] (or [CREATED\_AT, DESC] if `supportedPaymentMethodService`  is provided) 

 

    includeVendorsForHost   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Include vendors for this host 

 

    consolidatedBalance   [AmountRangeInput](/../types/AmountRangeInput)  

 Filter by the balance of the account and its children accounts (events and projects) 

 

   ## Response

 ## [#](#response)

  Returns [AccountCollection](/../types/AccountCollection) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [account](/queries/account) **Next**  [activities](/queries/activities)

---


# activitiesQuery

Source: https://graphql-docs-v2.opencollective.com/queries/activities

# activities  Query

  ## Arguments

 ## [#](#arguments)

     limit = 100   [Int](/../types/Int) !  Non-null 

 The number of results to fetch (default 10, max 1000) 

 

    offset   [Int](/../types/Int) !  Non-null 

 The offset to use to fetch 

 

    account  [ [AccountReferenceInput](/../types/AccountReferenceInput) !]!  Non-null 

 The accounts associated with the Activity 

 

    includeChildrenAccounts   [Boolean](/../types/Boolean) !  Non-null 

 If account is a parent, also include child accounts 

 

    excludeParentAccount   [Boolean](/../types/Boolean) !  Non-null 

 If account is a parent, use this option to exclude it from the results. Use in combination with includeChildrenAccounts. 

 

    includeHostedAccounts   [Boolean](/../types/Boolean) !  Non-null 

 If account is a host, also include hosted accounts 

 

    dateFrom   [DateTime](/../types/DateTime)  

 Only return activities that were created after this date 

 

    dateTo   [DateTime](/../types/DateTime)  

 Only return activities that were created before this date 

 

    type  [ [ActivityAndClassesType](/../types/ActivityAndClassesType) !] 

 Only return activities that are of this class/type 

 

    timeline   [Boolean](/../types/Boolean) !  Non-null 

 If true, return the timeline of activities for this account 

 

   ## Response

 ## [#](#response)

  Returns [ActivityCollection](/../types/ActivityCollection) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [accounts](/queries/accounts) **Next**  [application](/queries/application)

---


# applicationQuery

Source: https://graphql-docs-v2.opencollective.com/queries/application

# application  Query

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String)  

 The public id identifying the application (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The legacy public id identifying the application (ie: 4242) 

 

    clientId   [String](/../types/String)  

 The clientId for the application. 

 

   ## Response

 ## [#](#response)

  Returns [Application](/../types/Application) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [activities](/queries/activities) **Next**  [collective](/queries/collective)

---


# collectiveQuery

Source: https://graphql-docs-v2.opencollective.com/queries/collective

# collective  Query

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String)  

 The public id identifying the Collective (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    slug   [String](/../types/String)  

 The slug identifying the Collective (ie: babel for <https://opencollective.com/babel>) 

 

    githubHandle   [String](/../types/String)  

 The githubHandle attached to the Collective (ie: babel for <https://opencollective.com/babel>) 

 

    throwIfMissing = true   [Boolean](/../types/Boolean)  

 If false, will return null instead of an error if the Collective is not found 

 

   ## Response

 ## [#](#response)

  Returns [Collective](/../types/Collective) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [application](/queries/application) **Next**  [conversation](/queries/conversation)

---


# conversationQuery

Source: https://graphql-docs-v2.opencollective.com/queries/conversation

# conversation  Query

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String) !  Non-null 

 The id identifying the conversation 

 

   ## Response

 ## [#](#response)

  Returns [Conversation](/../types/Conversation) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [collective](/queries/collective) **Next**  [currencyExchangeRate](/queries/currencyExchangeRate)

---


# currencyExchangeRateQuery

Source: https://graphql-docs-v2.opencollective.com/queries/currencyExchangeRate

# currencyExchangeRate  Query

  Get exchange rates from Open Collective 

 ## Arguments

 ## [#](#arguments)

     requests  [ [CurrencyExchangeRateRequest](/../types/CurrencyExchangeRateRequest) !]!  Non-null 

 Requests for currency exchange rates 

 

   ## Response

 ## [#](#response)

  Returns [ [CurrencyExchangeRate](/../types/CurrencyExchangeRate) !]!.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [conversation](/queries/conversation) **Next**  [event](/queries/event)

---


# eventQuery

Source: https://graphql-docs-v2.opencollective.com/queries/event

# event  Query

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String)  

 The public id identifying the Event (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    slug   [String](/../types/String)  

 The slug identifying the Event (ie: babel for <https://opencollective.com/babel>) 

 

    githubHandle   [String](/../types/String)  

 The githubHandle attached to the Event (ie: babel for <https://opencollective.com/babel>) 

 

    throwIfMissing = true   [Boolean](/../types/Boolean)  

 If false, will return null instead of an error if the Event is not found 

 

   ## Response

 ## [#](#response)

  Returns [Event](/../types/Event) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [currencyExchangeRate](/queries/currencyExchangeRate) **Next**  [expense](/queries/expense)

---


# expenseQuery

Source: https://graphql-docs-v2.opencollective.com/queries/expense

# expense  Query

  ## Arguments

 ## [#](#arguments)

     expense   [ExpenseReferenceInput](/../types/ExpenseReferenceInput)  

 Identifiers to retrieve the expense. 

 

    draftKey   [String](/../types/String)  

 Submit-on-behalf key to access drafted Expenses 

 

   ## Response

 ## [#](#response)

  Returns [Expense](/../types/Expense) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [event](/queries/event) **Next**  [expenseTagStats](/queries/expenseTagStats)

---


# expenseTagStatsQuery

Source: https://graphql-docs-v2.opencollective.com/queries/expenseTagStats

# expenseTagStats  Query

  ## Arguments

 ## [#](#arguments)

     tagSearchTerm   [String](/../types/String)  

 Return tags which includes this search term. 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Return tags from expenses to accounts hosted by this account. Can not be used together with "account". 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Return tags from expenses to this account. Can not be used together with "host". 

 

    limit = 10   [Int](/../types/Int) !  Non-null 

    offset   [Int](/../types/Int) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [TagStatsCollection](/../types/TagStatsCollection) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [expense](/queries/expense) **Next**  [expenses](/queries/expenses)

---


# expensesQuery

Source: https://graphql-docs-v2.opencollective.com/queries/expenses

# expenses  Query

  ## Arguments

 ## [#](#arguments)

     limit = 10   [Int](/../types/Int) !  Non-null 

 The number of results to fetch (default 10, max 1000) 

 

    offset   [Int](/../types/Int) !  Non-null 

 The offset to use to fetch 

 

    fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Reference of an account that is the payee of an expense 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Reference of an account that is the payer of an expense 

 

    accounts  [ [AccountReferenceInput](/../types/AccountReferenceInput) ] 

 An alternative to filter by accounts, both cannot be used together 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Return expenses only for this host 

 

    createdByAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Return expenses only created by this INDIVIDUAL account 

 

    status  [ [ExpenseStatusFilter](/../types/ExpenseStatusFilter) ] 

 Use this field to filter expenses on their statuses 

 

    type   [ExpenseType](/../types/ExpenseType)  

 Use this field to filter expenses on their type (RECEIPT/INVOICE) 

 

    types  [ [ExpenseType](/../types/ExpenseType) ] 

    tag  [ [String](/../types/String) ] 

 Only expenses that match these tags 

 

    orderBy = {
 "field": "CREATED\_AT",
 "direction": "DESC"
}   [ChronologicalOrderInput](/../types/ChronologicalOrderInput) !  Non-null 

 The order of results 

 

    minAmount   [Int](/../types/Int)  

 Only return expenses where the amount is greater than or equal to this value (in cents) 

 

    maxAmount   [Int](/../types/Int)  

 Only return expenses where the amount is lower than or equal to this value (in cents) 

 

    payoutMethodType   [PayoutMethodType](/../types/PayoutMethodType)  

 Only return expenses that use the given type as payout method 

 

    dateFrom   [DateTime](/../types/DateTime)  

 Only return expenses that were created after this date 

 

    dateTo   [DateTime](/../types/DateTime)  

 Only return expenses that were created after this date 

 

    searchTerm   [String](/../types/String)  

 The term to search 

 

    includeChildrenExpenses   [Boolean](/../types/Boolean) !  Non-null 

 Whether to include expenses from children of the account (Events and Projects) 

 

    customData   [JSON](/../types/JSON)  

 Only return expenses that contains this custom data. Requires being an admin of the collective, payee or host. 

 

    chargeHasReceipts   [Boolean](/../types/Boolean)  

 Filter expenses of type charges based on presence of receipts 

 

    virtualCards  [ [VirtualCardReferenceInput](/../types/VirtualCardReferenceInput) ] 

 Filter expenses of type charges using these virtual cards 

 

    lastCommentBy  [ [LastCommentBy](/../types/LastCommentBy) ] 

 Filter expenses by the last user-role who replied to them 

 

    accountingCategory  [ [String](/../types/String) ] 

 Only return expenses that match these accounting categories 

 

    payoutMethod   [PayoutMethodReferenceInput](/../types/PayoutMethodReferenceInput)  

 Only return transactions that are associated with this payout method 

 

   ## Response

 ## [#](#response)

  Returns [ExpenseCollection](/../types/ExpenseCollection) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [expenseTagStats](/queries/expenseTagStats) **Next**  [fund](/queries/fund)

---


# fundQuery

Source: https://graphql-docs-v2.opencollective.com/queries/fund

# fund  Query

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String)  

 The public id identifying the Fund (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    slug   [String](/../types/String)  

 The slug identifying the Fund (ie: babel for <https://opencollective.com/babel>) 

 

    githubHandle   [String](/../types/String)  

 The githubHandle attached to the Fund (ie: babel for <https://opencollective.com/babel>) 

 

    throwIfMissing = true   [Boolean](/../types/Boolean)  

 If false, will return null instead of an error if the Fund is not found 

 

   ## Response

 ## [#](#response)

  Returns [Fund](/../types/Fund) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [expenses](/queries/expenses) **Next**  [host](/queries/host)

---


# hostQuery

Source: https://graphql-docs-v2.opencollective.com/queries/host

# host  Query

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String)  

 The public id identifying the Host (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    slug   [String](/../types/String)  

 The slug identifying the Host (ie: babel for <https://opencollective.com/babel>) 

 

    githubHandle   [String](/../types/String)  

 The githubHandle attached to the Host (ie: babel for <https://opencollective.com/babel>) 

 

    throwIfMissing = true   [Boolean](/../types/Boolean)  

 If false, will return null instead of an error if the Host is not found 

 

   ## Response

 ## [#](#response)

  Returns [Host](/../types/Host) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [fund](/queries/fund) **Next**  [hostApplication](/queries/hostApplication)

---


# hostApplicationQuery

Source: https://graphql-docs-v2.opencollective.com/queries/hostApplication

# hostApplication  Query

  ## Arguments

 ## [#](#arguments)

     hostApplication   [HostApplicationReferenceInput](/../types/HostApplicationReferenceInput)  

   ## Response

 ## [#](#response)

  Returns [HostApplication](/../types/HostApplication) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [host](/queries/host) **Next**  [hosts](/queries/hosts)

---


# hostsQuery

Source: https://graphql-docs-v2.opencollective.com/queries/hosts

# hosts  Query

  ## Arguments

 ## [#](#arguments)

     limit = 10   [Int](/../types/Int) !  Non-null 

 The number of results to fetch (default 10, max 1000) 

 

    offset   [Int](/../types/Int) !  Non-null 

 The offset to use to fetch 

 

    searchTerm   [String](/../types/String)  

 Search accounts related to this term based on name, description, tags, slug, and location 

 

    tag  [ [String](/../types/String) ] 

 Only accounts that match these tags 

 

    tagSearchOperator = "AND"   [TagSearchOperator](/../types/TagSearchOperator) !  Non-null 

 Operator to use when searching with tags. Defaults to 'AND' 

 

    includeArchived   [Boolean](/../types/Boolean)  

 Included collectives which are archived 

 

    skipGuests = true   [Boolean](/../types/Boolean)  

 Ignore individual accounts used to make contributions as guests 

 

    isActive   [Boolean](/../types/Boolean)  

 Only return "active" accounts with Financial Contributions enabled if true. 

 

    skipRecentAccounts   [Boolean](/../types/Boolean)  

 Whether to skip recent suspicious accounts (48h) 

 

    country  [ [CountryISO](/../types/CountryISO) ] 

 Limit the search to collectives belonging to these countries 

 

    currency   [String](/../types/String)  

   ## Response

 ## [#](#response)

  Returns [HostCollection](/../types/HostCollection) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [hostApplication](/queries/hostApplication) **Next**  [individual](/queries/individual)

---


# individualQuery

Source: https://graphql-docs-v2.opencollective.com/queries/individual

# individual  Query

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String)  

 The public id identifying the Individual (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    slug   [String](/../types/String)  

 The slug identifying the Individual (ie: babel for <https://opencollective.com/babel>) 

 

    githubHandle   [String](/../types/String)  

 The githubHandle attached to the Individual (ie: babel for <https://opencollective.com/babel>) 

 

    throwIfMissing = true   [Boolean](/../types/Boolean)  

 If false, will return null instead of an error if the Individual is not found 

 

   ## Response

 ## [#](#response)

  Returns [Individual](/../types/Individual) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [hosts](/queries/hosts) **Next**  [loggedInAccount](/queries/loggedInAccount)

---


# loggedInAccountQuery

Source: https://graphql-docs-v2.opencollective.com/queries/loggedInAccount

# loggedInAccount  Query

  ## Response

 ## [#](#response)

  Returns [Individual](/../types/Individual) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [individual](/queries/individual) **Next**  [me](/queries/me)

---


# meQuery

Source: https://graphql-docs-v2.opencollective.com/queries/me

# me  Query

  ## Response

 ## [#](#response)

  Returns [Individual](/../types/Individual) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [loggedInAccount](/queries/loggedInAccount) **Next**  [memberInvitations](/queries/memberInvitations)

---


# memberInvitationsQuery

Source: https://graphql-docs-v2.opencollective.com/queries/memberInvitations

# memberInvitations  Query

  [AUTHENTICATED] Returns the pending invitations 

 ## Arguments

 ## [#](#arguments)

     memberAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

 A reference to an account (usually Individual). Will return invitations sent to the account to join as a member 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput)  

 A reference to an account (usually Collective, Fund or Organization). Will return invitations sent to join this account as a member. 

 

    role  [ [MemberRole](/../types/MemberRole) ] 

 An array of Member roles to filter for 

 

   ## Response

 ## [#](#response)

  Returns [ [MemberInvitation](/../types/MemberInvitation) ].

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [me](/queries/me) **Next**  [order](/queries/order)

---


# orderQuery

Source: https://graphql-docs-v2.opencollective.com/queries/order

# order  Query

  ## Arguments

 ## [#](#arguments)

     order   [OrderReferenceInput](/../types/OrderReferenceInput) !  Non-null 

 Identifiers to retrieve the Order 

 

   ## Response

 ## [#](#response)

  Returns [Order](/../types/Order) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [memberInvitations](/queries/memberInvitations) **Next**  [orders](/queries/orders)

---


# ordersQuery

Source: https://graphql-docs-v2.opencollective.com/queries/orders

# orders  Query

  ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Return only orders made from/to account 

 

    limit = 100   [Int](/../types/Int) !  Non-null 

 The number of results to fetch (default 10, max 1000) 

 

    offset   [Int](/../types/Int) !  Non-null 

 The offset to use to fetch 

 

    includeHostedAccounts   [Boolean](/../types/Boolean)  

 If account is a host, also include hosted accounts orders 

 

    includeChildrenAccounts   [Boolean](/../types/Boolean) !  Non-null 

 Include orders from children events/projects 

 

    pausedBy  [ [OrderPausedBy](/../types/OrderPausedBy) ] 

 Only return orders that were paused by these roles. status must be set to PAUSED. 

 

    paymentMethod  [ [PaymentMethodReferenceInput](/../types/PaymentMethodReferenceInput) ] 

 Only return orders that were paid with this payment method. Must be an admin of the account owning the payment method. 

 

    paymentMethodService  [ [PaymentMethodService](/../types/PaymentMethodService) ] 

 Only return orders that match these payment method services 

 

    paymentMethodType  [ [PaymentMethodType](/../types/PaymentMethodType) ] 

 Only return orders that match these payment method types 

 

    includeIncognito   [Boolean](/../types/Boolean)  

 Whether to include incognito orders. Must be admin or root. Only with filter null or OUTGOING. 

 

    filter   [AccountOrdersFilter](/../types/AccountOrdersFilter)  

 Account orders filter (INCOMING or OUTGOING) 

 

    frequency  [ [ContributionFrequency](/../types/ContributionFrequency) ] 

 Use this field to filter orders on their frequency (ONETIME, MONTHLY or YEARLY) 

 

    status  [ [OrderStatus](/../types/OrderStatus) ] 

 Use this field to filter orders on their statuses 

 

    orderBy = {
 "field": "CREATED\_AT",
 "direction": "DESC"
}   [ChronologicalOrderInput](/../types/ChronologicalOrderInput) !  Non-null 

 The order of results 

 

    minAmount   [Int](/../types/Int)  

 Only return orders where the amount is greater than or equal to this value (in cents) 

 

    maxAmount   [Int](/../types/Int)  

 Only return orders where the amount is lower than or equal to this value (in cents) 

 

    dateFrom   [DateTime](/../types/DateTime)  

 Only return orders that were created after this date 

 

    dateTo   [DateTime](/../types/DateTime)  

 Only return orders that were created before this date 

 

    expectedDateFrom   [DateTime](/../types/DateTime)  

 Only return pending orders that were expected after this date 

 

    expectedDateTo   [DateTime](/../types/DateTime)  

 Only return pending orders that were expected before this date 

 

    chargedDateFrom   [DateTime](/../types/DateTime)  

 Return orders that were charged after this date 

 

    chargedDateTo   [DateTime](/../types/DateTime)  

 Return orders that were charged before this date 

 

    searchTerm   [String](/../types/String)  

 The term to search 

 

    tier  [ [TierReferenceInput](/../types/TierReferenceInput) ] 

    onlySubscriptions   [Boolean](/../types/Boolean)  

 Only returns orders that have a subscription (monthly/yearly). Don't use together with frequency. 

 

    onlyActiveSubscriptions   [Boolean](/../types/Boolean)  

 Same as onlySubscriptions, but returns only orders with active subscriptions 

 

    expectedFundsFilter   [ExpectedFundsFilter](/../types/ExpectedFundsFilter)  

    oppositeAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Return only orders made from/to that opposite account (only works when orders are already filtered with a main account) 

 

    hostedAccounts  [ [AccountReferenceInput](/../types/AccountReferenceInput) ] 

 Return only orders made from/to these hosted accounts 

 

   ## Response

 ## [#](#response)

  Returns [OrderCollection](/../types/OrderCollection) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [order](/queries/order) **Next**  [organization](/queries/organization)

---


# organizationQuery

Source: https://graphql-docs-v2.opencollective.com/queries/organization

# organization  Query

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String)  

 The public id identifying the Organization (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    slug   [String](/../types/String)  

 The slug identifying the Organization (ie: babel for <https://opencollective.com/babel>) 

 

    githubHandle   [String](/../types/String)  

 The githubHandle attached to the Organization (ie: babel for <https://opencollective.com/babel>) 

 

    throwIfMissing = true   [Boolean](/../types/Boolean)  

 If false, will return null instead of an error if the Organization is not found 

 

   ## Response

 ## [#](#response)

  Returns [Organization](/../types/Organization) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [orders](/queries/orders) **Next**  [paypalPlan](/queries/paypalPlan)

---


# paypalPlanQuery

Source: https://graphql-docs-v2.opencollective.com/queries/paypalPlan

# paypalPlan  Query

  ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The account that serves as a payment target 

 

    amount   [AmountInput](/../types/AmountInput) !  Non-null 

 The contribution amount for 1 quantity, without platform contribution and taxes 

 

    frequency   [ContributionFrequency](/../types/ContributionFrequency) !  Non-null 

    order   [OrderReferenceInput](/../types/OrderReferenceInput)  

 The order for which the plan is created, if any 

 

    tier   [TierReferenceInput](/../types/TierReferenceInput)  

 The tier you are contributing to 

 

   ## Response

 ## [#](#response)

  Returns [PaypalPlan](/../types/PaypalPlan) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [organization](/queries/organization) **Next**  [personalToken](/queries/personalToken)

---


# personalTokenQuery

Source: https://graphql-docs-v2.opencollective.com/queries/personalToken

# personalToken  Query

  Get a personal token by reference 

 ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String)  

 The public id identifying the personal-token (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The legacy public id identifying the personal-token (ie: 4242) 

 

   ## Response

 ## [#](#response)

  Returns [PersonalToken](/../types/PersonalToken) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [paypalPlan](/queries/paypalPlan) **Next**  [project](/queries/project)

---


# projectQuery

Source: https://graphql-docs-v2.opencollective.com/queries/project

# project  Query

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String)  

 The public id identifying the Project (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    slug   [String](/../types/String)  

 The slug identifying the Project (ie: babel for <https://opencollective.com/babel>) 

 

    githubHandle   [String](/../types/String)  

 The githubHandle attached to the Project (ie: babel for <https://opencollective.com/babel>) 

 

    throwIfMissing = true   [Boolean](/../types/Boolean)  

 If false, will return null instead of an error if the Project is not found 

 

   ## Response

 ## [#](#response)

  Returns [Project](/../types/Project) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [personalToken](/queries/personalToken) **Next**  [search](/queries/search)

---


# searchQuery

Source: https://graphql-docs-v2.opencollective.com/queries/search

# search  Query

  [!] Warning: this query is currently in beta and the API might change 

 ## Arguments

 ## [#](#arguments)

     searchTerm   [String](/../types/String) !  Non-null 

 The search term to search for 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Limit the scope of the search to this account and its children 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Limit the scope of the search to this host and its hosted accounts 

 

    timeout = 10000   [Int](/../types/Int) !  Non-null 

 The maximum amount of time in millisecond to wait for a single entity type query to complete (for SQL search) 

 

    defaultLimit = 10   [Int](/../types/Int) !  Non-null 

 The default limit for each entity type 

 

   ## Response

 ## [#](#response)

  Returns [SearchResponse](/../types/SearchResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [project](/queries/project) **Next**  [tagStats](/queries/tagStats)

---


# tagStatsQuery

Source: https://graphql-docs-v2.opencollective.com/queries/tagStats

# tagStats  Query

  ## Arguments

 ## [#](#arguments)

     searchTerm   [String](/../types/String)  

 Return tags from collectives which includes this search term. Using this argument will ignore tagSearchTerm. Skipping this argument will use a more efficient query. 

 

    tagSearchTerm   [String](/../types/String)  

 Return tags which includes this search term. Using this argument will ignore searchTerm. 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Return tags from collectives hosted by this host. 

 

    limit = 10   [Int](/../types/Int) !  Non-null 

    offset   [Int](/../types/Int) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [TagStatsCollection](/../types/TagStatsCollection) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [search](/queries/search) **Next**  [tier](/queries/tier)

---


# tierQuery

Source: https://graphql-docs-v2.opencollective.com/queries/tier

# tier  Query

  ## Arguments

 ## [#](#arguments)

     tier   [TierReferenceInput](/../types/TierReferenceInput) !  Non-null 

 Identifiers to retrieve the tier 

 

    throwIfMissing = true   [Boolean](/../types/Boolean) !  Non-null 

 If true, an error will be returned if the tier is missing 

 

   ## Response

 ## [#](#response)

  Returns [Tier](/../types/Tier) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [tagStats](/queries/tagStats) **Next**  [transaction](/queries/transaction)

---


# transactionQuery

Source: https://graphql-docs-v2.opencollective.com/queries/transaction

# transaction  Query

  Fetch a single transaction 

 ## Arguments

 ## [#](#arguments)

     transaction   [TransactionReferenceInput](/../types/TransactionReferenceInput)  

 Identifiers to retrieve the transaction. 

 

   ## Response

 ## [#](#response)

  Returns [Transaction](/../types/Transaction) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [tier](/queries/tier) **Next**  [transactionGroup](/queries/transactionGroup)

---


# transactionGroupQuery

Source: https://graphql-docs-v2.opencollective.com/queries/transactionGroup

# transactionGroup  Query

  [!] Warning: this query is currently in beta and the API might change 

 ## Arguments

 ## [#](#arguments)

     groupId   [String](/../types/String) !  Non-null 

 The public id identifying the transaction group (ie: rvelja97-pkzqbgq7-bbzyx6wd-50o8n4rm) 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account associated to the transaction group 

 

   ## Response

 ## [#](#response)

  Returns [TransactionGroup](/../types/TransactionGroup) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [transaction](/queries/transaction) **Next**  [transactionGroups](/queries/transactionGroups)

---


# transactionGroupsQuery

Source: https://graphql-docs-v2.opencollective.com/queries/transactionGroups

# transactionGroups  Query

  [!] Warning: this query is currently in beta and the API might change 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference of the account(s) assigned to the main side of the transaction group (CREDIT -> recipient, DEBIT -> sender) 

 

    limit = 100   [Int](/../types/Int) !  Non-null 

 The number of results to fetch (default 10, max 1000) 

 

    offset   [Int](/../types/Int) !  Non-null 

 The offset to use to fetch 

 

    type   [TransactionType](/../types/TransactionType)  

 Filter transaction groups by the type of the primary transaction 

 

    kind   [TransactionKind](/../types/TransactionKind)  

 Filter transaction groups by the kind of the primary transaction 

 

    dateFrom   [DateTime](/../types/DateTime)  

 Only return transaction groups that were created after this date 

 

    dateTo   [DateTime](/../types/DateTime)  

 Only return transaction groups that were created before this date 

 

   ## Response

 ## [#](#response)

  Returns [TransactionGroupCollection](/../types/TransactionGroupCollection) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [transactionGroup](/queries/transactionGroup) **Next**  [transactions](/queries/transactions)

---


# transactionsQuery

Source: https://graphql-docs-v2.opencollective.com/queries/transactions

# transactions  Query

  ## Arguments

 ## [#](#arguments)

     account  [ [AccountReferenceInput](/../types/AccountReferenceInput) !] 

 Reference of the account(s) assigned to the main side of the transaction (CREDIT -> recipient, DEBIT -> sender) 

 

    limit = 100   [Int](/../types/Int) !  Non-null 

 The number of results to fetch (default 10, max 1000) 

 

    offset   [Int](/../types/Int) !  Non-null 

 The offset to use to fetch 

 

    type   [TransactionType](/../types/TransactionType)  

 The transaction type (DEBIT or CREDIT) 

 

    paymentMethodType  [ [PaymentMethodType](/../types/PaymentMethodType) ] 

 The payment method types. Can include `null`  for transactions without a payment method 

 

    paymentMethodService  [ [PaymentMethodService](/../types/PaymentMethodService) ] 

 The payment method services. 

 

    excludeAccount  [ [AccountReferenceInput](/../types/AccountReferenceInput) ] 

 Reference of the account(s) assigned to the main side of the transaction you want to EXCLUDE from the results 

 

    fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Reference of the account assigned to the other side of the transaction (CREDIT -> sender, DEBIT -> recipient). Avoid, favor account instead. 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Reference of the host accounting the transaction 

 

    orderBy = {
 "field": "CREATED\_AT",
 "direction": "DESC"
}   [ChronologicalOrderInput](/../types/ChronologicalOrderInput) !  Non-null 

 The order of results 

 

    dateFrom   [DateTime](/../types/DateTime)  

 Only return transactions that were created after this date 

 

    dateTo   [DateTime](/../types/DateTime)  

 Only return transactions that were created before this date 

 

    clearedFrom   [DateTime](/../types/DateTime)  

 Only return transactions that were cleared after this date 

 

    clearedTo   [DateTime](/../types/DateTime)  

 Only return transactions that were cleared before this date 

 

    searchTerm   [String](/../types/String)  

 The term to search 

 

    hasDebt   [Boolean](/../types/Boolean)  

 If true, return transactions with debt attached, if false transactions without debt attached. 

 

    hasExpense   [Boolean](/../types/Boolean)  

 Only return transactions with an Expense attached 

 

    expense   [ExpenseReferenceInput](/../types/ExpenseReferenceInput)  

 Only return transactions with this Expense attached 

 

    expenseType  [ [ExpenseType](/../types/ExpenseType) ] 

 Only return transactions that have an Expense of one of these expense types attached 

 

    hasOrder   [Boolean](/../types/Boolean)  

 Only return transactions with an Order attached 

 

    order   [OrderReferenceInput](/../types/OrderReferenceInput)  

 Only return transactions for this order. 

 

    includeHost = true   [Boolean](/../types/Boolean) !  Non-null 

 Used when filtering with the `host`  argument to determine whether to include transactions on the fiscal host account (and children) 

 

    includeRegularTransactions = true   [Boolean](/../types/Boolean) !  Non-null 

 Whether to include regular transactions from the account (turn false if you only want Incognito or Gift Card transactions) 

 

    includeIncognitoTransactions   [Boolean](/../types/Boolean) !  Non-null 

 If the account is a user and this field is true, contributions from the incognito profile will be included too (admins only) 

 

    includeChildrenTransactions   [Boolean](/../types/Boolean) !  Non-null 

 Whether to include transactions from children (Events and Projects) 

 

    includeGiftCardTransactions   [Boolean](/../types/Boolean) !  Non-null 

 Whether to include transactions from Gift Cards issued by the account. 

 

    includeDebts   [Boolean](/../types/Boolean) !  Non-null 

 Whether to include debt transactions 

 

    kind  [ [TransactionKind](/../types/TransactionKind) ] 

 To filter by transaction kind 

 

    group  [ [String](/../types/String) ] 

 The transactions group to filter by 

 

    virtualCard  [ [VirtualCardReferenceInput](/../types/VirtualCardReferenceInput) ] 

    isRefund   [Boolean](/../types/Boolean)  

 Only return transactions that are refunds (or not refunds if false) 

 

    merchantId  [ [String](/../types/String) ] 

 Only return transactions that are associated with these external merchant IDs 

 

    accountingCategory  [ [String](/../types/String) ] 

 Only return transactions that are associated with these accounting categories 

 

    paymentMethod  [ [PaymentMethodReferenceInput](/../types/PaymentMethodReferenceInput) ] 

 Only return transactions that are associated with this payment method 

 

    payoutMethod   [PayoutMethodReferenceInput](/../types/PayoutMethodReferenceInput)  

 Only return transactions that are associated with this payout method 

 

   ## Response

 ## [#](#response)

  Returns [TransactionCollection](/../types/TransactionCollection) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [transactionGroups](/queries/transactionGroups) **Next**  [transactionsImport](/queries/transactionsImport)

---


# transactionsImportQuery

Source: https://graphql-docs-v2.opencollective.com/queries/transactionsImport

# transactionsImport  Query

  Fetch a transactions import 

 ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String) !  Non-null 

 The public id identifying the import (ie: rvelja97-pkzqbgq7-bbzyx6wd-50o8n4rm) 

 

   ## Response

 ## [#](#response)

  Returns [TransactionsImport](/../types/TransactionsImport) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [transactions](/queries/transactions) **Next**  [update](/queries/update)

---


# updateQuery

Source: https://graphql-docs-v2.opencollective.com/queries/update

# update  Query

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String)  

 Public identifier 

 

    slug   [String](/../types/String)  

 The update slug identifying the update 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput)  

 When fetching by slug, an account must be provided 

 

   ## Response

 ## [#](#response)

  Returns [Update](/../types/Update) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [transactionsImport](/queries/transactionsImport) **Next**  [updates](/queries/updates)

---


# updatesQuery

Source: https://graphql-docs-v2.opencollective.com/queries/updates

# updates  Query

  This query currently returns only published updates 

 ## Arguments

 ## [#](#arguments)

     limit = 10   [Int](/../types/Int) !  Non-null 

 The number of results to fetch (default 10, max 1000) 

 

    offset   [Int](/../types/Int) !  Non-null 

 The offset to use to fetch 

 

    accountTag  [ [String](/../types/String) ] 

 Only return updates from accounts that have one of these tags 

 

    accountType  [ [AccountType](/../types/AccountType) ] 

 Only return updates from accounts that match these types (COLLECTIVE, FUND, EVENT, PROJECT, ORGANIZATION or INDIVIDUAL) 

 

    host  [ [AccountReferenceInput](/../types/AccountReferenceInput) ] 

 Host for the accounts for which to get updates 

 

    onlyChangelogUpdates   [Boolean](/../types/Boolean)  

    orderBy = {
 "field": "CREATED\_AT",
 "direction": "DESC"
}   [UpdateChronologicalOrderInput](/../types/UpdateChronologicalOrderInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [UpdateCollection](/../types/UpdateCollection) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [update](/queries/update) **Next**  [virtualCard](/queries/virtualCard)

---


# virtualCardQuery

Source: https://graphql-docs-v2.opencollective.com/queries/virtualCard

# virtualCard  Query

  ## Arguments

 ## [#](#arguments)

     virtualCard   [VirtualCardReferenceInput](/../types/VirtualCardReferenceInput) !  Non-null 

 Identifiers to retrieve the virtual card 

 

    throwIfMissing = true   [Boolean](/../types/Boolean) !  Non-null 

 If true, an error will be returned if the virtual card is missing 

 

   ## Response

 ## [#](#response)

  Returns [VirtualCard](/../types/VirtualCard) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [updates](/queries/updates) **Next**  [virtualCardRequest](/queries/virtualCardRequest)

---


# virtualCardRequestQuery

Source: https://graphql-docs-v2.opencollective.com/queries/virtualCardRequest

# virtualCardRequest  Query

  ## Arguments

 ## [#](#arguments)

     virtualCardRequest   [VirtualCardRequestReferenceInput](/../types/VirtualCardRequestReferenceInput) !  Non-null 

 Identifiers to retrieve the virtual card request 

 

    throwIfMissing = true   [Boolean](/../types/Boolean) !  Non-null 

 If true, an error will be returned if the virtual card request is missing 

 

   ## Response

 ## [#](#response)

  Returns [VirtualCardRequest](/../types/VirtualCardRequest) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [virtualCard](/queries/virtualCard) **Next**  [virtualCardRequests](/queries/virtualCardRequests)

---


# virtualCardRequestsQuery

Source: https://graphql-docs-v2.opencollective.com/queries/virtualCardRequests

# virtualCardRequests  Query

  ## Arguments

 ## [#](#arguments)

     limit = 10   [Int](/../types/Int) !  Non-null 

 The number of results to fetch (default 10, max 1000) 

 

    offset   [Int](/../types/Int) !  Non-null 

 The offset to use to fetch 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Host for the accounts for which to get virtual card requests 

 

    status  [ [VirtualCardRequestStatus](/../types/VirtualCardRequestStatus) ] 

    collective  [ [AccountReferenceInput](/../types/AccountReferenceInput) ] 

   ## Response

 ## [#](#response)

  Returns [VirtualCardRequestCollection](/../types/VirtualCardRequestCollection) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [virtualCardRequest](/queries/virtualCardRequest) **Next
 - Mutations** [addAgreement](/mutations/addAgreement)

---


# addAgreementMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/addAgreement

# addAgreement  Mutation

  Add an agreement for the given host account. Scope: "host". 

 ## Arguments

 ## [#](#arguments)

     title   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 Agreement title. 

 

    expiresAt   [DateTime](/../types/DateTime)  

 Optional date in which this agreement expires. 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Host where the agreement will be created. 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account that is a party in this agreement 

 

    attachment   [Upload](/../types/Upload)  

 Agreement attachment 

 

    notes   [String](/../types/String)  

 Additional notes about the agreement for the host admins 

 

   ## Response

 ## [#](#response)

  Returns [Agreement](/../types/Agreement) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous

 - Queries**  [virtualCardRequests](/queries/virtualCardRequests) **Next**  [addCreditCard](/mutations/addCreditCard)

---


# addCreditCardMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/addCreditCard

# addCreditCard  Mutation

  Add a new payment method to be used with an Order. Scope: "orders". 

 ## Arguments

 ## [#](#arguments)

     creditCardInfo   [CreditCardCreateInput](/../types/CreditCardCreateInput) !  Non-null 

 The credit card info 

 

    name   [String](/../types/String) !  Non-null 

 Name associated to this credit card 

 

    isSavedForLater = true   [Boolean](/../types/Boolean)  

 Whether this credit card should be saved for future payments 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account to add the credit card to 

 

   ## Response

 ## [#](#response)

  Returns [CreditCardWithStripeError](/../types/CreditCardWithStripeError) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [addAgreement](/mutations/addAgreement) **Next**  [addEmojiReaction](/mutations/addEmojiReaction)

---


# addEmojiReactionMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/addEmojiReaction

# addEmojiReaction  Mutation

  Add an emoji reaction. Scope: "conversations", "expenses" or "updates". 

 ## Arguments

 ## [#](#arguments)

     emoji   [String](/../types/String) !  Non-null 

 The emoji associated with the reaction 

 

    comment   [CommentReferenceInput](/../types/CommentReferenceInput)  

 A unique identifier for the comment id associated with this reaction 

 

    update   [UpdateReferenceInput](/../types/UpdateReferenceInput)  

 A unique identifier for the update id associated with this reaction 

 

   ## Response

 ## [#](#response)

  Returns [EmojiReactionResponse](/../types/EmojiReactionResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [addCreditCard](/mutations/addCreditCard) **Next**  [addFunds](/mutations/addFunds)

---


# addFundsMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/addFunds

# addFunds  Mutation

  Add funds to the given account. Scope: "host". 

 ## Arguments

 ## [#](#arguments)

     fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The account that will be used as the source of the funds 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The account that will receive the funds 

 

    tier   [TierReferenceInput](/../types/TierReferenceInput)  

 The tier to which the funds will be added 

 

    amount   [AmountInput](/../types/AmountInput) !  Non-null 

 The total amount of the order, including fees and taxes 

 

    paymentProcessorFee   [AmountInput](/../types/AmountInput)  

 The payment processor fee amount 

 

    hostFeePercent   [Float](/../types/Float)  

 The host fee percent to apply to the order, as a float between 0 and 100 

 

    description   [String](/../types/String) !  Non-null 

 A short description of the contribution 

 

    memo   [String](/../types/String)  

 A private note for the host 

 

    processedAt   [DateTime](/../types/DateTime)  

 The date at which the order was processed 

 

    invoiceTemplate   [String](/../types/String)  

 The invoice template to use for this order 

 

    tax   [TaxInput](/../types/TaxInput)  

 The tax to apply to the order 

 

    accountingCategory   [AccountingCategoryReferenceInput](/../types/AccountingCategoryReferenceInput)  

 The accounting category of this order 

 

    transactionsImportRow   [TransactionsImportRowReferenceInput](/../types/TransactionsImportRowReferenceInput)  

 The transaction import row to associate with this order 

 

   ## Response

 ## [#](#response)

  Returns [Order](/../types/Order) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [addEmojiReaction](/mutations/addEmojiReaction) **Next**  [addStripePaymentMethodFromSetupIntent](/mutations/addStripePaymentMethodFromSetupIntent)

---


# addStripePaymentMethodFromSetupIntentMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/addStripePaymentMethodFromSetupIntent

# addStripePaymentMethodFromSetupIntent  Mutation

  Adds a Stripe payment method 

 ## Arguments

 ## [#](#arguments)

     setupIntent   [SetupIntentInput](/../types/SetupIntentInput) !  Non-null 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [PaymentMethod](/../types/PaymentMethod) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [addFunds](/mutations/addFunds) **Next**  [addTwoFactorAuthTokenToIndividual](/mutations/addTwoFactorAuthTokenToIndividual)

---


# addTwoFactorAuthTokenToIndividualMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/addTwoFactorAuthTokenToIndividual

# addTwoFactorAuthTokenToIndividual  Mutation

  Add 2FA to the Individual if it does not have it. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Individual that will have 2FA added to it 

 

    type   [TwoFactorMethod](/../types/TwoFactorMethod)  

 The two factor method to add, defaults to TOTP 

 

    token   [String](/../types/String) !  Non-null 

 The generated secret to save to the Individual 

 

   ## Response

 ## [#](#response)

  Returns [AddTwoFactorAuthTokenToIndividualResponse](/../types/AddTwoFactorAuthTokenToIndividualResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [addStripePaymentMethodFromSetupIntent](/mutations/addStripePaymentMethodFromSetupIntent) **Next**  [applyToHost](/mutations/applyToHost)

---


# applyToHostMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/applyToHost

# applyToHost  Mutation

  Apply to an host with a collective. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     collective   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account applying to the host. 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Host to apply to. 

 

    message   [String](/../types/String)  

 A message to attach for the host to review the application 

 

    applicationData   [JSON](/../types/JSON)  

 Further information about collective applying to host 

 

    inviteMembers  [ [InviteMemberInput](/../types/InviteMemberInput) ] 

 A list of members to invite when applying to the host 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [addTwoFactorAuthTokenToIndividual](/mutations/addTwoFactorAuthTokenToIndividual) **Next**  [assignNewVirtualCard](/mutations/assignNewVirtualCard)

---


# assignNewVirtualCardMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/assignNewVirtualCard

# assignNewVirtualCard  Mutation

  Assign Virtual Card information to existing hosted collective. Scope: "virtualCards". 

 ## Arguments

 ## [#](#arguments)

     virtualCard   [VirtualCardInput](/../types/VirtualCardInput) !  Non-null 

 Virtual Card data 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account where the virtual card will be associated 

 

    assignee   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Individual account responsible for the card 

 

   ## Response

 ## [#](#response)

  Returns [VirtualCard](/../types/VirtualCard) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [applyToHost](/mutations/applyToHost) **Next**  [banAccount](/mutations/banAccount)

---


# banAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/banAccount

# banAccount  Mutation

  [Root only] Ban accounts 

 ## Arguments

 ## [#](#arguments)

     account  [ [AccountReferenceInput](/../types/AccountReferenceInput) !]!  Non-null 

 Account(s) to ban 

 

    includeAssociatedAccounts   [Boolean](/../types/Boolean) !  Non-null 

 If true, the associated accounts will also be banned 

 

    dryRun   [Boolean](/../types/Boolean) !  Non-null 

 If true, the result will be simulated and summarized in the response message 

 

   ## Response

 ## [#](#response)

  Returns [BanAccountResponse](/../types/BanAccountResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [assignNewVirtualCard](/mutations/assignNewVirtualCard) **Next**  [cancelOrder](/mutations/cancelOrder)

---


# cancelOrderMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/cancelOrder

# cancelOrder  Mutation

  Cancel an order. Scope: "orders". 

 ## Arguments

 ## [#](#arguments)

     order   [OrderReferenceInput](/../types/OrderReferenceInput) !  Non-null 

 Object matching the OrderReferenceInput (id) 

 

    reason   [String](/../types/String)  

 Reason for cancelling subscription 

 

    reasonCode   [String](/../types/String)  

 Category for cancelling subscription 

 

   ## Response

 ## [#](#response)

  Returns [Order](/../types/Order) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [banAccount](/mutations/banAccount) **Next**  [clearCacheForAccount](/mutations/clearCacheForAccount)

---


# clearCacheForAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/clearCacheForAccount

# clearCacheForAccount  Mutation

  [Root only] Clears the cache for a given account 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account to clear the cache for 

 

    type = [
 "CLOUDFLARE",
 "GRAPHQL\_QUERIES",
 "CONTRIBUTORS"
]  [ [AccountCacheType](/../types/AccountCacheType) ]!  Non-null 

 Types of cache to clear 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [cancelOrder](/mutations/cancelOrder) **Next**  [confirmCreditCard](/mutations/confirmCreditCard)

---


# confirmCreditCardMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/confirmCreditCard

# confirmCreditCard  Mutation

  Confirm a credit card is ready for use after strong customer authentication. Scope: "orders". 

 ## Arguments

 ## [#](#arguments)

     paymentMethod   [PaymentMethodReferenceInput](/../types/PaymentMethodReferenceInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [CreditCardWithStripeError](/../types/CreditCardWithStripeError) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [clearCacheForAccount](/mutations/clearCacheForAccount) **Next**  [confirmEmail](/mutations/confirmEmail)

---


# confirmEmailMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/confirmEmail

# confirmEmail  Mutation

  Confirm email for Individual. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     token   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 The token to confirm the email. 

 

   ## Response

 ## [#](#response)

  Returns [IndividualConfirmEmailResponse](/../types/IndividualConfirmEmailResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [confirmCreditCard](/mutations/confirmCreditCard) **Next**  [confirmGuestAccount](/mutations/confirmGuestAccount)

---


# confirmGuestAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/confirmGuestAccount

# confirmGuestAccount  Mutation

  Mark an account as confirmed 

 ## Arguments

 ## [#](#arguments)

     email   [EmailAddress](/../types/EmailAddress) !  Non-null 

 The email to confirm 

 

    emailConfirmationToken   [String](/../types/String) !  Non-null 

 The key that you want to edit in settings 

 

   ## Response

 ## [#](#response)

  Returns [ConfirmGuestAccountResponse](/../types/ConfirmGuestAccountResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [confirmEmail](/mutations/confirmEmail) **Next**  [confirmOrder](/mutations/confirmOrder)

---


# confirmOrderMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/confirmOrder

# confirmOrder  Mutation

  Confirm an order (strong customer authentication). Scope: "orders". 

 ## Arguments

 ## [#](#arguments)

     order   [OrderReferenceInput](/../types/OrderReferenceInput) !  Non-null 

    guestToken   [String](/../types/String)  

 If the order was made as a guest, you can use this field to authenticate 

 

   ## Response

 ## [#](#response)

  Returns [OrderWithPayment](/../types/OrderWithPayment) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [confirmGuestAccount](/mutations/confirmGuestAccount) **Next**  [connectPlaidAccount](/mutations/connectPlaidAccount)

---


# connectPlaidAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/connectPlaidAccount

# connectPlaidAccount  Mutation

  Connect a Plaid account 

 ## Arguments

 ## [#](#arguments)

     publicToken   [String](/../types/String) !  Non-null 

 The public token returned by the Plaid Link flow 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The account to which the Plaid account should be connected 

 

    sourceName   [String](/../types/String)  

 The name of the bank 

 

    name   [String](/../types/String)  

 The name of the bank account 

 

   ## Response

 ## [#](#response)

  Returns [PlaidConnectAccountResponse](/../types/PlaidConnectAccountResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [confirmOrder](/mutations/confirmOrder) **Next**  [convertOrganizationToVendor](/mutations/convertOrganizationToVendor)

---


# convertOrganizationToVendorMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/convertOrganizationToVendor

# convertOrganizationToVendor  Mutation

  Convert an organization to a vendor 

 ## Arguments

 ## [#](#arguments)

     organization   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to the organization to convert 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to the host that will hold the vendor 

 

   ## Response

 ## [#](#response)

  Returns [Vendor](/../types/Vendor) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [connectPlaidAccount](/mutations/connectPlaidAccount) **Next**  [createApplication](/mutations/createApplication)

---


# createApplicationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createApplication

# createApplication  Mutation

  ## Arguments

 ## [#](#arguments)

     application   [ApplicationCreateInput](/../types/ApplicationCreateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Application](/../types/Application) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [convertOrganizationToVendor](/mutations/convertOrganizationToVendor) **Next**  [createCollective](/mutations/createCollective)

---


# createCollectiveMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createCollective

# createCollective  Mutation

  Create a Collective. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     collective   [CollectiveCreateInput](/../types/CollectiveCreateInput) !  Non-null 

 Information about the collective to create (name, slug, description, tags, ...) 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Reference to the host to apply on creation. 

 

    user   [IndividualCreateInput](/../types/IndividualCreateInput)  

 User information to create along with the collective 

 

    message   [String](/../types/String)  

 A message to attach for the host to review the application 

 

    applicationData   [JSON](/../types/JSON)  

 Further information about collective applying to host 

 

    testPayload   [JSON](/../types/JSON)  

 Additional data for the collective creation. This argument has no effect in production 

 

    skipDefaultAdmin   [Boolean](/../types/Boolean)  

 Create a Collective without a default admin (authenticated user or user) 

 

    inviteMembers  [ [InviteMemberInput](/../types/InviteMemberInput) ] 

 List of members to invite on Collective creation. 

 

    skipApprovalTestOnly   [Boolean](/../types/Boolean)  

 Marks the collective as approved directly. Only available in test/CI environments. 

 

   ## Response

 ## [#](#response)

  Returns [Collective](/../types/Collective) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createApplication](/mutations/createApplication) **Next**  [createComment](/mutations/createComment)

---


# createCommentMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createComment

# createComment  Mutation

  Create a comment. Scope: "conversations", "expenses" or "updates". 

 ## Arguments

 ## [#](#arguments)

     comment   [CommentCreateInput](/../types/CommentCreateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Comment](/../types/Comment) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createCollective](/mutations/createCollective) **Next**  [createConnectedAccount](/mutations/createConnectedAccount)

---


# createConnectedAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createConnectedAccount

# createConnectedAccount  Mutation

  Connect external account to Open Collective Account. Scope: "connectedAccounts". 

 ## Arguments

 ## [#](#arguments)

     connectedAccount   [ConnectedAccountCreateInput](/../types/ConnectedAccountCreateInput) !  Non-null 

 Connected Account data 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account where the external account will be connected 

 

   ## Response

 ## [#](#response)

  Returns [ConnectedAccount](/../types/ConnectedAccount) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createComment](/mutations/createComment) **Next**  [createConversation](/mutations/createConversation)

---


# createConversationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createConversation

# createConversation  Mutation

  Create a conversation. Scope: "conversations". 

 ## Arguments

 ## [#](#arguments)

     title   [String](/../types/String) !  Non-null 

 Conversation's title 

 

    html   [String](/../types/String) !  Non-null 

 The body of the conversation initial comment 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Account where the conversation will be created 

 

    tags  [ [String](/../types/String) ] 

 A list of tags for this conversation 

 

   ## Response

 ## [#](#response)

  Returns [Conversation](/../types/Conversation) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createConnectedAccount](/mutations/createConnectedAccount) **Next**  [createEvent](/mutations/createEvent)

---


# createEventMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createEvent

# createEvent  Mutation

  Create an Event. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     event   [EventCreateInput](/../types/EventCreateInput) !  Non-null 

 Information about the Event to create (name, slug, description, tags, settings) 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to the parent Account creating the Event. 

 

   ## Response

 ## [#](#response)

  Returns [Event](/../types/Event) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createConversation](/mutations/createConversation) **Next**  [createExpense](/mutations/createExpense)

---


# createExpenseMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createExpense

# createExpense  Mutation

  Submit an expense to a collective. Scope: "expenses". 

 ## Arguments

 ## [#](#arguments)

     expense   [ExpenseCreateInput](/../types/ExpenseCreateInput) !  Non-null 

 Expense data 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account where the expense will be created 

 

    recurring   [RecurringExpenseInput](/../types/RecurringExpenseInput)  

 Recurring Expense information 

 

    transactionsImportRow   [TransactionsImportRowReferenceInput](/../types/TransactionsImportRowReferenceInput)  

 If the expense was imported, this is the reference to the row 

 

    privateComment   [String](/../types/String)  

 A optional private comment to add to the created expense 

 

   ## Response

 ## [#](#response)

  Returns [Expense](/../types/Expense) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createEvent](/mutations/createEvent) **Next**  [createFund](/mutations/createFund)

---


# createFundMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createFund

# createFund  Mutation

  Create a Fund. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     fund   [FundCreateInput](/../types/FundCreateInput) !  Non-null 

 Information about the collective to create (name, slug, description, tags, ...) 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Reference to the host to apply on creation. 

 

   ## Response

 ## [#](#response)

  Returns [Fund](/../types/Fund) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createExpense](/mutations/createExpense) **Next**  [createMember](/mutations/createMember)

---


# createMemberMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createMember

# createMember  Mutation

  [Root only] Create a member entry directly. For non-root users, use `inviteMember`  

 ## Arguments

 ## [#](#arguments)

     memberAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to an account for the member 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 memberAccount will become a member of this account 

 

    role   [MemberRole](/../types/MemberRole) !  Non-null 

 Role of the member 

 

    description   [String](/../types/String)  

    since   [DateTime](/../types/DateTime)  

   ## Response

 ## [#](#response)

  Returns [Member](/../types/Member) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createFund](/mutations/createFund) **Next**  [createOrder](/mutations/createOrder)

---


# createOrderMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createOrder

# createOrder  Mutation

  To submit a new order. Scope: "orders". 

 ## Arguments

 ## [#](#arguments)

     order   [OrderCreateInput](/../types/OrderCreateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [OrderWithPayment](/../types/OrderWithPayment) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createMember](/mutations/createMember) **Next**  [createOrganization](/mutations/createOrganization)

---


# createOrganizationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createOrganization

# createOrganization  Mutation

  Create an Organization. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     organization   [OrganizationCreateInput](/../types/OrganizationCreateInput) !  Non-null 

 Information about the organization to create (name, slug, description, website, ...) 

 

    inviteMembers  [ [InviteMemberInput](/../types/InviteMemberInput) ] 

 List of members to invite on Organization creation. 

 

   ## Response

 ## [#](#response)

  Returns [Organization](/../types/Organization) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createOrder](/mutations/createOrder) **Next**  [createPaymentIntent](/mutations/createPaymentIntent)

---


# createPaymentIntentMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createPaymentIntent

# createPaymentIntent  Mutation

  Creates a Stripe payment intent 

 ## Arguments

 ## [#](#arguments)

     paymentIntent   [PaymentIntentInput](/../types/PaymentIntentInput) !  Non-null 

    guestInfo   [GuestInfoInput](/../types/GuestInfoInput)  

   ## Response

 ## [#](#response)

  Returns [PaymentIntent](/../types/PaymentIntent) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createOrganization](/mutations/createOrganization) **Next**  [createPayoutMethod](/mutations/createPayoutMethod)

---


# createPayoutMethodMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createPayoutMethod

# createPayoutMethod  Mutation

  Create a new Payout Method to get paid through the platform. Scope: "expenses". 

 ## Arguments

 ## [#](#arguments)

     payoutMethod   [PayoutMethodInput](/../types/PayoutMethodInput) !  Non-null 

 Payout Method data 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account where the payout method will be associated 

 

   ## Response

 ## [#](#response)

  Returns [PayoutMethod](/../types/PayoutMethod) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createPaymentIntent](/mutations/createPaymentIntent) **Next**  [createPendingOrder](/mutations/createPendingOrder)

---


# createPendingOrderMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createPendingOrder

# createPendingOrder  Mutation

  To submit a new order. Scope: "orders". 

 ## Arguments

 ## [#](#arguments)

     order   [PendingOrderCreateInput](/../types/PendingOrderCreateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Order](/../types/Order) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createPayoutMethod](/mutations/createPayoutMethod) **Next**  [createPersonalToken](/mutations/createPersonalToken)

---


# createPersonalTokenMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createPersonalToken

# createPersonalToken  Mutation

  ## Arguments

 ## [#](#arguments)

     personalToken   [PersonalTokenCreateInput](/../types/PersonalTokenCreateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [PersonalToken](/../types/PersonalToken) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createPendingOrder](/mutations/createPendingOrder) **Next**  [createProject](/mutations/createProject)

---


# createProjectMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createProject

# createProject  Mutation

  Create a Project. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     project   [ProjectCreateInput](/../types/ProjectCreateInput) !  Non-null 

 Information about the Project to create (name, slug, description, tags, settings) 

 

    parent   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Reference to the parent Account creating the Project. 

 

    disableContributions   [Boolean](/../types/Boolean) !  Non-null 

 Set to true to disable contributions to this project. Host admins will still be able to add funds. 

 

    disableExpenses   [Boolean](/../types/Boolean) !  Non-null 

 Set to true to disable expenses for this project. 

 

   ## Response

 ## [#](#response)

  Returns [Project](/../types/Project) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createPersonalToken](/mutations/createPersonalToken) **Next**  [createSetupIntent](/mutations/createSetupIntent)

---


# createSetupIntentMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createSetupIntent

# createSetupIntent  Mutation

  Creates a Stripe setup intent 

 ## Arguments

 ## [#](#arguments)

     host   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [SetupIntent](/../types/SetupIntent) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createProject](/mutations/createProject) **Next**  [createTier](/mutations/createTier)

---


# createTierMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createTier

# createTier  Mutation

  Create a tier. 

 ## Arguments

 ## [#](#arguments)

     tier   [TierCreateInput](/../types/TierCreateInput) !  Non-null 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account to create tier in 

 

   ## Response

 ## [#](#response)

  Returns [Tier](/../types/Tier) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createSetupIntent](/mutations/createSetupIntent) **Next**  [createTransactionsImport](/mutations/createTransactionsImport)

---


# createTransactionsImportMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createTransactionsImport

# createTransactionsImport  Mutation

  Create a new import. To manually add transactions to it, use `importTransactions` . 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account that will hold the import (usually the host) 

 

    source   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 Source of the import (e.g. "Bank of America", "Eventbrite", etc...) 

 

    name   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 Name of the import (e.g. "Contributions May 2021", "Tickets for Mautic Conference 2024") 

 

    type   [TransactionsImportType](/../types/TransactionsImportType) !  Non-null 

 Type of the import 

 

   ## Response

 ## [#](#response)

  Returns [TransactionsImport](/../types/TransactionsImport) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createTier](/mutations/createTier) **Next**  [createUpdate](/mutations/createUpdate)

---


# createUpdateMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createUpdate

# createUpdate  Mutation

  Create update. Scope: "updates". 

 ## Arguments

 ## [#](#arguments)

     update   [UpdateCreateInput](/../types/UpdateCreateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Update](/../types/Update) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createTransactionsImport](/mutations/createTransactionsImport) **Next**  [createVendor](/mutations/createVendor)

---


# createVendorMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createVendor

# createVendor  Mutation

  Create a new vendor for given host 

 ## Arguments

 ## [#](#arguments)

     host   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to the host that holds the vendor 

 

    vendor   [VendorCreateInput](/../types/VendorCreateInput) !  Non-null 

 The vendor to create 

 

   ## Response

 ## [#](#response)

  Returns [Vendor](/../types/Vendor) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createUpdate](/mutations/createUpdate) **Next**  [createVirtualCard](/mutations/createVirtualCard)

---


# createVirtualCardMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createVirtualCard

# createVirtualCard  Mutation

  Create new Stripe Virtual Card for existing hosted collective. Scope: "virtualCards". 

 ## Arguments

 ## [#](#arguments)

     name   [String](/../types/String) !  Non-null 

 Virtual card name 

 

    limitAmount   [AmountInput](/../types/AmountInput) !  Non-null 

 Virtual card limit amount 

 

    limitInterval   [VirtualCardLimitInterval](/../types/VirtualCardLimitInterval) !  Non-null 

 Virtual card limit interval 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account where the virtual card will be associated 

 

    assignee   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Individual account responsible for the virtual card 

 

    virtualCardRequest   [VirtualCardRequestReferenceInput](/../types/VirtualCardRequestReferenceInput)  

 Virtual card request to link to this virtual card 

 

   ## Response

 ## [#](#response)

  Returns [VirtualCard](/../types/VirtualCard) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createVendor](/mutations/createVendor) **Next**  [createWebAuthnRegistrationOptions](/mutations/createWebAuthnRegistrationOptions)

---


# createWebAuthnRegistrationOptionsMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createWebAuthnRegistrationOptions

# createWebAuthnRegistrationOptions  Mutation

  Create WebAuthn public key registration request options 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account that will create a WebAuthn registration 

 

   ## Response

 ## [#](#response)

  Returns [JSON](/../types/JSON) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createVirtualCard](/mutations/createVirtualCard) **Next**  [createWebhook](/mutations/createWebhook)

---


# createWebhookMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/createWebhook

# createWebhook  Mutation

  Create webhook. Scope: "webhooks". 

 ## Arguments

 ## [#](#arguments)

     webhook   [WebhookCreateInput](/../types/WebhookCreateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Webhook](/../types/Webhook) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createWebAuthnRegistrationOptions](/mutations/createWebAuthnRegistrationOptions) **Next**  [deleteAccount](/mutations/deleteAccount)

---


# deleteAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteAccount

# deleteAccount  Mutation

  Adds or removes a policy on a given account. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to the Account to be deleted. 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [createWebhook](/mutations/createWebhook) **Next**  [deleteAgreement](/mutations/deleteAgreement)

---


# deleteAgreementMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteAgreement

# deleteAgreement  Mutation

  Delete an agreement for the given host account. Scope: "host". 

 ## Arguments

 ## [#](#arguments)

     agreement   [AgreementReferenceInput](/../types/AgreementReferenceInput) !  Non-null 

 Agreement to delete. 

 

   ## Response

 ## [#](#response)

  Returns [Agreement](/../types/Agreement) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteAccount](/mutations/deleteAccount) **Next**  [deleteApplication](/mutations/deleteApplication)

---


# deleteApplicationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteApplication

# deleteApplication  Mutation

  ## Arguments

 ## [#](#arguments)

     application   [ApplicationReferenceInput](/../types/ApplicationReferenceInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Application](/../types/Application) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteAgreement](/mutations/deleteAgreement) **Next**  [deleteComment](/mutations/deleteComment)

---


# deleteCommentMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteComment

# deleteComment  Mutation

  ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Comment](/../types/Comment) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteApplication](/mutations/deleteApplication) **Next**  [deleteConnectedAccount](/mutations/deleteConnectedAccount)

---


# deleteConnectedAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteConnectedAccount

# deleteConnectedAccount  Mutation

  Delete ConnectedAccount. Scope: "connectedAccounts". 

 ## Arguments

 ## [#](#arguments)

     connectedAccount   [ConnectedAccountReferenceInput](/../types/ConnectedAccountReferenceInput) !  Non-null 

 ConnectedAccount reference containing either id or legacyId 

 

   ## Response

 ## [#](#response)

  Returns [ConnectedAccount](/../types/ConnectedAccount) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteComment](/mutations/deleteComment) **Next**  [deleteExpense](/mutations/deleteExpense)

---


# deleteExpenseMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteExpense

# deleteExpense  Mutation

  Delete an expense. Only work if the expense is rejected - please check permissions.canDelete. Scope: "expenses". 

 ## Arguments

 ## [#](#arguments)

     expense   [ExpenseReferenceInput](/../types/ExpenseReferenceInput) !  Non-null 

 Reference of the expense to delete 

 

   ## Response

 ## [#](#response)

  Returns [Expense](/../types/Expense) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteConnectedAccount](/mutations/deleteConnectedAccount) **Next**  [deletePersonalToken](/mutations/deletePersonalToken)

---


# deletePersonalTokenMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deletePersonalToken

# deletePersonalToken  Mutation

  ## Arguments

 ## [#](#arguments)

     personalToken   [PersonalTokenReferenceInput](/../types/PersonalTokenReferenceInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [PersonalToken](/../types/PersonalToken) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteExpense](/mutations/deleteExpense) **Next**  [deleteTier](/mutations/deleteTier)

---


# deleteTierMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteTier

# deleteTier  Mutation

  Delete a tier. 

 ## Arguments

 ## [#](#arguments)

     tier   [TierReferenceInput](/../types/TierReferenceInput) !  Non-null 

    stopRecurringContributions   [Boolean](/../types/Boolean) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Tier](/../types/Tier) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deletePersonalToken](/mutations/deletePersonalToken) **Next**  [deleteTransactionsImport](/mutations/deleteTransactionsImport)

---


# deleteTransactionsImportMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteTransactionsImport

# deleteTransactionsImport  Mutation

  Delete an import and all its associated rows 

 ## Arguments

 ## [#](#arguments)

     id   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 ID of the import to delete 

 

   ## Response

 ## [#](#response)

  Returns [Boolean](/../types/Boolean) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteTier](/mutations/deleteTier) **Next**  [deleteUpdate](/mutations/deleteUpdate)

---


# deleteUpdateMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteUpdate

# deleteUpdate  Mutation

  Delete update. Scope: "updates". 

 ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Update](/../types/Update) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteTransactionsImport](/mutations/deleteTransactionsImport) **Next**  [deleteVendor](/mutations/deleteVendor)

---


# deleteVendorMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteVendor

# deleteVendor  Mutation

  Delete a vendor 

 ## Arguments

 ## [#](#arguments)

     vendor   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to the vendor to delete 

 

   ## Response

 ## [#](#response)

  Returns [Boolean](/../types/Boolean) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteUpdate](/mutations/deleteUpdate) **Next**  [deleteVirtualCard](/mutations/deleteVirtualCard)

---


# deleteVirtualCardMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteVirtualCard

# deleteVirtualCard  Mutation

  Delete Virtual Card. Scope: "virtualCards". 

 ## Arguments

 ## [#](#arguments)

     virtualCard   [VirtualCardReferenceInput](/../types/VirtualCardReferenceInput) !  Non-null 

 Virtual Card reference 

 

   ## Response

 ## [#](#response)

  Returns [Boolean](/../types/Boolean) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteVendor](/mutations/deleteVendor) **Next**  [deleteWebhook](/mutations/deleteWebhook)

---


# deleteWebhookMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/deleteWebhook

# deleteWebhook  Mutation

  Delete webhook. Scope: "webhooks". 

 ## Arguments

 ## [#](#arguments)

     webhook   [WebhookReferenceInput](/../types/WebhookReferenceInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Webhook](/../types/Webhook) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteVirtualCard](/mutations/deleteVirtualCard) **Next**  [draftExpenseAndInviteUser](/mutations/draftExpenseAndInviteUser)

---


# draftExpenseAndInviteUserMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/draftExpenseAndInviteUser

# draftExpenseAndInviteUser  Mutation

  Persist an Expense as a draft and invite someone to edit and submit it. Scope: "expenses". 

 ## Arguments

 ## [#](#arguments)

     expense   [ExpenseInviteDraftInput](/../types/ExpenseInviteDraftInput) !  Non-null 

 Expense data 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account where the expense will be created 

 

    skipInvite   [Boolean](/../types/Boolean) !  Non-null 

 Skip sending the invite email 

 

    lockedFields  [ [ExpenseLockableFields](/../types/ExpenseLockableFields) ] 

 Fields that the user should not be able to edit when submitting the draft 

 

   ## Response

 ## [#](#response)

  Returns [Expense](/../types/Expense) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [deleteWebhook](/mutations/deleteWebhook) **Next**  [duplicateAccount](/mutations/duplicateAccount)

---


# duplicateAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/duplicateAccount

# duplicateAccount  Mutation

  Duplicate an account. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account to duplicate 

 

    newSlug   [String](/../types/String)  

 The new slug for the duplicated account. Defaults to an autogenerated slug 

 

    newName   [String](/../types/String)  

 The new name for the duplicated account. Defaults to the same as the original account 

 

    oldName   [String](/../types/String)  

 Use this if you want to rename the original account 

 

    include   [DuplicateAccountDataTypeInput](/../types/DuplicateAccountDataTypeInput)  

 Which data should be copied when duplicating the account 

 

    connect   [Boolean](/../types/Boolean) !  Non-null 

 Whether to mark both accounts as connected 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [draftExpenseAndInviteUser](/mutations/draftExpenseAndInviteUser) **Next**  [editAccount](/mutations/editAccount)

---


# editAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editAccount

# editAccount  Mutation

  Edit key properties of an account. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     account   [AccountUpdateInput](/../types/AccountUpdateInput) !  Non-null 

 Account to edit. 

 

   ## Response

 ## [#](#response)

  Returns [Host](/../types/Host) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [duplicateAccount](/mutations/duplicateAccount) **Next**  [editAccountFeeStructure](/mutations/editAccountFeeStructure)

---


# editAccountFeeStructureMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editAccountFeeStructure

# editAccountFeeStructure  Mutation

  An endpoint for hosts to edit the fees structure of their hosted accounts. Scope: "host". 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account where the settings will be updated 

 

    hostFeePercent   [Float](/../types/Float) !  Non-null 

 The host fee percent to apply to this account 

 

    isCustomFee   [Boolean](/../types/Boolean) !  Non-null 

 If using a custom fee, set this to true 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editAccount](/mutations/editAccount) **Next**  [editAccountFlags](/mutations/editAccountFlags)

---


# editAccountFlagsMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editAccountFlags

# editAccountFlags  Mutation

  [Root only] Edits account flags (deleted, banned, archived, trusted host) 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account to change the flags for 

 

    isArchived   [Boolean](/../types/Boolean)  

 Specify whether the account is archived 

 

    isTrustedHost   [Boolean](/../types/Boolean)  

 Specify whether the account is a trusted host 

 

    isTwoFactorAuthEnabled   [Boolean](/../types/Boolean)  

 Set this to false to disable 2FA. Other values have no effect. 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editAccountFeeStructure](/mutations/editAccountFeeStructure) **Next**  [editAccountFreezeStatus](/mutations/editAccountFreezeStatus)

---


# editAccountFreezeStatusMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editAccountFreezeStatus

# editAccountFreezeStatus  Mutation

  An endpoint for hosts to edit the freeze status of their hosted accounts. Scope: "host". 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account to freeze 

 

    action   [AccountFreezeAction](/../types/AccountFreezeAction) !  Non-null 

    messageForAccountAdmins   [String](/../types/String)  

 Message to send by email to the admins of the account 

 

    messageForContributors   [String](/../types/String)  

 Message to send by email to the contributors when pausing their contributions (with PayPal) or unpausing 

 

    pauseExistingRecurringContributions   [Boolean](/../types/Boolean) !  Non-null 

 Whether to pause recurring contributions 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editAccountFlags](/mutations/editAccountFlags) **Next**  [editAccountSetting](/mutations/editAccountSetting)

---


# editAccountSettingMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editAccountSetting

# editAccountSetting  Mutation

  Edit the settings for the given account. Scope: "account" or "host". 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account where the settings will be updated 

 

    key   [AccountSettingsKey](/../types/AccountSettingsKey) !  Non-null 

 The key that you want to edit in settings 

 

    value   [JSON](/../types/JSON) !  Non-null 

 The value to set for this key 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editAccountFreezeStatus](/mutations/editAccountFreezeStatus) **Next**  [editAccountType](/mutations/editAccountType)

---


# editAccountTypeMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editAccountType

# editAccountType  Mutation

  [Root only] Edits account type from User to Organization 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account to change the type for 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editAccountSetting](/mutations/editAccountSetting) **Next**  [editAccountingCategories](/mutations/editAccountingCategories)

---


# editAccountingCategoriesMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editAccountingCategories

# editAccountingCategories  Mutation

  Edit an accounting category. Returns the account with the updated categories. 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The host to edit accounting categories for 

 

    categories  [ [AccountingCategoryInput](/../types/AccountingCategoryInput) !]!  Non-null 

 The list of categories to edit 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editAccountType](/mutations/editAccountType) **Next**  [editAddedFunds](/mutations/editAddedFunds)

---


# editAddedFundsMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editAddedFunds

# editAddedFunds  Mutation

  Add funds to the given account. Scope: "host". 

 ## Arguments

 ## [#](#arguments)

     order   [OrderReferenceInput](/../types/OrderReferenceInput) !  Non-null 

 The order to edit 

 

    fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The account that will be used as the source of the funds 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The account that will receive the funds 

 

    tier   [TierReferenceInput](/../types/TierReferenceInput)  

 The tier to which the funds will be added 

 

    amount   [AmountInput](/../types/AmountInput) !  Non-null 

 The total amount of the order, including fees and taxes 

 

    paymentProcessorFee   [AmountInput](/../types/AmountInput)  

 The payment processor fee amount 

 

    hostFeePercent   [Float](/../types/Float)  

 The host fee percent to apply to the order, as a float between 0 and 100 

 

    description   [String](/../types/String) !  Non-null 

 A short description of the contribution 

 

    memo   [String](/../types/String)  

 A private note for the host 

 

    processedAt   [DateTime](/../types/DateTime)  

 The date at which the order was processed 

 

    invoiceTemplate   [String](/../types/String)  

 The invoice template to use for this order 

 

    tax   [TaxInput](/../types/TaxInput)  

 The tax to apply to the order 

 

    accountingCategory   [AccountingCategoryReferenceInput](/../types/AccountingCategoryReferenceInput)  

 The accounting category of this order 

 

   ## Response

 ## [#](#response)

  Returns [Order](/../types/Order) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editAccountingCategories](/mutations/editAccountingCategories) **Next**  [editAgreement](/mutations/editAgreement)

---


# editAgreementMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editAgreement

# editAgreement  Mutation

  Edit an agreement for the given host account. Scope: "host". 

 ## Arguments

 ## [#](#arguments)

     agreement   [AgreementReferenceInput](/../types/AgreementReferenceInput) !  Non-null 

 Agreement to update. 

 

    title   [NonEmptyString](/../types/NonEmptyString)  

 Updated agreement title 

 

    expiresAt   [DateTime](/../types/DateTime)  

 Optional date in which this agreement expires. 

 

    attachment   [Upload](/../types/Upload)  

 Agreement attachment 

 

    notes   [String](/../types/String)  

 Additional notes about the agreement for the host admins 

 

   ## Response

 ## [#](#response)

  Returns [Agreement](/../types/Agreement) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editAddedFunds](/mutations/editAddedFunds) **Next**  [editComment](/mutations/editComment)

---


# editCommentMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editComment

# editComment  Mutation

  Edit a comment. Scope: "conversations", "expenses" or "updates". 

 ## Arguments

 ## [#](#arguments)

     comment   [CommentUpdateInput](/../types/CommentUpdateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Comment](/../types/Comment) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editAgreement](/mutations/editAgreement) **Next**  [editConversation](/mutations/editConversation)

---


# editConversationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editConversation

# editConversation  Mutation

  Edit a conversation. Scope: "conversations". 

 ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String) !  Non-null 

 Conversation's id 

 

    title   [String](/../types/String) !  Non-null 

 Conversation's title 

 

    tags  [ [String](/../types/String) ] 

 A list of tags for this conversation 

 

   ## Response

 ## [#](#response)

  Returns [Conversation](/../types/Conversation) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editComment](/mutations/editComment) **Next**  [editExpense](/mutations/editExpense)

---


# editExpenseMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editExpense

# editExpense  Mutation

  To update an existing expense 

 ## Arguments

 ## [#](#arguments)

     expense   [ExpenseUpdateInput](/../types/ExpenseUpdateInput) !  Non-null 

 Expense data 

 

    draftKey   [String](/../types/String)  

 Expense draft key if invited to submit expense. Scope: "expenses". 

 

   ## Response

 ## [#](#response)

  Returns [Expense](/../types/Expense) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editConversation](/mutations/editConversation) **Next**  [editLegalDocumentStatus](/mutations/editLegalDocumentStatus)

---


# editLegalDocumentStatusMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editLegalDocumentStatus

# editLegalDocumentStatus  Mutation

  Edit the status of a legal document 

 ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String) !  Non-null 

 The ID of the legal document 

 

    status   [LegalDocumentRequestStatus](/../types/LegalDocumentRequestStatus) !  Non-null 

 The new status of the legal document 

 

    host   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The host of the legal document 

 

    message   [String](/../types/String)  

 A message to explain the change in status. Will be sent to the legal document submitter 

 

    file   [Upload](/../types/Upload)  

 The new document link for the legal document. Must pass status=RECEIVED. 

 

   ## Response

 ## [#](#response)

  Returns [LegalDocument](/../types/LegalDocument) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editExpense](/mutations/editExpense) **Next**  [editMember](/mutations/editMember)

---


# editMemberMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editMember

# editMember  Mutation

  Edit an existing member of the Collective. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     memberAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to an account for the member to edit. 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to an account for the Collective 

 

    role   [MemberRole](/../types/MemberRole)  

 Role of member 

 

    description   [String](/../types/String)  

    since   [DateTime](/../types/DateTime)  

   ## Response

 ## [#](#response)

  Returns [Member](/../types/Member) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editLegalDocumentStatus](/mutations/editLegalDocumentStatus) **Next**  [editMemberInvitation](/mutations/editMemberInvitation)

---


# editMemberInvitationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editMemberInvitation

# editMemberInvitation  Mutation

  Edit an existing member invitation of the Collective. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     memberAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to an account for the member to edit. 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to an account for the Collective 

 

    role   [MemberRole](/../types/MemberRole)  

 Role of member 

 

    description   [String](/../types/String)  

    since   [DateTime](/../types/DateTime)  

   ## Response

 ## [#](#response)

  Returns [MemberInvitation](/../types/MemberInvitation) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editMember](/mutations/editMember) **Next**  [editPayoutMethod](/mutations/editPayoutMethod)

---


# editPayoutMethodMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editPayoutMethod

# editPayoutMethod  Mutation

  ## Arguments

 ## [#](#arguments)

     payoutMethod   [PayoutMethodInput](/../types/PayoutMethodInput) !  Non-null 

 Payout Method reference 

 

   ## Response

 ## [#](#response)

  Returns [PayoutMethod](/../types/PayoutMethod) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editMemberInvitation](/mutations/editMemberInvitation) **Next**  [editPendingOrder](/mutations/editPendingOrder)

---


# editPendingOrderMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editPendingOrder

# editPendingOrder  Mutation

  To edit a pending order. Scope: "orders". 

 ## Arguments

 ## [#](#arguments)

     order   [PendingOrderEditInput](/../types/PendingOrderEditInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Order](/../types/Order) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editPayoutMethod](/mutations/editPayoutMethod) **Next**  [editPublicMessage](/mutations/editPublicMessage)

---


# editPublicMessageMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editPublicMessage

# editPublicMessage  Mutation

  Edit the public message for the given Member of a Collective. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to an account for the donating Collective 

 

    toAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to an account for the receiving Collective 

 

    message   [String](/../types/String)  

 New public message 

 

   ## Response

 ## [#](#response)

  Returns [Member](/../types/Member) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editPendingOrder](/mutations/editPendingOrder) **Next**  [editTier](/mutations/editTier)

---


# editTierMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editTier

# editTier  Mutation

  Edit a tier. 

 ## Arguments

 ## [#](#arguments)

     tier   [TierUpdateInput](/../types/TierUpdateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Tier](/../types/Tier) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editPublicMessage](/mutations/editPublicMessage) **Next**  [editTransactionsImport](/mutations/editTransactionsImport)

---


# editTransactionsImportMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editTransactionsImport

# editTransactionsImport  Mutation

  Edit an import 

 ## Arguments

 ## [#](#arguments)

     id   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 ID of the import to edit 

 

    source   [NonEmptyString](/../types/NonEmptyString)  

 Source of the import (e.g. "Bank of America", "Eventbrite", etc...) 

 

    name   [NonEmptyString](/../types/NonEmptyString)  

 Name of the import (e.g. "Contributions May 2021", "Tickets for Mautic Conference 2024") 

 

    assignments  [ [TransactionsImportAssignmentInput](/../types/TransactionsImportAssignmentInput) !] 

 Assignments for the import 

 

   ## Response

 ## [#](#response)

  Returns [TransactionsImport](/../types/TransactionsImport) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editTier](/mutations/editTier) **Next**  [editTwoFactorAuthenticationMethod](/mutations/editTwoFactorAuthenticationMethod)

---


# editTwoFactorAuthenticationMethodMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editTwoFactorAuthenticationMethod

# editTwoFactorAuthenticationMethod  Mutation

  Edit 2FA method 

 ## Arguments

 ## [#](#arguments)

     userTwoFactorMethod   [UserTwoFactorMethodReferenceInput](/../types/UserTwoFactorMethodReferenceInput) !  Non-null 

 Method to edit 

 

    name   [String](/../types/String)  

 New name for the method 

 

   ## Response

 ## [#](#response)

  Returns [Individual](/../types/Individual) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editTransactionsImport](/mutations/editTransactionsImport) **Next**  [editUpdate](/mutations/editUpdate)

---


# editUpdateMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editUpdate

# editUpdate  Mutation

  Edit update. Scope: "updates". 

 ## Arguments

 ## [#](#arguments)

     update   [UpdateUpdateInput](/../types/UpdateUpdateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Update](/../types/Update) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editTwoFactorAuthenticationMethod](/mutations/editTwoFactorAuthenticationMethod) **Next**  [editVendor](/mutations/editVendor)

---


# editVendorMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editVendor

# editVendor  Mutation

  Edit an existing vendor 

 ## Arguments

 ## [#](#arguments)

     vendor   [VendorEditInput](/../types/VendorEditInput) !  Non-null 

 Reference to the host that holds the vendor 

 

    archive   [Boolean](/../types/Boolean)  

 Whether to archive (true) or unarchive (unarchive) the vendor 

 

   ## Response

 ## [#](#response)

  Returns [Vendor](/../types/Vendor) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editUpdate](/mutations/editUpdate) **Next**  [editVirtualCard](/mutations/editVirtualCard)

---


# editVirtualCardMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/editVirtualCard

# editVirtualCard  Mutation

  Edit existing Virtual Card information. Scope: "virtualCards". 

 ## Arguments

 ## [#](#arguments)

     virtualCard   [VirtualCardReferenceInput](/../types/VirtualCardReferenceInput) !  Non-null 

 Virtual card reference 

 

    name   [String](/../types/String)  

 Virtual card name 

 

    assignee   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Individual account responsible for the card 

 

    limitAmount   [AmountInput](/../types/AmountInput)  

 Virtual card limit amount 

 

    limitInterval   [VirtualCardLimitInterval](/../types/VirtualCardLimitInterval)  

 Virtual card limit interval 

 

   ## Response

 ## [#](#response)

  Returns [VirtualCard](/../types/VirtualCard) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editVendor](/mutations/editVendor) **Next**  [followAccount](/mutations/followAccount)

---


# followAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/followAccount

# followAccount  Mutation

  Follows a given Collective. Scope: "account" 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 user will follow this account 

 

   ## Response

 ## [#](#response)

  Returns [FollowAccountResult](/../types/FollowAccountResult) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [editVirtualCard](/mutations/editVirtualCard) **Next**  [followConversation](/mutations/followConversation)

---


# followConversationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/followConversation

# followConversation  Mutation

  Returns true if user is following, false otherwise. Must be authenticated. Scope: "conversations". 

 ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String) !  Non-null 

 Conversation's id 

 

    isActive = true   [Boolean](/../types/Boolean)  

 Set this to false to unfollow the conversation 

 

   ## Response

 ## [#](#response)

  Returns [Boolean](/../types/Boolean) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [followAccount](/mutations/followAccount) **Next**  [generatePlaidLinkToken](/mutations/generatePlaidLinkToken)

---


# generatePlaidLinkTokenMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/generatePlaidLinkToken

# generatePlaidLinkToken  Mutation

  Generate a Plaid Link token 

 ## Arguments

 ## [#](#arguments)

     host   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The account to which the Plaid account should be connected 

 

    transactionImport   [TransactionsImportReferenceInput](/../types/TransactionsImportReferenceInput)  

 Use this parameter to specify the import to update (when using the Plaid update flow) 

 

    countries  [ [CountryISO](/../types/CountryISO) !] 

 The countries to enable in the accounts selection. Defaults to the host country. 

 

    locale   [Locale](/../types/Locale)  

 The language to use in the Plaid Link flow. Defaults to "en". 

 

    accountSelectionEnabled   [Boolean](/../types/Boolean)  

 If true, the account selection flow will be enabled. Requires a `transactionImport` . 

 

   ## Response

 ## [#](#response)

  Returns [PlaidLinkTokenCreateResponse](/../types/PlaidLinkTokenCreateResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [followConversation](/mutations/followConversation) **Next**  [importTransactions](/mutations/importTransactions)

---


# importTransactionsMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/importTransactions

# importTransactions  Mutation

  Import transactions, manually or from a CSV file 

 ## Arguments

 ## [#](#arguments)

     id   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 ID of the import to add transactions to 

 

    file   [Upload](/../types/Upload)  

 Raw file from which the data was extracted 

 

    csvConfig   [JSONObject](/../types/JSONObject)  

 Configuration of the CSV file 

 

    data  [ [TransactionsImportRowCreateInput](/../types/TransactionsImportRowCreateInput) !]!  Non-null 

 Data to import 

 

   ## Response

 ## [#](#response)

  Returns [TransactionsImport](/../types/TransactionsImport) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [generatePlaidLinkToken](/mutations/generatePlaidLinkToken) **Next**  [inviteMember](/mutations/inviteMember)

---


# inviteMemberMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/inviteMember

# inviteMember  Mutation

  Invite a new member to the Collective. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     memberAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to an account for the invitee 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to an account for the inviting Collective 

 

    role   [MemberRole](/../types/MemberRole) !  Non-null 

 Role of the invitee 

 

    description   [String](/../types/String)  

    since   [DateTime](/../types/DateTime)  

   ## Response

 ## [#](#response)

  Returns [MemberInvitation](/../types/MemberInvitation) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [importTransactions](/mutations/importTransactions) **Next**  [mergeAccounts](/mutations/mergeAccounts)

---


# mergeAccountsMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/mergeAccounts

# mergeAccounts  Mutation

  [Root only] Merge two accounts, returns the result account 

 ## Arguments

 ## [#](#arguments)

     fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account to merge from 

 

    toAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account to merge to 

 

    dryRun = true   [Boolean](/../types/Boolean) !  Non-null 

 If true, the result will be simulated and summarized in the response message 

 

   ## Response

 ## [#](#response)

  Returns [MergeAccountsResponse](/../types/MergeAccountsResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [inviteMember](/mutations/inviteMember) **Next**  [moveExpenses](/mutations/moveExpenses)

---


# moveExpensesMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/moveExpenses

# moveExpenses  Mutation

  [Root only] A mutation to move expenses from one account to another 

 ## Arguments

 ## [#](#arguments)

     expenses  [ [ExpenseReferenceInput](/../types/ExpenseReferenceInput) !]!  Non-null 

 The orders to move 

 

    destinationAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The account to move the expenses to. This must be a non USER account. 

 

   ## Response

 ## [#](#response)

  Returns [ [Expense](/../types/Expense) ]!.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [mergeAccounts](/mutations/mergeAccounts) **Next**  [moveOrders](/mutations/moveOrders)

---


# moveOrdersMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/moveOrders

# moveOrders  Mutation

  [Root only] A mutation to move orders from one account to another 

 ## Arguments

 ## [#](#arguments)

     orders  [ [OrderReferenceInput](/../types/OrderReferenceInput) !]!  Non-null 

 The orders to move 

 

    fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

 The account to move the orders to. Set to null to keep existing 

 

    tier   [TierReferenceInput](/../types/TierReferenceInput)  

 The tier to move the orders to. Set to null to keep existing. Pass { id: "custom" } to reference the custom tier (/donate) 

 

    makeIncognito   [Boolean](/../types/Boolean)  

 If true, the orders will be moved to the incognito account of "fromAccount" 

 

   ## Response

 ## [#](#response)

  Returns [ [Order](/../types/Order) ]!.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [moveExpenses](/mutations/moveExpenses) **Next**  [pauseVirtualCard](/mutations/pauseVirtualCard)

---


# pauseVirtualCardMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/pauseVirtualCard

# pauseVirtualCard  Mutation

  Pause active Virtual Card. Scope: "virtualCards". 

 ## Arguments

 ## [#](#arguments)

     virtualCard   [VirtualCardReferenceInput](/../types/VirtualCardReferenceInput) !  Non-null 

 Virtual Card reference 

 

   ## Response

 ## [#](#response)

  Returns [VirtualCard](/../types/VirtualCard) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [moveOrders](/mutations/moveOrders) **Next**  [processExpense](/mutations/processExpense)

---


# processExpenseMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/processExpense

# processExpense  Mutation

  Process the expense with the given action. Scope: "expenses". 

 ## Arguments

 ## [#](#arguments)

     expense   [ExpenseReferenceInput](/../types/ExpenseReferenceInput) !  Non-null 

 Reference of the expense to process 

 

    draftKey   [String](/../types/String)  

 Expense draft key if its action by invited user without account 

 

    action   [ExpenseProcessAction](/../types/ExpenseProcessAction) !  Non-null 

 The action to trigger 

 

    message   [String](/../types/String)  

 Message to be attached to the action activity. 

 

    paymentParams   [ProcessExpensePaymentParams](/../types/ProcessExpensePaymentParams)  

 If action is related to a payment, this object used for the payment parameters 

 

   ## Response

 ## [#](#response)

  Returns [Expense](/../types/Expense) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [pauseVirtualCard](/mutations/pauseVirtualCard) **Next**  [processHostApplication](/mutations/processHostApplication)

---


# processHostApplicationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/processHostApplication

# processHostApplication  Mutation

  Reply to a host application. Scope: "host". 

 ## Arguments

 ## [#](#arguments)

     hostApplication   [HostApplicationReferenceInput](/../types/HostApplicationReferenceInput)  

 The host application 

 

    action   [ProcessHostApplicationAction](/../types/ProcessHostApplicationAction) !  Non-null 

 What to do with the application 

 

    message   [String](/../types/String)  

 A message to attach as a reason for the action 

 

   ## Response

 ## [#](#response)

  Returns [ProcessHostApplicationResponse](/../types/ProcessHostApplicationResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [processExpense](/mutations/processExpense) **Next**  [processPendingOrder](/mutations/processPendingOrder)

---


# processPendingOrderMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/processPendingOrder

# processPendingOrder  Mutation

  A mutation for the host to approve or reject an order. Scope: "orders". 

 ## Arguments

 ## [#](#arguments)

     order   [OrderUpdateInput](/../types/OrderUpdateInput) !  Non-null 

 The order to process 

 

    action   [ProcessOrderAction](/../types/ProcessOrderAction) !  Non-null 

 The action to take on the order 

 

   ## Response

 ## [#](#response)

  Returns [Order](/../types/Order) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [processHostApplication](/mutations/processHostApplication) **Next**  [publishUpdate](/mutations/publishUpdate)

---


# publishUpdateMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/publishUpdate

# publishUpdate  Mutation

  Publish update. Scope: "updates". 

 ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String) !  Non-null 

    notificationAudience   [UpdateAudience](/../types/UpdateAudience)  

   ## Response

 ## [#](#response)

  Returns [Update](/../types/Update) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [processPendingOrder](/mutations/processPendingOrder) **Next**  [refreshPlaidAccount](/mutations/refreshPlaidAccount)

---


# refreshPlaidAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/refreshPlaidAccount

# refreshPlaidAccount  Mutation

  Refresh the list of sub-accounts & other metadata by re-fetching the account info 

 ## Arguments

 ## [#](#arguments)

     connectedAccount   [ConnectedAccountReferenceInput](/../types/ConnectedAccountReferenceInput)  

 The Plaid connected account to refresh 

 

    transactionImport   [TransactionsImportReferenceInput](/../types/TransactionsImportReferenceInput)  

 The transactions import to refresh 

 

   ## Response

 ## [#](#response)

  Returns [PlaidConnectAccountResponse](/../types/PlaidConnectAccountResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [publishUpdate](/mutations/publishUpdate) **Next**  [refundTransaction](/mutations/refundTransaction)

---


# refundTransactionMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/refundTransaction

# refundTransaction  Mutation

  Refunds a transaction. Scope: "transactions". 

 ## Arguments

 ## [#](#arguments)

     transaction   [TransactionReferenceInput](/../types/TransactionReferenceInput) !  Non-null 

 Reference of the transaction to refund 

 

    ignoreBalanceCheck   [Boolean](/../types/Boolean)  

 If true, the refund will be processed even if it exceeds the balance of the Collective 

 

   ## Response

 ## [#](#response)

  Returns [Transaction](/../types/Transaction) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [refreshPlaidAccount](/mutations/refreshPlaidAccount) **Next**  [regenerateRecoveryCodes](/mutations/regenerateRecoveryCodes)

---


# regenerateRecoveryCodesMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/regenerateRecoveryCodes

# regenerateRecoveryCodes  Mutation

  Regenerate two factor authentication recovery codes 

 ## Response

 ## [#](#response)

  Returns [ [String](/../types/String) !].

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [refundTransaction](/mutations/refundTransaction) **Next**  [rejectTransaction](/mutations/rejectTransaction)

---


# rejectTransactionMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/rejectTransaction

# rejectTransaction  Mutation

  Rejects transaction, removes member from Collective, and sends a message to the contributor. Scope: "transactions". 

 ## Arguments

 ## [#](#arguments)

     transaction   [TransactionReferenceInput](/../types/TransactionReferenceInput) !  Non-null 

 Reference of the transaction to refund 

 

    message   [String](/../types/String)  

 Message to send to the contributor whose contribution has been rejected 

 

   ## Response

 ## [#](#response)

  Returns [Transaction](/../types/Transaction) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [regenerateRecoveryCodes](/mutations/regenerateRecoveryCodes) **Next**  [rejectVirtualCardRequest](/mutations/rejectVirtualCardRequest)

---


# rejectVirtualCardRequestMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/rejectVirtualCardRequest

# rejectVirtualCardRequest  Mutation

  Reject a virtual card request. Scope: "virtualCards" 

 ## Arguments

 ## [#](#arguments)

     virtualCardRequest   [VirtualCardRequestReferenceInput](/../types/VirtualCardRequestReferenceInput)  

 Virtual card request 

 

   ## Response

 ## [#](#response)

  Returns [VirtualCardRequest](/../types/VirtualCardRequest) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [rejectTransaction](/mutations/rejectTransaction) **Next**  [removeEmojiReaction](/mutations/removeEmojiReaction)

---


# removeEmojiReactionMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/removeEmojiReaction

# removeEmojiReaction  Mutation

  Remove an emoji reaction. Scope: "conversations", "expenses" or "updates". 

 ## Arguments

 ## [#](#arguments)

     comment   [CommentReferenceInput](/../types/CommentReferenceInput)  

    update   [UpdateReferenceInput](/../types/UpdateReferenceInput)  

    emoji   [String](/../types/String) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [EmojiReactionResponse](/../types/EmojiReactionResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [rejectVirtualCardRequest](/mutations/rejectVirtualCardRequest) **Next**  [removeHost](/mutations/removeHost)

---


# removeHostMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/removeHost

# removeHost  Mutation

  Removes the host for an account 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The account to unhost 

 

    message   [String](/../types/String)  

 An optional HTML message to provide additional context to the action 

 

    messageForContributors   [String](/../types/String)  

 An optional HTML message to provide additional context for contributors 

 

    pauseContributions = true   [Boolean](/../types/Boolean) !  Non-null 

 If true, contributions will be paused rather than canceled 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [removeEmojiReaction](/mutations/removeEmojiReaction) **Next**  [removeMember](/mutations/removeMember)

---


# removeMemberMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/removeMember

# removeMember  Mutation

  Remove a member from the Collective. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     memberAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to an account of member to remove 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to the Collective account 

 

    role   [MemberRole](/../types/MemberRole) !  Non-null 

 Role of member 

 

    isInvitation   [Boolean](/../types/Boolean)  

   ## Response

 ## [#](#response)

  Returns [Boolean](/../types/Boolean) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [removeHost](/mutations/removeHost) **Next**  [removePaymentMethod](/mutations/removePaymentMethod)

---


# removePaymentMethodMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/removePaymentMethod

# removePaymentMethod  Mutation

  Remove a payment method 

 ## Arguments

 ## [#](#arguments)

     paymentMethod   [PaymentMethodReferenceInput](/../types/PaymentMethodReferenceInput) !  Non-null 

    cancelActiveSubscriptions   [Boolean](/../types/Boolean)  

 Whether to cancel active subscriptions using this payment method 

 

   ## Response

 ## [#](#response)

  Returns [PaymentMethod](/../types/PaymentMethod) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [removeMember](/mutations/removeMember) **Next**  [removePayoutMethod](/mutations/removePayoutMethod)

---


# removePayoutMethodMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/removePayoutMethod

# removePayoutMethod  Mutation

  Remove the given payout method. Scope: "expenses". 

 ## Arguments

 ## [#](#arguments)

     payoutMethodId   [String](/../types/String) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [PayoutMethod](/../types/PayoutMethod) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [removePaymentMethod](/mutations/removePaymentMethod) **Next**  [removeTwoFactorAuthTokenFromIndividual](/mutations/removeTwoFactorAuthTokenFromIndividual)

---


# removeTwoFactorAuthTokenFromIndividualMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/removeTwoFactorAuthTokenFromIndividual

# removeTwoFactorAuthTokenFromIndividual  Mutation

  Remove 2FA from the Individual if it has been enabled. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     userTwoFactorMethod   [UserTwoFactorMethodReferenceInput](/../types/UserTwoFactorMethodReferenceInput)  

 Method to remove from this account 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account that will have 2FA removed from it 

 

   ## Response

 ## [#](#response)

  Returns [Individual](/../types/Individual) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [removePayoutMethod](/mutations/removePayoutMethod) **Next**  [replyToMemberInvitation](/mutations/replyToMemberInvitation)

---


# replyToMemberInvitationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/replyToMemberInvitation

# replyToMemberInvitation  Mutation

  Endpoint to accept or reject an invitation to become a member. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     invitation   [MemberInvitationReferenceInput](/../types/MemberInvitationReferenceInput) !  Non-null 

 Reference to the invitation 

 

    accept   [Boolean](/../types/Boolean) !  Non-null 

 Whether this invitation should be accepted or declined 

 

   ## Response

 ## [#](#response)

  Returns [Boolean](/../types/Boolean) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [removeTwoFactorAuthTokenFromIndividual](/mutations/removeTwoFactorAuthTokenFromIndividual) **Next**  [requestVirtualCard](/mutations/requestVirtualCard)

---


# requestVirtualCardMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/requestVirtualCard

# requestVirtualCard  Mutation

  Request Virtual Card to host. Scope: "virtualCards". 

 ## Arguments

 ## [#](#arguments)

     notes   [String](/../types/String)  

 Request notes 

 

    purpose   [String](/../types/String)  

 Purpose for this Virtual Card 

 

    spendingLimitAmount   [AmountInput](/../types/AmountInput)  

 Limit you want for this Virtual Card in the given use interval 

 

    spendingLimitInterval = "MONTHLY"   [VirtualCardLimitInterval](/../types/VirtualCardLimitInterval)  

 Interval to apply the amount limit on this virtual card 

 

    account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account where the virtual card will be associated 

 

   ## Response

 ## [#](#response)

  Returns [Boolean](/../types/Boolean) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [replyToMemberInvitation](/mutations/replyToMemberInvitation) **Next**  [resendDraftExpenseInvite](/mutations/resendDraftExpenseInvite)

---


# resendDraftExpenseInviteMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/resendDraftExpenseInvite

# resendDraftExpenseInvite  Mutation

  To re-send the invitation to complete a draft expense. Scope: "expenses". 

 ## Arguments

 ## [#](#arguments)

     expense   [ExpenseReferenceInput](/../types/ExpenseReferenceInput) !  Non-null 

 Reference of the expense to process 

 

   ## Response

 ## [#](#response)

  Returns [Expense](/../types/Expense) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [requestVirtualCard](/mutations/requestVirtualCard) **Next**  [restorePayoutMethod](/mutations/restorePayoutMethod)

---


# restorePayoutMethodMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/restorePayoutMethod

# restorePayoutMethod  Mutation

  Restore the given payout method. Scope: "expenses". 

 ## Arguments

 ## [#](#arguments)

     payoutMethod   [PayoutMethodReferenceInput](/../types/PayoutMethodReferenceInput) !  Non-null 

 Payout Method reference 

 

   ## Response

 ## [#](#response)

  Returns [PayoutMethod](/../types/PayoutMethod) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [resendDraftExpenseInvite](/mutations/resendDraftExpenseInvite) **Next**  [resumeVirtualCard](/mutations/resumeVirtualCard)

---


# resumeVirtualCardMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/resumeVirtualCard

# resumeVirtualCard  Mutation

  Resume paused Virtual Card. Scope: "virtualCards". 

 ## Arguments

 ## [#](#arguments)

     virtualCard   [VirtualCardReferenceInput](/../types/VirtualCardReferenceInput) !  Non-null 

 Virtual Card reference 

 

   ## Response

 ## [#](#response)

  Returns [VirtualCard](/../types/VirtualCard) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [restorePayoutMethod](/mutations/restorePayoutMethod) **Next**  [revokeOAuthAuthorization](/mutations/revokeOAuthAuthorization)

---


# revokeOAuthAuthorizationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/revokeOAuthAuthorization

# revokeOAuthAuthorization  Mutation

  Revoke an OAuth authorization. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     oAuthAuthorization   [OAuthAuthorizationReferenceInput](/../types/OAuthAuthorizationReferenceInput) !  Non-null 

 Reference of the OAuth Authorization 

 

   ## Response

 ## [#](#response)

  Returns [OAuthAuthorization](/../types/OAuthAuthorization) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [resumeVirtualCard](/mutations/resumeVirtualCard) **Next**  [rootAnonymizeAccount](/mutations/rootAnonymizeAccount)

---


# rootAnonymizeAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/rootAnonymizeAccount

# rootAnonymizeAccount  Mutation

  [Root only] Anonymizes an account 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account to anonymize 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [revokeOAuthAuthorization](/mutations/revokeOAuthAuthorization) **Next**  [sendGuestConfirmationEmail](/mutations/sendGuestConfirmationEmail)

---


# sendGuestConfirmationEmailMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/sendGuestConfirmationEmail

# sendGuestConfirmationEmail  Mutation

  Sends an email for guest to confirm their emails and create their Open Collective account 

 ## Arguments

 ## [#](#arguments)

     email   [EmailAddress](/../types/EmailAddress) !  Non-null 

 The email to validate 

 

   ## Response

 ## [#](#response)

  Returns [Boolean](/../types/Boolean) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [rootAnonymizeAccount](/mutations/rootAnonymizeAccount) **Next**  [sendMessage](/mutations/sendMessage)

---


# sendMessageMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/sendMessage

# sendMessage  Mutation

  Send a message to an account. Scope: "account" 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Reference to the Account to send message to. 

 

    message   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 Message to send to the account. 

 

    subject   [String](/../types/String)  

   ## Response

 ## [#](#response)

  Returns [SendMessageResult](/../types/SendMessageResult) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [sendGuestConfirmationEmail](/mutations/sendGuestConfirmationEmail) **Next**  [sendSurveyResponse](/mutations/sendSurveyResponse)

---


# sendSurveyResponseMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/sendSurveyResponse

# sendSurveyResponse  Mutation

  Send In-App Survey response 

 ## Arguments

 ## [#](#arguments)

     surveyKey   [String](/../types/String) !  Non-null 

    responseId   [String](/../types/String) !  Non-null 

    score   [Int](/../types/Int) !  Non-null 

    text   [String](/../types/String)  

    okToContact   [Boolean](/../types/Boolean)  

   ## Response

 ## [#](#response)

  Returns [Boolean](/../types/Boolean) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [sendMessage](/mutations/sendMessage) **Next**  [setChangelogViewDate](/mutations/setChangelogViewDate)

---


# setChangelogViewDateMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/setChangelogViewDate

# setChangelogViewDate  Mutation

  Update the time which the user viewed the changelog updates. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     changelogViewDate   [DateTime](/../types/DateTime) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Individual](/../types/Individual) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [sendSurveyResponse](/mutations/sendSurveyResponse) **Next**  [setEmailNotification](/mutations/setEmailNotification)

---


# setEmailNotificationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/setEmailNotification

# setEmailNotification  Mutation

  Set email notification subscription for requesting logged-in user 

 ## Arguments

 ## [#](#arguments)

     type   [ActivityAndClassesType](/../types/ActivityAndClassesType) !  Non-null 

    account   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Scope account which this notification preference is applied to 

 

    active   [Boolean](/../types/Boolean) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [ActivitySubscription](/../types/ActivitySubscription) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [setChangelogViewDate](/mutations/setChangelogViewDate) **Next**  [setNewsletterOptIn](/mutations/setNewsletterOptIn)

---


# setNewsletterOptInMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/setNewsletterOptIn

# setNewsletterOptIn  Mutation

  Update newsletter opt-in preference. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     newsletterOptIn   [Boolean](/../types/Boolean) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Individual](/../types/Individual) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [setEmailNotification](/mutations/setEmailNotification) **Next**  [setPassword](/mutations/setPassword)

---


# setPasswordMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/setPassword

# setPassword  Mutation

  Set password to Individual. Scope: "account". 2FA. 

 ## Arguments

 ## [#](#arguments)

     password   [String](/../types/String) !  Non-null 

 The password to set. 

 

    currentPassword   [String](/../types/String)  

 The current password (if any) to confirm password change. 

 

   ## Response

 ## [#](#response)

  Returns [SetPasswordResponse](/../types/SetPasswordResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [setNewsletterOptIn](/mutations/setNewsletterOptIn) **Next**  [setPolicies](/mutations/setPolicies)

---


# setPoliciesMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/setPolicies

# setPolicies  Mutation

  Adds or removes a policy on a given account. Scope: "account". 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account where the policies are being set 

 

    policies   [PoliciesInput](/../types/PoliciesInput) !  Non-null 

 The policy to be added 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [setPassword](/mutations/setPassword) **Next**  [setTags](/mutations/setTags)

---


# setTagsMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/setTags

# setTags  Mutation

  ## Arguments

 ## [#](#arguments)

     tags  [ [String](/../types/String) ] 

 Tags associated with the object being updated 

 

    order   [OrderReferenceInput](/../types/OrderReferenceInput)  

    expense   [ExpenseReferenceInput](/../types/ExpenseReferenceInput)  

   ## Response

 ## [#](#response)

  Returns [TagResponse](/../types/TagResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [setPolicies](/mutations/setPolicies) **Next**  [startResumeOrdersProcess](/mutations/startResumeOrdersProcess)

---


# startResumeOrdersProcessMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/startResumeOrdersProcess

# startResumeOrdersProcess  Mutation

  Starts or resumes the process of notifying contributors for their PAUSED contributions 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The account to start/resume the process for 

 

    message   [String](/../types/String)  

 An optional message to send to contributors 

 

   ## Response

 ## [#](#response)

  Returns [Account](/../types/Account) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [setTags](/mutations/setTags) **Next**  [submitLegalDocument](/mutations/submitLegalDocument)

---


# submitLegalDocumentMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/submitLegalDocument

# submitLegalDocument  Mutation

  Submit a legal document 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 The account the legal document is for 

 

    type   [LegalDocumentType](/../types/LegalDocumentType) !  Non-null 

 The type of legal document 

 

    formData   [JSON](/../types/JSON) !  Non-null 

 The form data for the legal document. Will be validated against the schema for the document type and encrypted. 

 

   ## Response

 ## [#](#response)

  Returns [LegalDocument](/../types/LegalDocument) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [startResumeOrdersProcess](/mutations/startResumeOrdersProcess) **Next**  [syncPlaidAccount](/mutations/syncPlaidAccount)

---


# syncPlaidAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/syncPlaidAccount

# syncPlaidAccount  Mutation

  Manually request a sync for Plaid account 

 ## Arguments

 ## [#](#arguments)

     connectedAccount   [ConnectedAccountReferenceInput](/../types/ConnectedAccountReferenceInput) !  Non-null 

 The connected account to refresh 

 

   ## Response

 ## [#](#response)

  Returns [TransactionsImport](/../types/TransactionsImport) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [submitLegalDocument](/mutations/submitLegalDocument) **Next**  [unfollowAccount](/mutations/unfollowAccount)

---


# unfollowAccountMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/unfollowAccount

# unfollowAccount  Mutation

  Unfollows a given Collective. Scope: "account" 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 account to unfollow 

 

   ## Response

 ## [#](#response)

  Returns [UnfollowAccountResult](/../types/UnfollowAccountResult) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [syncPlaidAccount](/mutations/syncPlaidAccount) **Next**  [unpublishUpdate](/mutations/unpublishUpdate)

---


# unpublishUpdateMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/unpublishUpdate

# unpublishUpdate  Mutation

  Unpublish update. Scope: "updates". 

 ## Arguments

 ## [#](#arguments)

     id   [String](/../types/String) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Update](/../types/Update) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [unfollowAccount](/mutations/unfollowAccount) **Next**  [updateApplication](/mutations/updateApplication)

---


# updateApplicationMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/updateApplication

# updateApplication  Mutation

  ## Arguments

 ## [#](#arguments)

     application   [ApplicationUpdateInput](/../types/ApplicationUpdateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Application](/../types/Application) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [unpublishUpdate](/mutations/unpublishUpdate) **Next**  [updateOrder](/mutations/updateOrder)

---


# updateOrderMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/updateOrder

# updateOrder  Mutation

  Update an Order's amount, tier, or payment method. Scope: "orders". 

 ## Arguments

 ## [#](#arguments)

     order   [OrderReferenceInput](/../types/OrderReferenceInput) !  Non-null 

 Reference to the Order to update 

 

    paymentMethod   [PaymentMethodReferenceInput](/../types/PaymentMethodReferenceInput)  

 Reference to a Payment Method to update the order with 

 

    paypalSubscriptionId   [String](/../types/String)  

 To update the order with a PayPal subscription 

 

    tier   [TierReferenceInput](/../types/TierReferenceInput)  

 Reference to a Tier to update the order with 

 

    amount   [AmountInput](/../types/AmountInput)  

 An Amount to update the order to 

 

   ## Response

 ## [#](#response)

  Returns [Order](/../types/Order) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [updateApplication](/mutations/updateApplication) **Next**  [updateOrderAccountingCategory](/mutations/updateOrderAccountingCategory)

---


# updateOrderAccountingCategoryMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/updateOrderAccountingCategory

# updateOrderAccountingCategory  Mutation

  Update the accounting category of an order. Scope: "orders". 

 ## Arguments

 ## [#](#arguments)

     order   [OrderReferenceInput](/../types/OrderReferenceInput) !  Non-null 

 Reference to the Order to update 

 

    accountingCategory   [AccountingCategoryReferenceInput](/../types/AccountingCategoryReferenceInput)  

 Reference to the Accounting Category to update the order with 

 

   ## Response

 ## [#](#response)

  Returns [Order](/../types/Order) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [updateOrder](/mutations/updateOrder) **Next**  [updatePersonalToken](/mutations/updatePersonalToken)

---


# updatePersonalTokenMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/updatePersonalToken

# updatePersonalToken  Mutation

  ## Arguments

 ## [#](#arguments)

     personalToken   [PersonalTokenUpdateInput](/../types/PersonalTokenUpdateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [PersonalToken](/../types/PersonalToken) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [updateOrderAccountingCategory](/mutations/updateOrderAccountingCategory) **Next**  [updateSocialLinks](/mutations/updateSocialLinks)

---


# updateSocialLinksMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/updateSocialLinks

# updateSocialLinks  Mutation

  Updates collective social links 

 ## Arguments

 ## [#](#arguments)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null 

 Account where the social link will be associated 

 

    socialLinks  [ [SocialLinkInput](/../types/SocialLinkInput) !]!  Non-null 

 The social links in order of preference 

 

   ## Response

 ## [#](#response)

  Returns [ [SocialLink](/../types/SocialLink) !]!.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [updatePersonalToken](/mutations/updatePersonalToken) **Next**  [updateTransactionsImportRows](/mutations/updateTransactionsImportRows)

---


# updateTransactionsImportRowsMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/updateTransactionsImportRows

# updateTransactionsImportRows  Mutation

  Update transactions import rows to set new values or perform actions on them 

 ## Arguments

 ## [#](#arguments)

     id   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 ID of the import to add transactions to 

 

    rows  [ [TransactionsImportRowUpdateInput](/../types/TransactionsImportRowUpdateInput) !] 

 Rows to update 

 

    action   [TransactionsImportRowAction](/../types/TransactionsImportRowAction) !  Non-null 

 Action to perform on all non-processed rows 

 

   ## Response

 ## [#](#response)

  Returns [TransactionsImportEditResponse](/../types/TransactionsImportEditResponse) !.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [updateSocialLinks](/mutations/updateSocialLinks) **Next**  [updateWebhook](/mutations/updateWebhook)

---


# updateWebhookMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/updateWebhook

# updateWebhook  Mutation

  Update webhook. Scope: "webhooks". 

 ## Arguments

 ## [#](#arguments)

     webhook   [WebhookUpdateInput](/../types/WebhookUpdateInput) !  Non-null 

   ## Response

 ## [#](#response)

  Returns [Webhook](/../types/Webhook) .

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [updateTransactionsImportRows](/mutations/updateTransactionsImportRows) **Next**  [uploadFile](/mutations/uploadFile)

---


# uploadFileMutation

Source: https://graphql-docs-v2.opencollective.com/mutations/uploadFile

# uploadFile  Mutation

  ## Arguments

 ## [#](#arguments)

     files  [ [UploadFileInput](/../types/UploadFileInput) !]!  Non-null 

 The files to upload 

 

   ## Response

 ## [#](#response)

  Returns [ [UploadFileResult](/../types/UploadFileResult) !]!.

 ## Example

 ## [#](#example)

   Show menu options * [Query](#)
* [Variables](#)
* [Response](#)
 
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth    
```
    
  
```
   Copy query  Never null fields  Increase query depth  3

 Decrease query depth     

---

 **Previous**   [updateWebhook](/mutations/updateWebhook) **Next
 - Types** [Account](/types/Account)

---


# AccountInterface

Source: https://graphql-docs-v2.opencollective.com/types/Account

# Account  Interface

  Account interface shared by all kind of accounts (Bot, Collective, Event, User, Organization) 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id identifying the account (ie: 5v08jk63-w4g9nbpz-j7qmyder-p7ozax5g) 

   legacyId   [Int](/../types/Int) !   Deprecated 2020-01-01: should only be used during the transition to GraphQL API v2.  Non-null 

 The internal database identifier of the collective (ie: 580) 

   slug   [String](/../types/String) !  Non-null 

 The slug identifying the account (ie: babel) 

   type   [AccountType](/../types/AccountType) !  Non-null 

 The type of the account (BOT/COLLECTIVE/EVENT/ORGANIZATION/INDIVIDUAL/VENDOR) 

   name   [String](/../types/String)  

 Public name 

   legalName   [String](/../types/String)  

 Private, legal name. Used for expense receipts, taxes, etc. Scope: "account". 

   description   [String](/../types/String)  

   longDescription   [String](/../types/String)  

   tags  [ [String](/../types/String) ] 

   website   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   twitterHandle   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   githubHandle   [String](/../types/String)    Deprecated 2022-06-03: Please use repositoryUrl 

   repositoryUrl   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   socialLinks  [ [SocialLink](/../types/SocialLink) !]!  Non-null 

   currency   [Currency](/../types/Currency) !  Non-null 

 The currency of the account 

   expensePolicy   [String](/../types/String)    Deprecated 2024-11-04: Please use policies.EXPENSE\_POLICIES 

   isIncognito   [Boolean](/../types/Boolean) !  Non-null 

 Defines if the contributors wants to be incognito (name not displayed) 

   imageUrl   [String](/../types/String)  

   Show arguments (2)    backgroundImageUrl   [String](/../types/String)  

   Show arguments (2)    createdAt   [DateTime](/../types/DateTime)  

 The time of creation 

   updatedAt   [DateTime](/../types/DateTime)  

 The time of last update 

   unhostedAt   [DateTime](/../types/DateTime)  

 Date of unhosting by a given Fiscal Host. 

   Show arguments (1)    isArchived   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether this account is archived 

   isFrozen   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account is frozen 

   isActive   [Boolean](/../types/Boolean)  

 Returns whether the account accepts financial contributions. 

   isHost   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether the account is setup to Host collectives. 

   isAdmin   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user is an admin of this account 

   parentAccount   [Account](/../types/Account)    Deprecated 2022-12-16: use parent on AccountWithParent instead 

   members   [MemberCollection](/../types/MemberCollection) !  Non-null 

   Show arguments (7)    memberInvitations  [ [MemberInvitation](/../types/MemberInvitation) ] 

 Get pending member invitations for this account 

   Show arguments (1)    legalDocuments  [ [LegalDocument](/../types/LegalDocument) ] 

 The legal documents associated with this account 

   Show arguments (1)    memberOf   [MemberOfCollection](/../types/MemberOfCollection)  

   Show arguments (9)    emails  [ [EmailAddress](/../types/EmailAddress) !] 

 Returns the emails of the account. Individuals only have one, but organizations can have multiple emails. 

   transactions   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   Show arguments (34)    orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

   Show arguments (28)    expenses   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   Show arguments (26)    settings   [JSON](/../types/JSON) !  Non-null 

   conversations   [ConversationCollection](/../types/ConversationCollection) !  Non-null 

   Show arguments (3)    conversationsTags  [ [TagStat](/../types/TagStat) ] 

 Returns conversation's tags for collective sorted by popularity 

   Show arguments (1)    expensesTags  [ [TagStat](/../types/TagStat) ] 

 Returns expense tags for collective sorted by popularity 

   Show arguments (1)    supportedExpenseTypes  [ [ExpenseType](/../types/ExpenseType) !]!  Non-null 

 The list of expense types supported by this account 

   transferwise   [TransferWise](/../types/TransferWise)  

   payoutMethods  [ [PayoutMethod](/../types/PayoutMethod) ] 

 The list of payout methods that this account can use to get paid 

   Show arguments (1)    paymentMethods  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods that this account can use to pay for Orders 

   Show arguments (3)    paymentMethodsWithPendingConfirmation  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods for this account that are pending a client confirmation (3D Secure / SCA) 

   connectedAccounts  [ [ConnectedAccount](/../types/ConnectedAccount) ] 

 The list of connected accounts (Stripe, PayPal, etc ...) 

   oAuthApplications   [OAuthApplicationCollection](/../types/OAuthApplicationCollection)  

 The list of applications created by this account. Admin only. Scope: "applications". 

   Show arguments (2)    location   [Location](/../types/Location)  

 The address associated to this account. This field is always public for collectives and events. 

   categories  [ [String](/../types/String) ]!  Non-null 

 Categories set by Open Collective to help moderation. 

   stats   [AccountStats](/../types/AccountStats)  

   canHaveChangelogUpdates   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account can have changelog updates 

   updates   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

 Updates published by the account. To see unpublished updates, you need to be an admin and have the scope "updates". 

   Show arguments (7)    features   [CollectiveFeatures](/../types/CollectiveFeatures) !  Non-null 

 Describes the features enabled and available for this account 

   virtualCards   [VirtualCardCollection](/../types/VirtualCardCollection)  

 Virtual Cards attached to the account. Admin only. Scope: "virtualCards". 

   Show arguments (7)    virtualCardMerchants   [AccountCollection](/../types/AccountCollection)  

 Virtual Cards Merchants used by the account. Admin only. Scope: "virtualCards". 

   Show arguments (2)    childrenAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (6)    policies   [Policies](/../types/Policies) !  Non-null 

 Policies for the account. To see non-public policies you need to be admin and have the scope: "account". 

   activitySubscriptions  [ [ActivitySubscription](/../types/ActivitySubscription) ] 

 List of activities that the logged-in user is subscribed for this collective 

   Show arguments (1)    permissions   [AccountPermissions](/../types/AccountPermissions) !  Non-null 

 Logged-in user permissions on an account 

   hostApplicationRequests   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

 Host application requests 

   Show arguments (4)    feed  [ [Activity](/../types/Activity) ] 

   Show arguments (3)    duplicatedFromAccount   [Account](/../types/Account)  

 If created by duplication, the account from which this one was duplicated 

   duplicatedAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

 If this account was duplicated, the accounts that were created from it 

   Show arguments (2)    transactionGroups   [TransactionGroupCollection](/../types/TransactionGroupCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (6)    transactionReports   [TransactionReports](/../types/TransactionReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)   ## Implementations

 ## [#](#implementations)

 
 Implemented by [Host](/../types/Host) , [Bot](/../types/Bot) , [Collective](/../types/Collective) , [Event](/../types/Event) , [Individual](/../types/Individual) , [Organization](/../types/Organization) , [Vendor](/../types/Vendor) , [Fund](/../types/Fund) , [Project](/../types/Project) .  ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *account* from [Application](/../types/Application)

 * Field *account* from [MemberInvitation](/../types/MemberInvitation)

 * Field *memberAccount* from [MemberInvitation](/../types/MemberInvitation)

   Show more (94)   

---

 **Previous

 - Mutations**  [uploadFile](/mutations/uploadFile) **Next**  [AccountCacheType](/types/AccountCacheType)

---


# AccountCacheTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/AccountCacheType

# AccountCacheType  Enum

  ## Possible Values

 ## [#](#possible-values)

     CLOUDFLARE 

    GRAPHQL\_QUERIES 

    CONTRIBUTORS 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *type* of field *clearCacheForAccount*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Account](/types/Account) **Next**  [AccountCollection](/types/AccountCollection)

---


# AccountCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/AccountCollection

# AccountCollection  Object

  A collection of "Accounts" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Account](/../types/Account) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *virtualCardMerchants* from [Host](/../types/Host)

 * Field *childrenAccounts* from [Host](/../types/Host)

 * Field *duplicatedAccounts* from [Host](/../types/Host)

   Show more (40)   

---

 **Previous**   [AccountCacheType](/types/AccountCacheType) **Next**  [AccountFreezeAction](/types/AccountFreezeAction)

---


# AccountFreezeActionEnum

Source: https://graphql-docs-v2.opencollective.com/types/AccountFreezeAction

# AccountFreezeAction  Enum

  ## Possible Values

 ## [#](#possible-values)

     FREEZE 

    UNFREEZE 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *action* of field *editAccountFreezeStatus*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [AccountCollection](/types/AccountCollection) **Next**  [AccountOrdersFilter](/types/AccountOrdersFilter)

---


# AccountOrdersFilterEnum

Source: https://graphql-docs-v2.opencollective.com/types/AccountOrdersFilter

# AccountOrdersFilter  Enum

  Account orders filter (INCOMING or OUTGOING) 

 ## Possible Values

 ## [#](#possible-values)

     INCOMING 

    OUTGOING 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *filter* of field *orders*
 from type [Host](/../types/Host)

 * Argument *filter* of field *orders*
 from type [PaymentMethod](/../types/PaymentMethod)

 * Argument *filter* of field *orders*
 from type [Bot](/../types/Bot)

   Show more (11)   

---

 **Previous**   [AccountFreezeAction](/types/AccountFreezeAction) **Next**  [AccountPermissions](/types/AccountPermissions)

---


# AccountPermissionsObject

Source: https://graphql-docs-v2.opencollective.com/types/AccountPermissions

# AccountPermissions  Object

  Fields for the user permissions on an account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   addFunds   [Permission](/../types/Permission) !  Non-null 

 Whether the current user can add funds to this account 

   contact   [Permission](/../types/Permission) !  Non-null 

 Whether the current user can contact this account 

   canDownloadPaymentReceipts   [Permission](/../types/Permission) !  Non-null 

 Whether the current user can download this account's payment receipts 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *permissions* from [Host](/../types/Host)

 * Field *permissions* from [Bot](/../types/Bot)

 * Field *permissions* from [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [AccountOrdersFilter](/types/AccountOrdersFilter) **Next**  [AccountReferenceInput](/types/AccountReferenceInput)

---


# AccountReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/AccountReferenceInput

# AccountReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the account (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    slug   [String](/../types/String)  

 The slug identifying the account (ie: babel for <https://opencollective.com/babel>) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *host* of field *unhostedAt*
 from type [Host](/../types/Host)

 * Argument *memberAccount* of field *memberInvitations*
 from type [Host](/../types/Host)

 * Argument *account* of field *memberInvitations*
 from type [Host](/../types/Host)

   Show more (262)   

---

 **Previous**   [AccountPermissions](/types/AccountPermissions) **Next**  [AccountSettingsKey](/types/AccountSettingsKey)

---


# AccountSettingsKeyScalar

Source: https://graphql-docs-v2.opencollective.com/types/AccountSettingsKey

# AccountSettingsKey  Scalar

  Values that can be edited in Account's settings 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *key* of field *editAccountSetting*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [AccountReferenceInput](/types/AccountReferenceInput) **Next**  [AccountStats](/types/AccountStats)

---


# AccountStatsObject

Source: https://graphql-docs-v2.opencollective.com/types/AccountStats

# AccountStats  Object

  Stats for the Account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

   balanceWithBlockedFunds   [Amount](/../types/Amount) !   Deprecated 2022-12-13: Use balance + withBlockedFunds instead  Non-null 

 Amount of money in cents in the currency of the collective currently available to spend 

   balance   [Amount](/../types/Amount) !  Non-null 

 Amount of money in cents in the currency of the collective 

   Show arguments (4)    consolidatedBalance   [Amount](/../types/Amount) !   Deprecated 2022-09-02: Use balance + includeChildren instead  Non-null 

 The consolidated amount of all the events and projects combined. 

   monthlySpending   [Amount](/../types/Amount) !  Non-null 

 Average amount spent per month based on the last 90 days 

   totalAmountSpent   [Amount](/../types/Amount) !  Non-null 

 Total amount spent 

   Show arguments (8)    totalAmountReceived   [Amount](/../types/Amount) !  Non-null 

 Total amount received 

   Show arguments (7)    amountPledgedTimeSeries   [TimeSeriesAmount](/../types/TimeSeriesAmount) !  Non-null 

 Amount pledged time series 

   Show arguments (4)    totalAmountReceivedTimeSeries   [TimeSeriesAmount](/../types/TimeSeriesAmount) !  Non-null 

 Total amount received time series 

   Show arguments (8)    balanceTimeSeries   [TimeSeriesAmount](/../types/TimeSeriesAmount) !  Non-null 

 Balance time series 

   Show arguments (8)    totalPaidExpenses   [Amount](/../types/Amount) !  Non-null 

 Total of paid expenses to the account, filter per expense type 

   Show arguments (4)    yearlyBudget   [Amount](/../types/Amount) !  Non-null 

   yearlyBudgetManaged   [Amount](/../types/Amount) !   Deprecated 2023-03-01: This field will be removed soon, please use totalMoneyManaged  Non-null 

   totalNetAmountReceived   [Amount](/../types/Amount) !   Deprecated 2022-12-13: Use totalAmountReceived + net=true instead  Non-null 

 Total net amount received 

   Show arguments (5)    totalNetAmountReceivedTimeSeries   [TimeSeriesAmount](/../types/TimeSeriesAmount) !   Deprecated 2022-12-13: Use totalAmountReceivedTimeSeries + net=true instead  Non-null 

 Total net amount received time series 

   Show arguments (7)    activeRecurringContributions   [JSON](/../types/JSON)    Deprecated 2022-10-21: Use activeRecurringContributionsV2 while we migrate to better semantics. 

   activeRecurringContributionsV2   [Amount](/../types/Amount)    Deprecated 2024-03-04: Use activeRecurringContributionsBreakdown while we migrate to better semantics. 

   Show arguments (1)    activeRecurringContributionsBreakdown  [ [AmountStats](/../types/AmountStats) !]!  Non-null 

 Returns some statistics about active recurring contributions, broken down by frequency 

   Show arguments (2)    expensesTags  [ [AmountStats](/../types/AmountStats) ] 

 Returns expense tags for collective sorted by popularity 

   Show arguments (5)    expensesTagsTimeSeries   [TimeSeriesAmount](/../types/TimeSeriesAmount) !  Non-null 

 History of the expense tags used by this collective. 

   Show arguments (4)    contributionsCount   [Int](/../types/Int) !  Non-null 

   Show arguments (3)    contributorsCount   [Int](/../types/Int) !  Non-null 

   Show arguments (3)    contributionsAmount  [ [AmountStats](/../types/AmountStats) ] 

 Return amount stats for contributions (default, and only for now: one-time vs recurring) 

   Show arguments (4)    contributionsAmountTimeSeries   [TimeSeriesAmount](/../types/TimeSeriesAmount) !  Non-null 

 Return amount time series for contributions (default, and only for now: one-time vs recurring) 

   Show arguments (5)    ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *stats* from [Host](/../types/Host)

 * Field *stats* from [Bot](/../types/Bot)

 * Field *stats* from [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [AccountSettingsKey](/types/AccountSettingsKey) **Next**  [AccountType](/types/AccountType)

---


# AccountTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/AccountType

# AccountType  Enum

  All account types 

 ## Possible Values

 ## [#](#possible-values)

     BOT 

    COLLECTIVE 

    EVENT 

    FUND 

    INDIVIDUAL 

    ORGANIZATION 

    PROJECT 

    VENDOR 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *type* from [Host](/../types/Host)

 * Argument *accountType* of field *members*
 from type [Host](/../types/Host)

 * Argument *accountType* of field *memberOf*
 from type [Host](/../types/Host)

   Show more (48)   

---

 **Previous**   [AccountStats](/types/AccountStats) **Next**  [AccountUpdateInput](/types/AccountUpdateInput)

---


# AccountUpdateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/AccountUpdateInput

# AccountUpdateInput  Input Object

  ## Fields

 ## [#](#fields)

     currency   [Currency](/../types/Currency)  

    id   [String](/../types/String) !  Non-null

 The public id identifying the account (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *account* of field *editAccount*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [AccountType](/types/AccountType) **Next**  [AccountWithContributions](/types/AccountWithContributions)

---


# AccountWithContributionsInterface

Source: https://graphql-docs-v2.opencollective.com/types/AccountWithContributions

# AccountWithContributions  Interface

  An account that can receive financial contributions 

 ## Fields

 ## [#](#fields)

     totalFinancialContributors   [Int](/../types/Int) !  Non-null 

 Number of unique financial contributors. 

   Show arguments (1)    tiers   [TierCollection](/../types/TierCollection) !  Non-null 

   Show arguments (2)    contributors   [ContributorCollection](/../types/ContributorCollection) !  Non-null 

 All the persons and entities that contribute to this account 

   Show arguments (3)    activeContributors   [AccountCollection](/../types/AccountCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (5)    platformFeePercent   [Float](/../types/Float) !  Non-null 

 How much platform fees are charged for this account 

   platformContributionAvailable   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if a custom contribution to Open Collective can be submitted for contributions made to this account 

   contributionPolicy   [String](/../types/String)  

   canStartResumeContributionsProcess   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user can start the process to resume contributions for account 

   hasResumeContributionsProcessStarted   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the account has started the process to resume contributions 

  ## Implementations

 ## [#](#implementations)

 
 Implemented by [Host](/../types/Host) , [Collective](/../types/Collective) , [Event](/../types/Event) , [Organization](/../types/Organization) , [Vendor](/../types/Vendor) , [Fund](/../types/Fund) , [Project](/../types/Project) .  

---

 **Previous**   [AccountUpdateInput](/types/AccountUpdateInput) **Next**  [AccountWithHost](/types/AccountWithHost)

---


# AccountWithHostInterface

Source: https://graphql-docs-v2.opencollective.com/types/AccountWithHost

# AccountWithHost  Interface

  An account that can be hosted by a Host 

 ## Fields

 ## [#](#fields)

     host   [Host](/../types/Host)  

 Returns the Fiscal Host 

   hostFeesStructure   [HostFeeStructure](/../types/HostFeeStructure)  

 Describe how the host charges the collective 

   hostFeePercent   [Float](/../types/Float)  

 Fees percentage that the host takes for this collective 

   Show arguments (2)    hostApplication   [HostApplication](/../types/HostApplication)  

 Returns the Fiscal Host application 

   platformFeePercent   [Float](/../types/Float)  

 Fees percentage that the platform takes for this collective 

   approvedAt   [DateTime](/../types/DateTime)  

 Date of approval by the Fiscal Host. 

   unfrozenAt   [DateTime](/../types/DateTime)  

 Date when the collective was last unfrozen by current Fiscal Host 

   isApproved   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether it's approved by the Fiscal Host 

   isActive   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether it's active: can accept financial contributions and pay expenses. 

   hostAgreements   [AgreementCollection](/../types/AgreementCollection)  

 Returns agreements this account has with its host, or null if not enough permissions. 

   Show arguments (2)    summary   [HostedAccountSummary](/../types/HostedAccountSummary)  

   Show arguments (2)   ## Implementations

 ## [#](#implementations)

 
 Implemented by [Collective](/../types/Collective) , [Event](/../types/Event) , [Fund](/../types/Fund) , [Project](/../types/Project) .  

---

 **Previous**   [AccountWithContributions](/types/AccountWithContributions) **Next**  [AccountWithParent](/types/AccountWithParent)

---


# AccountWithParentInterface

Source: https://graphql-docs-v2.opencollective.com/types/AccountWithParent

# AccountWithParent  Interface

  An account that has a parent account 

 ## Fields

 ## [#](#fields)

     parent   [Account](/../types/Account)  

 The Account parenting this account 

  ## Implementations

 ## [#](#implementations)

 
 Implemented by [Event](/../types/Event) , [Project](/../types/Project) .  

---

 **Previous**   [AccountWithHost](/types/AccountWithHost) **Next**  [AccountingCategory](/types/AccountingCategory)

---


# AccountingCategoryObject

Source: https://graphql-docs-v2.opencollective.com/types/AccountingCategory

# AccountingCategory  Object

  Fields for an accounting category 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   code   [String](/../types/String) !  Non-null 

 The code of the accounting category 

   name   [String](/../types/String) !  Non-null 

 The technical name of the accounting category 

   friendlyName   [String](/../types/String)  

 A friendly name for non-accountants (i.e. expense submitters and collective admins) 

   hostOnly   [Boolean](/../types/Boolean) !  Non-null 

 Whether this category is only meant for the host admins 

   instructions   [String](/../types/String)  

 Instructions for the expense submitters 

   account   [Host](/../types/Host) !  Non-null 

 The account this category belongs to 

   expensesTypes  [ [ExpenseType](/../types/ExpenseType) ] 

 If meant for expenses, the types of expenses this category applies to 

   kind   [AccountingCategoryKind](/../types/AccountingCategoryKind)  

 The kind of transactions this category applies to 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

 The time of creation of this accounting category 

   appliesTo   [AccountingCategoryAppliesTo](/../types/AccountingCategoryAppliesTo)  

 If the category is applicable to the Host or Hosted Collectives 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *accountingCategory* from [Order](/../types/Order)

 * Field *accountingCategory* from [Expense](/../types/Expense)

 * Field *nodes* from [AccountingCategoryCollection](/../types/AccountingCategoryCollection)

   Show more (5)   

---

 **Previous**   [AccountWithParent](/types/AccountWithParent) **Next**  [AccountingCategoryAppliesTo](/types/AccountingCategoryAppliesTo)

---


# AccountingCategoryAppliesToEnum

Source: https://graphql-docs-v2.opencollective.com/types/AccountingCategoryAppliesTo

# AccountingCategoryAppliesTo  Enum

  ## Possible Values

 ## [#](#possible-values)

     HOST 

    HOSTED\_COLLECTIVES 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *appliesTo* from [AccountingCategory](/../types/AccountingCategory)

 

---

 **Previous**   [AccountingCategory](/types/AccountingCategory) **Next**  [AccountingCategoryCollection](/types/AccountingCategoryCollection)

---


# AccountingCategoryCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/AccountingCategoryCollection

# AccountingCategoryCollection  Object

  A collection of "Accounting Categories" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [AccountingCategory](/../types/AccountingCategory) !]!  Non-null 

 The Accounting Categories 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *accountingCategories* from [Host](/../types/Host)

 

---

 **Previous**   [AccountingCategoryAppliesTo](/types/AccountingCategoryAppliesTo) **Next**  [AccountingCategoryInput](/types/AccountingCategoryInput)

---


# AccountingCategoryInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/AccountingCategoryInput

# AccountingCategoryInput  Input Object

  Input for creating or updating an account category 

 ## Fields

 ## [#](#fields)

     appliesTo   [AccountingCategoryAppliesTo](/../types/AccountingCategoryAppliesTo)  

 If the category is applicable to the Host or Hosted Collectives, or both if null 

 

    code   [NonEmptyString](/../types/NonEmptyString)  

 The code of the accounting category 

 

    expensesTypes  [ [ExpenseType](/../types/ExpenseType) ] 

 If meant for expenses, the types of expenses this category applies to 

 

    friendlyName   [String](/../types/String)  

 A friendly name for non-accountants (i.e. expense submitters and collective admins) 

 

    hostOnly   [Boolean](/../types/Boolean) !  Non-null

 Whether this category is only meant for the host admins 

 

    id   [NonEmptyString](/../types/NonEmptyString)  

 The ID of the accounting category to edit 

 

    instructions   [String](/../types/String)  

    kind   [AccountingCategoryKind](/../types/AccountingCategoryKind) !  Non-null

 Default: "EXPENSE"    name   [NonEmptyString](/../types/NonEmptyString)  

 The technical name of the accounting category 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *categories* of field *editAccountingCategories*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [AccountingCategoryCollection](/types/AccountingCategoryCollection) **Next**  [AccountingCategoryKind](/types/AccountingCategoryKind)

---


# AccountingCategoryKindEnum

Source: https://graphql-docs-v2.opencollective.com/types/AccountingCategoryKind

# AccountingCategoryKind  Enum

  ## Possible Values

 ## [#](#possible-values)

     ADDED\_FUNDS 

    CONTRIBUTION 

    EXPENSE 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *kind* from [AccountingCategory](/../types/AccountingCategory)

 * Argument *kind* of field *accountingCategories*
 from type [Host](/../types/Host)

 

---

 **Previous**   [AccountingCategoryInput](/types/AccountingCategoryInput) **Next**  [AccountingCategoryReferenceInput](/types/AccountingCategoryReferenceInput)

---


# AccountingCategoryReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/AccountingCategoryReferenceInput

# AccountingCategoryReferenceInput  Input Object

  Reference to an accounting category 

 ## Fields

 ## [#](#fields)

     id   [NonEmptyString](/../types/NonEmptyString) !  Non-null

 The ID of the accounting category 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *accountingCategory* of field *addFunds*
 from type [Mutation](/../types/Mutation)

 * Argument *accountingCategory* of field *editAddedFunds*
 from type [Mutation](/../types/Mutation)

 * Argument *accountingCategory* of field *updateOrderAccountingCategory*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [AccountingCategoryKind](/types/AccountingCategoryKind) **Next**  [Activity](/types/Activity)

---


# ActivityObject

Source: https://graphql-docs-v2.opencollective.com/types/Activity

# Activity  Object

  An activity describing something that happened on the platform 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for this activity 

   type   [ActivityType](/../types/ActivityType) !  Non-null 

 The type of the activity 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

 The date on which the ConnectedAccount was created 

   fromAccount   [Account](/../types/Account)  

 The account that authored by this activity, if any 

   account   [Account](/../types/Account)  

 The account targeted by this activity, if any 

   host   [Host](/../types/Host)  

 The host under which this activity happened, if any 

   individual   [Individual](/../types/Individual)  

 The person who triggered the action, if any 

   expense   [Expense](/../types/Expense)  

 The expense related to this activity, if any 

   order   [Order](/../types/Order)  

 The order related to this activity, if any 

   update   [Update](/../types/Update)  

 The update related to this activity, if any 

   conversation   [Conversation](/../types/Conversation)  

 The conversation related to this activity, if any 

   transaction   [Transaction](/../types/Transaction)  

 The transaction related to this activity, if any 

   data   [JSON](/../types/JSON) !  Non-null 

 Data attached to this activity (if any) 

   isSystem   [Boolean](/../types/Boolean) !  Non-null 

 Specifies whether this is a system generated activity 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *activities* from [Expense](/../types/Expense)

 * Field *feed* from [Host](/../types/Host)

 * Field *nodes* from [ActivityCollection](/../types/ActivityCollection)

   Show more (11)   

---

 **Previous**   [AccountingCategoryReferenceInput](/types/AccountingCategoryReferenceInput) **Next**  [ActivityAndClassesType](/types/ActivityAndClassesType)

---


# ActivityAndClassesTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/ActivityAndClassesType

# ActivityAndClassesType  Enum

  ## Possible Values

 ## [#](#possible-values)

     ACTIVITY\_ALL 

    ACCOUNTING\_CATEGORIES\_EDITED 

    CONNECTED\_ACCOUNT\_CREATED 

    CONNECTED\_ACCOUNT\_ERROR 

    COLLECTIVE\_CREATED\_GITHUB 

    COLLECTIVE\_APPLY 

    COLLECTIVE\_APPROVED 

    COLLECTIVE\_REJECTED 

    COLLECTIVE\_CREATED 

    COLLECTIVE\_EDITED 

    COLLECTIVE\_DELETED 

    COLLECTIVE\_UNHOSTED 

    ORGANIZATION\_COLLECTIVE\_CREATED 

    COLLECTIVE\_FROZEN 

    COLLECTIVE\_UNFROZEN 

    COLLECTIVE\_CONVERSATION\_CREATED 

    UPDATE\_COMMENT\_CREATED 

    EXPENSE\_COMMENT\_CREATED 

    CONVERSATION\_COMMENT\_CREATED 

    ORDER\_COMMENT\_CREATED 

    COLLECTIVE\_EXPENSE\_CREATED 

    COLLECTIVE\_EXPENSE\_DELETED 

    COLLECTIVE\_EXPENSE\_UPDATED 

    COLLECTIVE\_EXPENSE\_REJECTED 

    COLLECTIVE\_EXPENSE\_APPROVED 

    COLLECTIVE\_EXPENSE\_RE\_APPROVAL\_REQUESTED 

    COLLECTIVE\_EXPENSE\_UNAPPROVED 

    COLLECTIVE\_EXPENSE\_MOVED 

    COLLECTIVE\_EXPENSE\_PAID 

    COLLECTIVE\_EXPENSE\_MARKED\_AS\_UNPAID 

    COLLECTIVE\_EXPENSE\_MARKED\_AS\_SPAM 

    COLLECTIVE\_EXPENSE\_MARKED\_AS\_INCOMPLETE 

    COLLECTIVE\_EXPENSE\_PROCESSING 

    COLLECTIVE\_EXPENSE\_PUT\_ON\_HOLD 

    COLLECTIVE\_EXPENSE\_RELEASED\_FROM\_HOLD 

    COLLECTIVE\_EXPENSE\_SCHEDULED\_FOR\_PAYMENT 

    COLLECTIVE\_EXPENSE\_UNSCHEDULED\_FOR\_PAYMENT 

    COLLECTIVE\_EXPENSE\_ERROR 

    COLLECTIVE\_EXPENSE\_INVITE\_DRAFTED 

    COLLECTIVE\_EXPENSE\_INVITE\_DECLINED 

    COLLECTIVE\_EXPENSE\_RECURRING\_DRAFTED 

    COLLECTIVE\_EXPENSE\_MISSING\_RECEIPT 

    TAXFORM\_REQUEST 

    TAXFORM\_RECEIVED 

    TAXFORM\_INVALIDATED 

    COLLECTIVE\_VIRTUAL\_CARD\_ADDED 

    COLLECTIVE\_VIRTUAL\_CARD\_MISSING\_RECEIPTS 

    COLLECTIVE\_VIRTUAL\_CARD\_RESUMED 

    COLLECTIVE\_VIRTUAL\_CARD\_SUSPENDED 

    COLLECTIVE\_VIRTUAL\_CARD\_SUSPENDED\_DUE\_TO\_INACTIVITY 

    COLLECTIVE\_VIRTUAL\_CARD\_DELETED 

    COLLECTIVE\_VIRTUAL\_CARD\_REQUEST\_APPROVED 

    COLLECTIVE\_VIRTUAL\_CARD\_REQUEST\_REJECTED 

    VIRTUAL\_CARD\_REQUESTED 

    VIRTUAL\_CARD\_CHARGE\_DECLINED 

    VIRTUAL\_CARD\_PURCHASE 

    COLLECTIVE\_MEMBER\_INVITED 

    COLLECTIVE\_MEMBER\_CREATED 

    COLLECTIVE\_CORE\_MEMBER\_ADDED 

    COLLECTIVE\_CORE\_MEMBER\_INVITED 

    COLLECTIVE\_CORE\_MEMBER\_INVITATION\_DECLINED 

    COLLECTIVE\_CORE\_MEMBER\_REMOVED 

    COLLECTIVE\_CORE\_MEMBER\_EDITED 

    COLLECTIVE\_TRANSACTION\_CREATED 

    TRANSACTIONS\_IMPORT\_CREATED 

    TRANSACTIONS\_IMPORT\_ROW\_UPDATED 

    COLLECTIVE\_UPDATE\_CREATED 

    COLLECTIVE\_UPDATE\_PUBLISHED 

    COLLECTIVE\_CONTACT 

    HOST\_APPLICATION\_CONTACT 

    HOST\_APPLICATION\_COMMENT\_CREATED 

    CONTRIBUTION\_REJECTED 

    SUBSCRIPTION\_ACTIVATED 

    SUBSCRIPTION\_CANCELED 

    SUBSCRIPTION\_PAUSED 

    SUBSCRIPTION\_RESUMED 

    SUBSCRIPTION\_READY\_TO\_BE\_RESUMED 

    TICKET\_CONFIRMED 

    ORDER\_CANCELED\_ARCHIVED\_COLLECTIVE 

    ORDER\_PENDING 

    ORDER\_PENDING\_CONTRIBUTION\_NEW 

    ORDER\_PENDING\_CONTRIBUTION\_REMINDER 

    ORDER\_PROCESSING 

    ORDER\_PAYMENT\_FAILED 

    ORDER\_REVIEW\_OPENED 

    ORDER\_REVIEW\_CLOSED 

    ORDER\_DISPUTE\_CREATED 

    ORDER\_DISPUTE\_CLOSED 

    ORDER\_THANKYOU 

    ORDER\_UPDATED 

    ADDED\_FUNDS\_EDITED 

    VENDOR\_CREATED 

    VENDOR\_EDITED 

    VENDOR\_DELETED 

    ORDER\_PENDING\_CREATED 

    ORDER\_PENDING\_FOLLOWUP 

    ORDER\_PENDING\_RECEIVED 

    ORDER\_PENDING\_EXPIRED 

    ORDERS\_SUSPICIOUS 

    PAYMENT\_FAILED 

    PAYMENT\_CREDITCARD\_CONFIRMATION 

    PAYMENT\_CREDITCARD\_EXPIRING 

    USER\_CREATED 

    USER\_NEW\_TOKEN 

    USER\_SIGNIN 

    USER\_RESET\_PASSWORD 

    OAUTH\_APPLICATION\_AUTHORIZED 

    TWO\_FACTOR\_METHOD\_ADDED 

    TWO\_FACTOR\_METHOD\_DELETED 

    TWO\_FACTOR\_CODE\_REQUESTED 

    USER\_CHANGE\_EMAIL 

    USER\_PAYMENT\_METHOD\_CREATED 

    USER\_PASSWORD\_SET 

    USER\_CARD\_CLAIMED 

    USER\_CARD\_INVITED 

    WEBHOOK\_STRIPE\_RECEIVED 

    WEBHOOK\_PAYPAL\_RECEIVED 

    COLLECTIVE\_MONTHLY\_REPORT 

    ACTIVATED\_COLLECTIVE\_AS\_HOST 

    ACTIVATED\_COLLECTIVE\_AS\_INDEPENDENT 

    DEACTIVATED\_COLLECTIVE\_AS\_HOST 

    AGREEMENT\_CREATED 

    AGREEMENT\_EDITED 

    AGREEMENT\_DELETED 

    ADDED\_FUND\_TO\_ORG 

    COLLECTIVE\_TRANSACTION\_PAID 

    COLLECTIVE\_USER\_ADDED 

    COLLECTIVE\_VIRTUAL\_CARD\_ASSIGNED 

    COLLECTIVE\_VIRTUAL\_CARD\_CREATED 

    SUBSCRIPTION\_CONFIRMED 

    COLLECTIVE\_COMMENT\_CREATED 

    ORDER\_PENDING\_CRYPTO 

    BACKYOURSTACK\_DISPATCH\_CONFIRMED 

    COLLECTIVE 

    EXPENSES 

    CONTRIBUTIONS 

    ACTIVITIES\_UPDATES 

    VIRTUAL\_CARDS 

    FUND\_EVENTS 

    REPORTS 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *type* of field *activities*
 from type [Query](/../types/Query)

 * Argument *type* of field *setEmailNotification*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Activity](/types/Activity) **Next**  [ActivityChannel](/types/ActivityChannel)

---


# ActivityChannelEnum

Source: https://graphql-docs-v2.opencollective.com/types/ActivityChannel

# ActivityChannel  Enum

  All supported Activity channels we can broadcast to 

 ## Possible Values

 ## [#](#possible-values)

     slack 

    webhook 

    email 

    twitter 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *channel* of field *activitySubscriptions*
 from type [Host](/../types/Host)

 * Field *channel* from [ActivitySubscription](/../types/ActivitySubscription)

 * Argument *channel* of field *activitySubscriptions*
 from type [Bot](/../types/Bot)

   Show more (10)   

---

 **Previous**   [ActivityAndClassesType](/types/ActivityAndClassesType) **Next**  [ActivityClassType](/types/ActivityClassType)

---


# ActivityClassTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/ActivityClassType

# ActivityClassType  Enum

  ## Possible Values

 ## [#](#possible-values)

     COLLECTIVE 

    EXPENSES 

    CONTRIBUTIONS 

    ACTIVITIES\_UPDATES 

    VIRTUAL\_CARDS 

    FUND\_EVENTS 

    REPORTS 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *classes* of field *feed*
 from type [Host](/../types/Host)

 * Argument *classes* of field *feed*
 from type [Bot](/../types/Bot)

 * Argument *classes* of field *feed*
 from type [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [ActivityChannel](/types/ActivityChannel) **Next**  [ActivityCollection](/types/ActivityCollection)

---


# ActivityCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/ActivityCollection

# ActivityCollection  Object

  A collection of "Activities" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Activity](/../types/Activity) !] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *activities* from [Order](/../types/Order)

 * Field *activities* from [Query](/../types/Query)

 

---

 **Previous**   [ActivityClassType](/types/ActivityClassType) **Next**  [ActivitySubscription](/types/ActivitySubscription)

---


# ActivitySubscriptionObject

Source: https://graphql-docs-v2.opencollective.com/types/ActivitySubscription

# ActivitySubscription  Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for this notification setting 

   channel   [ActivityChannel](/../types/ActivityChannel) !  Non-null 

 The channel this setting is notifying through 

   type   [String](/../types/String) !  Non-null 

 The type of Activity this setting is notifying about 

   active   [Boolean](/../types/Boolean) !  Non-null 

 Wheter this notification setting is active or not 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

   webhookUrl   [String](/../types/String)  

 If channel supports, this is the webhook URL we submit the notification to 

   account   [Account](/../types/Account)  

 The account which this notification setting is applied to 

   individual   [Individual](/../types/Individual) !  Non-null 

 The user who defined the setting 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *activitySubscriptions* from [Host](/../types/Host)

 * Field *activitySubscriptions* from [Bot](/../types/Bot)

 * Field *activitySubscriptions* from [Collective](/../types/Collective)

   Show more (10)   

---

 **Previous**   [ActivityCollection](/types/ActivityCollection) **Next**  [ActivityType](/types/ActivityType)

---


# ActivityTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/ActivityType

# ActivityType  Enum

  ## Possible Values

 ## [#](#possible-values)

     ACTIVITY\_ALL 

    ACCOUNTING\_CATEGORIES\_EDITED 

    CONNECTED\_ACCOUNT\_CREATED 

    CONNECTED\_ACCOUNT\_ERROR 

    COLLECTIVE\_CREATED\_GITHUB 

    COLLECTIVE\_APPLY 

    COLLECTIVE\_APPROVED 

    COLLECTIVE\_REJECTED 

    COLLECTIVE\_CREATED 

    COLLECTIVE\_EDITED 

    COLLECTIVE\_DELETED 

    COLLECTIVE\_UNHOSTED 

    ORGANIZATION\_COLLECTIVE\_CREATED 

    COLLECTIVE\_FROZEN 

    COLLECTIVE\_UNFROZEN 

    COLLECTIVE\_CONVERSATION\_CREATED 

    UPDATE\_COMMENT\_CREATED 

    EXPENSE\_COMMENT\_CREATED 

    CONVERSATION\_COMMENT\_CREATED 

    ORDER\_COMMENT\_CREATED 

    COLLECTIVE\_EXPENSE\_CREATED 

    COLLECTIVE\_EXPENSE\_DELETED 

    COLLECTIVE\_EXPENSE\_UPDATED 

    COLLECTIVE\_EXPENSE\_REJECTED 

    COLLECTIVE\_EXPENSE\_APPROVED 

    COLLECTIVE\_EXPENSE\_RE\_APPROVAL\_REQUESTED 

    COLLECTIVE\_EXPENSE\_UNAPPROVED 

    COLLECTIVE\_EXPENSE\_MOVED 

    COLLECTIVE\_EXPENSE\_PAID 

    COLLECTIVE\_EXPENSE\_MARKED\_AS\_UNPAID 

    COLLECTIVE\_EXPENSE\_MARKED\_AS\_SPAM 

    COLLECTIVE\_EXPENSE\_MARKED\_AS\_INCOMPLETE 

    COLLECTIVE\_EXPENSE\_PROCESSING 

    COLLECTIVE\_EXPENSE\_PUT\_ON\_HOLD 

    COLLECTIVE\_EXPENSE\_RELEASED\_FROM\_HOLD 

    COLLECTIVE\_EXPENSE\_SCHEDULED\_FOR\_PAYMENT 

    COLLECTIVE\_EXPENSE\_UNSCHEDULED\_FOR\_PAYMENT 

    COLLECTIVE\_EXPENSE\_ERROR 

    COLLECTIVE\_EXPENSE\_INVITE\_DRAFTED 

    COLLECTIVE\_EXPENSE\_INVITE\_DECLINED 

    COLLECTIVE\_EXPENSE\_RECURRING\_DRAFTED 

    COLLECTIVE\_EXPENSE\_MISSING\_RECEIPT 

    TAXFORM\_REQUEST 

    TAXFORM\_RECEIVED 

    TAXFORM\_INVALIDATED 

    COLLECTIVE\_VIRTUAL\_CARD\_ADDED 

    COLLECTIVE\_VIRTUAL\_CARD\_MISSING\_RECEIPTS 

    COLLECTIVE\_VIRTUAL\_CARD\_RESUMED 

    COLLECTIVE\_VIRTUAL\_CARD\_SUSPENDED 

    COLLECTIVE\_VIRTUAL\_CARD\_SUSPENDED\_DUE\_TO\_INACTIVITY 

    COLLECTIVE\_VIRTUAL\_CARD\_DELETED 

    COLLECTIVE\_VIRTUAL\_CARD\_REQUEST\_APPROVED 

    COLLECTIVE\_VIRTUAL\_CARD\_REQUEST\_REJECTED 

    VIRTUAL\_CARD\_REQUESTED 

    VIRTUAL\_CARD\_CHARGE\_DECLINED 

    VIRTUAL\_CARD\_PURCHASE 

    COLLECTIVE\_MEMBER\_INVITED 

    COLLECTIVE\_MEMBER\_CREATED 

    COLLECTIVE\_CORE\_MEMBER\_ADDED 

    COLLECTIVE\_CORE\_MEMBER\_INVITED 

    COLLECTIVE\_CORE\_MEMBER\_INVITATION\_DECLINED 

    COLLECTIVE\_CORE\_MEMBER\_REMOVED 

    COLLECTIVE\_CORE\_MEMBER\_EDITED 

    COLLECTIVE\_TRANSACTION\_CREATED 

    TRANSACTIONS\_IMPORT\_CREATED 

    TRANSACTIONS\_IMPORT\_ROW\_UPDATED 

    COLLECTIVE\_UPDATE\_CREATED 

    COLLECTIVE\_UPDATE\_PUBLISHED 

    COLLECTIVE\_CONTACT 

    HOST\_APPLICATION\_CONTACT 

    HOST\_APPLICATION\_COMMENT\_CREATED 

    CONTRIBUTION\_REJECTED 

    SUBSCRIPTION\_ACTIVATED 

    SUBSCRIPTION\_CANCELED 

    SUBSCRIPTION\_PAUSED 

    SUBSCRIPTION\_RESUMED 

    SUBSCRIPTION\_READY\_TO\_BE\_RESUMED 

    TICKET\_CONFIRMED 

    ORDER\_CANCELED\_ARCHIVED\_COLLECTIVE 

    ORDER\_PENDING 

    ORDER\_PENDING\_CONTRIBUTION\_NEW 

    ORDER\_PENDING\_CONTRIBUTION\_REMINDER 

    ORDER\_PROCESSING 

    ORDER\_PAYMENT\_FAILED 

    ORDER\_REVIEW\_OPENED 

    ORDER\_REVIEW\_CLOSED 

    ORDER\_DISPUTE\_CREATED 

    ORDER\_DISPUTE\_CLOSED 

    ORDER\_THANKYOU 

    ORDER\_UPDATED 

    ADDED\_FUNDS\_EDITED 

    VENDOR\_CREATED 

    VENDOR\_EDITED 

    VENDOR\_DELETED 

    ORDER\_PENDING\_CREATED 

    ORDER\_PENDING\_FOLLOWUP 

    ORDER\_PENDING\_RECEIVED 

    ORDER\_PENDING\_EXPIRED 

    ORDERS\_SUSPICIOUS 

    PAYMENT\_FAILED 

    PAYMENT\_CREDITCARD\_CONFIRMATION 

    PAYMENT\_CREDITCARD\_EXPIRING 

    USER\_CREATED 

    USER\_NEW\_TOKEN 

    USER\_SIGNIN 

    USER\_RESET\_PASSWORD 

    OAUTH\_APPLICATION\_AUTHORIZED 

    TWO\_FACTOR\_METHOD\_ADDED 

    TWO\_FACTOR\_METHOD\_DELETED 

    TWO\_FACTOR\_CODE\_REQUESTED 

    USER\_CHANGE\_EMAIL 

    USER\_PAYMENT\_METHOD\_CREATED 

    USER\_PASSWORD\_SET 

    USER\_CARD\_CLAIMED 

    USER\_CARD\_INVITED 

    WEBHOOK\_STRIPE\_RECEIVED 

    WEBHOOK\_PAYPAL\_RECEIVED 

    COLLECTIVE\_MONTHLY\_REPORT 

    ACTIVATED\_COLLECTIVE\_AS\_HOST 

    ACTIVATED\_COLLECTIVE\_AS\_INDEPENDENT 

    DEACTIVATED\_COLLECTIVE\_AS\_HOST 

    AGREEMENT\_CREATED 

    AGREEMENT\_EDITED 

    AGREEMENT\_DELETED 

    ADDED\_FUND\_TO\_ORG 

    COLLECTIVE\_TRANSACTION\_PAID 

    COLLECTIVE\_USER\_ADDED 

    COLLECTIVE\_VIRTUAL\_CARD\_ASSIGNED 

    COLLECTIVE\_VIRTUAL\_CARD\_CREATED 

    SUBSCRIPTION\_CONFIRMED 

    COLLECTIVE\_COMMENT\_CREATED 

    ORDER\_PENDING\_CRYPTO 

    BACKYOURSTACK\_DISPATCH\_CONFIRMED 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *type* from [Activity](/../types/Activity)

 * Field *activityType* from [Webhook](/../types/Webhook)

 

---

 **Previous**   [ActivitySubscription](/types/ActivitySubscription) **Next**  [AddTwoFactorAuthTokenToIndividualResponse](/types/AddTwoFactorAuthTokenToIndividualResponse)

---


# AddTwoFactorAuthTokenToIndividualResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/AddTwoFactorAuthTokenToIndividualResponse

# AddTwoFactorAuthTokenToIndividualResponse  Object

  Response for the addTwoFactorAuthTokenToIndividual mutation 

 ## Fields

 ## [#](#fields)

     account   [Individual](/../types/Individual) !  Non-null 

 The Individual that the 2FA has been enabled for 

   recoveryCodes  [ [String](/../types/String) ] 

 The recovery codes for the Individual to write down 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *addTwoFactorAuthTokenToIndividual* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [ActivityType](/types/ActivityType) **Next**  [Agreement](/types/Agreement)

---


# AgreementObject

Source: https://graphql-docs-v2.opencollective.com/types/Agreement

# Agreement  Object

  An agreement 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

   title   [String](/../types/String) !  Non-null 

   notes   [String](/../types/String)  

 Additional notes about the agreement for the host admins 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

 The time of creation of this agreement 

   createdBy   [Account](/../types/Account)  

   account   [Account](/../types/Account) !  Non-null 

   host   [Host](/../types/Host) !  Non-null 

   expiresAt   [DateTime](/../types/DateTime)  

   attachment   [FileInfo](/../types/FileInfo)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [AgreementCollection](/../types/AgreementCollection)

 * Field *addAgreement* from [Mutation](/../types/Mutation)

 * Field *editAgreement* from [Mutation](/../types/Mutation)

   Show more (4)   

---

 **Previous**   [AddTwoFactorAuthTokenToIndividualResponse](/types/AddTwoFactorAuthTokenToIndividualResponse) **Next**  [AgreementCollection](/types/AgreementCollection)

---


# AgreementCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/AgreementCollection

# AgreementCollection  Object

  A collection of "Agreement" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Agreement](/../types/Agreement) !] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hostedAccountAgreements* from [Host](/../types/Host)

 * Field *hostAgreements* from [Collective](/../types/Collective)

 * Field *hostAgreements* from [Event](/../types/Event)

   Show more (5)   

---

 **Previous**   [Agreement](/types/Agreement) **Next**  [AgreementReferenceInput](/types/AgreementReferenceInput)

---


# AgreementReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/AgreementReferenceInput

# AgreementReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the agreement (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The internal id of the agreement (ie: 580) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *agreement* of field *editAgreement*
 from type [Mutation](/../types/Mutation)

 * Argument *agreement* of field *deleteAgreement*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [AgreementCollection](/types/AgreementCollection) **Next**  [Amount](/types/Amount)

---


# AmountObject

Source: https://graphql-docs-v2.opencollective.com/types/Amount

# Amount  Object

  A financial amount. 

 ## Fields

 ## [#](#fields)

     value   [Float](/../types/Float)  

   currency   [Currency](/../types/Currency)  

   valueInCents   [Float](/../types/Float)  

   exchangeRate   [CurrencyExchangeRate](/../types/CurrencyExchangeRate)  

 If the amount was generated from a currency conversion, this field contains details about the conversion 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *amount* from [Tier](/../types/Tier)

 * Field *goal* from [Tier](/../types/Tier)

 * Field *minimumAmount* from [Tier](/../types/Tier)

   Show more (104)   

---

 **Previous**   [AgreementReferenceInput](/types/AgreementReferenceInput) **Next**  [AmountInput](/types/AmountInput)

---


# AmountInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/AmountInput

# AmountInput  Input Object

  Input type for an amount with the value and currency 

 ## Fields

 ## [#](#fields)

     currency   [Currency](/../types/Currency)  

 The currency string 

 

    exchangeRate   [CurrencyExchangeRateInput](/../types/CurrencyExchangeRateInput)  

 If the amount was generated from a currency conversion, this field can be used to provide details about the conversion 

 

    value   [Float](/../types/Float)  

 The value in plain 

 

    valueInCents   [Int](/../types/Int)  

 The value in cents 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *spentAmountFrom* of field *hostedVirtualCards*
 from type [Host](/../types/Host)

 * Argument *spentAmountTo* of field *hostedVirtualCards*
 from type [Host](/../types/Host)

 * Argument *amount* of field *paypalPlan*
 from type [Query](/../types/Query)

   Show more (11)   

---

 **Previous**   [Amount](/types/Amount) **Next**  [AmountRangeInput](/types/AmountRangeInput)

---


# AmountRangeInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/AmountRangeInput

# AmountRangeInput  Input Object

  Input type for an amount range with the value and currency 

 ## Fields

 ## [#](#fields)

     gte   [AmountInput](/../types/AmountInput)  

 The minimum amount (inclusive) 

 

    lte   [AmountInput](/../types/AmountInput)  

 The maximum amount (inclusive) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *balance* of field *hostedAccounts*
 from type [Host](/../types/Host)

 * Argument *consolidatedBalance* of field *hostedAccounts*
 from type [Host](/../types/Host)

 * Argument *consolidatedBalance* of field *accounts*
 from type [Query](/../types/Query)

 

---

 **Previous**   [AmountInput](/types/AmountInput) **Next**  [AmountStats](/types/AmountStats)

---


# AmountStatsObject

Source: https://graphql-docs-v2.opencollective.com/types/AmountStats

# AmountStats  Object

  Statistics with amounts 

 ## Fields

 ## [#](#fields)

     label   [String](/../types/String) !  Non-null 

 Name/Label for the amount 

   amount   [Amount](/../types/Amount) !  Non-null 

 Total amount for this label 

   count   [Int](/../types/Int)  

 Number of entries for this label 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *activeRecurringContributionsBreakdown* from [AccountStats](/../types/AccountStats)

 * Field *expensesTags* from [AccountStats](/../types/AccountStats)

 * Field *contributionsAmount* from [AccountStats](/../types/AccountStats)

 

---

 **Previous**   [AmountRangeInput](/types/AmountRangeInput) **Next**  [Application](/types/Application)

---


# ApplicationObject

Source: https://graphql-docs-v2.opencollective.com/types/Application

# Application  Object

  An OAuth application. 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   legacyId   [Int](/../types/Int) !  Non-null 

   type   [ApplicationType](/../types/ApplicationType)    Deprecated 2022-06-16: This Application object will only be used for OAuth tokens. Use PersonalToken for user tokens 

   name   [String](/../types/String)  

   description   [String](/../types/String)  

   apiKey   [String](/../types/String)    Deprecated 2022-06-16: This Application object will only be used for OAuth tokens. Use PersonalToken for user tokens 

   clientId   [String](/../types/String)  

   clientSecret   [String](/../types/String)  

   redirectUri   [URL](/../types/URL)  

   account   [Account](/../types/Account) !  Non-null 

   oAuthAuthorization   [OAuthAuthorization](/../types/OAuthAuthorization)  

   preAuthorize2FA   [Boolean](/../types/Boolean) !  Non-null 

 Whether this application is allowed to directly use operations that would normally require 2FA 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *application* from [OAuthAuthorization](/../types/OAuthAuthorization)

 * Field *nodes* from [OAuthApplicationCollection](/../types/OAuthApplicationCollection)

 * Field *application* from [Query](/../types/Query)

   Show more (6)   

---

 **Previous**   [AmountStats](/types/AmountStats) **Next**  [ApplicationCreateInput](/types/ApplicationCreateInput)

---


# ApplicationCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ApplicationCreateInput

# ApplicationCreateInput  Input Object

  Input type for Application 

 ## Fields

 ## [#](#fields)

     account   [AccountReferenceInput](/../types/AccountReferenceInput)  

 The account to use as the owner of the application. Defaults to currently logged in user. 

 

    description   [String](/../types/String)  

    name   [String](/../types/String)  

    redirectUri   [URL](/../types/URL)  

    type   [ApplicationType](/../types/ApplicationType) !  Non-null

 Default: "OAUTH"   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *application* of field *createApplication*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Application](/types/Application) **Next**  [ApplicationReferenceInput](/types/ApplicationReferenceInput)

---


# ApplicationReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ApplicationReferenceInput

# ApplicationReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     clientId   [String](/../types/String)  

 The clientId for the application. 

 

    id   [String](/../types/String)  

 The public id identifying the application (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The legacy public id identifying the application (ie: 4242) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *application* of field *deleteApplication*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ApplicationCreateInput](/types/ApplicationCreateInput) **Next**  [ApplicationType](/types/ApplicationType)

---


# ApplicationTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/ApplicationType

# ApplicationType  Enum

  All application types 

 ## Possible Values

 ## [#](#possible-values)

     API\_KEY 

    OAUTH 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *type* from [Application](/../types/Application)

 

---

 **Previous**   [ApplicationReferenceInput](/types/ApplicationReferenceInput) **Next**  [ApplicationUpdateInput](/types/ApplicationUpdateInput)

---


# ApplicationUpdateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ApplicationUpdateInput

# ApplicationUpdateInput  Input Object

  Input type for Application 

 ## Fields

 ## [#](#fields)

     clientId   [String](/../types/String)  

 The clientId for the application. 

 

    description   [String](/../types/String)  

    id   [String](/../types/String)  

 The public id identifying the application (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The legacy public id identifying the application (ie: 4242) 

 

    name   [String](/../types/String)  

    redirectUri   [URL](/../types/URL)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *application* of field *updateApplication*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ApplicationType](/types/ApplicationType) **Next**  [AveragePeriod](/types/AveragePeriod)

---


# AveragePeriodEnum

Source: https://graphql-docs-v2.opencollective.com/types/AveragePeriod

# AveragePeriod  Enum

  The period over which the average is calculated 

 ## Possible Values

 ## [#](#possible-values)

     YEAR 

    MONTH 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *period* of field *expenseAverageTotal*
 from type [HostedAccountSummary](/../types/HostedAccountSummary)

 * Argument *period* of field *expenseAverageCount*
 from type [HostedAccountSummary](/../types/HostedAccountSummary)

 * Argument *period* of field *contributionAverageTotal*
 from type [HostedAccountSummary](/../types/HostedAccountSummary)

   Show more (6)   

---

 **Previous**   [ApplicationUpdateInput](/types/ApplicationUpdateInput) **Next**  [BanAccountResponse](/types/BanAccountResponse)

---


# BanAccountResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/BanAccountResponse

# BanAccountResponse  Object

  ## Fields

 ## [#](#fields)

     isAllowed   [Boolean](/../types/Boolean) !  Non-null 

 Whether the accounts can be banned 

   message   [String](/../types/String)  

 A summary of the changes 

   accounts  [ [Account](/../types/Account) !]!  Non-null 

 The accounts impacted by the mutation 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *banAccount* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [AveragePeriod](/types/AveragePeriod) **Next**  [Boolean](/types/Boolean)

---


# BooleanScalar

Source: https://graphql-docs-v2.opencollective.com/types/Boolean

# Boolean  Scalar

  The `Boolean`  scalar type represents `true`  or `false` . 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *preAuthorize2FA* from [Application](/../types/Application)

 * Field *preAuthorize2FA* from [OAuthAuthorization](/../types/OAuthAuthorization)

 * Field *useStandalonePage* from [Tier](/../types/Tier)

   Show more (599)   

---

 **Previous**   [BanAccountResponse](/types/BanAccountResponse) **Next**  [Bot](/types/Bot)

---


# BotObject

Source: https://graphql-docs-v2.opencollective.com/types/Bot

# Bot  Object

  This represents a Bot account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id identifying the account (ie: 5v08jk63-w4g9nbpz-j7qmyder-p7ozax5g) 

   legacyId   [Int](/../types/Int) !  Non-null 

 The internal database identifier of the collective (ie: 580) 

   slug   [String](/../types/String) !  Non-null 

 The slug identifying the account (ie: babel) 

   type   [AccountType](/../types/AccountType) !  Non-null 

 The type of the account (BOT/COLLECTIVE/EVENT/ORGANIZATION/INDIVIDUAL/VENDOR) 

   name   [String](/../types/String)  

 Public name 

   legalName   [String](/../types/String)  

 Private, legal name. Used for expense receipts, taxes, etc. Scope: "account". 

   description   [String](/../types/String)  

   longDescription   [String](/../types/String)  

   tags  [ [String](/../types/String) ] 

   website   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   twitterHandle   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   githubHandle   [String](/../types/String)    Deprecated 2022-06-03: Please use repositoryUrl 

   repositoryUrl   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   socialLinks  [ [SocialLink](/../types/SocialLink) !]!  Non-null 

   currency   [Currency](/../types/Currency) !  Non-null 

 The currency of the account 

   expensePolicy   [String](/../types/String)    Deprecated 2024-11-04: Please use policies.EXPENSE\_POLICIES 

   isIncognito   [Boolean](/../types/Boolean) !  Non-null 

 Defines if the contributors wants to be incognito (name not displayed) 

   imageUrl   [String](/../types/String)  

   Show arguments (2)    backgroundImageUrl   [String](/../types/String)  

   Show arguments (2)    createdAt   [DateTime](/../types/DateTime)  

 The time of creation 

   updatedAt   [DateTime](/../types/DateTime)  

 The time of last update 

   unhostedAt   [DateTime](/../types/DateTime)  

 Date of unhosting by a given Fiscal Host. 

   Show arguments (1)    isArchived   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether this account is archived 

   isFrozen   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account is frozen 

   isActive   [Boolean](/../types/Boolean)  

 Returns whether the account accepts financial contributions. 

   isHost   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether the account is setup to Host collectives. 

   isAdmin   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user is an admin of this account 

   parentAccount   [Account](/../types/Account)    Deprecated 2022-12-16: use parent on AccountWithParent instead 

   members   [MemberCollection](/../types/MemberCollection) !  Non-null 

 Get all members (admins, members, backers, followers) 

   Show arguments (7)    memberInvitations  [ [MemberInvitation](/../types/MemberInvitation) ] 

 [AUTHENTICATED] Returns the pending invitations 

   Show arguments (3)    legalDocuments  [ [LegalDocument](/../types/LegalDocument) ] 

 The legal documents associated with this account 

   Show arguments (1)    memberOf   [MemberOfCollection](/../types/MemberOfCollection) !  Non-null 

   Show arguments (13)    emails  [ [EmailAddress](/../types/EmailAddress) !] 

 Returns the emails of the account. Individuals only have one, but organizations can have multiple emails. 

   transactions   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   Show arguments (34)    orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

   Show arguments (28)    expenses   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   Show arguments (26)    settings   [JSON](/../types/JSON) !  Non-null 

   conversations   [ConversationCollection](/../types/ConversationCollection) !  Non-null 

   Show arguments (3)    conversationsTags  [ [TagStat](/../types/TagStat) ] 

 Returns conversation's tags for collective sorted by popularity 

   Show arguments (1)    expensesTags  [ [TagStat](/../types/TagStat) ] 

 Returns expense tags for collective sorted by popularity 

   Show arguments (1)    supportedExpenseTypes  [ [ExpenseType](/../types/ExpenseType) !]!  Non-null 

 The list of expense types supported by this account 

   transferwise   [TransferWise](/../types/TransferWise)  

   payoutMethods  [ [PayoutMethod](/../types/PayoutMethod) ] 

 The list of payout methods that this collective can use to get paid. In most cases, admin only and scope: "expenses". 

   Show arguments (1)    paymentMethods  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods that this collective can use to pay for Orders. Admin or Host only. Scope: "orders". 

   Show arguments (3)    paymentMethodsWithPendingConfirmation  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods for this account that are pending a client confirmation (3D Secure / SCA) 

   connectedAccounts  [ [ConnectedAccount](/../types/ConnectedAccount) ] 

 The list of connected accounts (Stripe, PayPal, etc ...). Admin only. Scope: "connectedAccounts". 

   oAuthApplications   [OAuthApplicationCollection](/../types/OAuthApplicationCollection)  

 The list of applications created by this account. Admin only. Scope: "applications". 

   Show arguments (2)    location   [Location](/../types/Location)  

 The address associated to this account. This field is always public for collectives and events. 

   categories  [ [String](/../types/String) ]!  Non-null 

 Categories set by Open Collective to help moderation. 

   stats   [AccountStats](/../types/AccountStats)  

   canHaveChangelogUpdates   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account can have changelog updates 

   updates   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

 Updates published by the account. To see unpublished updates, you need to be an admin and have the scope "updates". 

   Show arguments (7)    features   [CollectiveFeatures](/../types/CollectiveFeatures) !  Non-null 

 Describes the features enabled and available for this account 

   virtualCards   [VirtualCardCollection](/../types/VirtualCardCollection)  

 Virtual Cards attached to the account. Admin only. Scope: "virtualCards". 

   Show arguments (7)    virtualCardMerchants   [AccountCollection](/../types/AccountCollection)  

 Virtual Cards Merchants used by the account. Admin only. Scope: "virtualCards". 

   Show arguments (2)    childrenAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (6)    policies   [Policies](/../types/Policies) !  Non-null 

 Policies for the account. To see non-public policies you need to be admin and have the scope: "account". 

   activitySubscriptions  [ [ActivitySubscription](/../types/ActivitySubscription) ] 

 List of activities that the logged-in user is subscribed for this collective 

   Show arguments (1)    permissions   [AccountPermissions](/../types/AccountPermissions) !  Non-null 

 Logged-in user permissions on an account 

   hostApplicationRequests   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

 Host application requests 

   Show arguments (4)    feed  [ [Activity](/../types/Activity) ] 

   Show arguments (3)    duplicatedFromAccount   [Account](/../types/Account)  

 If created by duplication, the account from which this one was duplicated 

   duplicatedAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

 If this account was duplicated, the accounts that were created from it 

   Show arguments (2)    transactionGroups   [TransactionGroupCollection](/../types/TransactionGroupCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (6)    transactionReports   [TransactionReports](/../types/TransactionReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)    webhooks   [WebhookCollection](/../types/WebhookCollection) !  Non-null 

   Show arguments (3)   ## Interfaces

 ## [#](#interfaces)

  Also implements [Account](/../types/Account) .

 

---

 **Previous**   [Boolean](/types/Boolean) **Next**  [COLLECTIVE\_MINIMUM\_ADMINS](/types/COLLECTIVE_MINIMUM_ADMINS)

---


# COLLECTIVE_MINIMUM_ADMINSObject

Source: https://graphql-docs-v2.opencollective.com/types/COLLECTIVE_MINIMUM_ADMINS

# COLLECTIVE\_MINIMUM\_ADMINS  Object

  ## Fields

 ## [#](#fields)

     numberOfAdmins   [Int](/../types/Int)  

   applies   [PolicyApplication](/../types/PolicyApplication)  

   freeze   [Boolean](/../types/Boolean)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *COLLECTIVE\_MINIMUM\_ADMINS* from [Policies](/../types/Policies)

 

---

 **Previous**   [Bot](/types/Bot) **Next**  [CONTRIBUTOR\_INFO\_THRESHOLDS](/types/CONTRIBUTOR_INFO_THRESHOLDS)

---


# CONTRIBUTOR_INFO_THRESHOLDSObject

Source: https://graphql-docs-v2.opencollective.com/types/CONTRIBUTOR_INFO_THRESHOLDS

# CONTRIBUTOR\_INFO\_THRESHOLDS  Object

  ## Fields

 ## [#](#fields)

     legalName   [Int](/../types/Int)  

   address   [Int](/../types/Int)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *CONTRIBUTOR\_INFO\_THRESHOLDS* from [Policies](/../types/Policies)

 

---

 **Previous**   [COLLECTIVE\_MINIMUM\_ADMINS](/types/COLLECTIVE_MINIMUM_ADMINS) **Next**  [CaptchaInput](/types/CaptchaInput)

---


# CaptchaInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/CaptchaInput

# CaptchaInput  Input Object

  Captcha related information 

 ## Fields

 ## [#](#fields)

     provider   [CaptchaProvider](/../types/CaptchaProvider) !  Non-null

 Catpcha provider 

 

    token   [String](/../types/String) !  Non-null

 Captcha validation token 

 

   

---

 **Previous**   [CONTRIBUTOR\_INFO\_THRESHOLDS](/types/CONTRIBUTOR_INFO_THRESHOLDS) **Next**  [CaptchaProvider](/types/CaptchaProvider)

---


# CaptchaProviderEnum

Source: https://graphql-docs-v2.opencollective.com/types/CaptchaProvider

# CaptchaProvider  Enum

  Implemented Captcha Providers 

 ## Possible Values

 ## [#](#possible-values)

     HCAPTCHA 

    RECAPTCHA 

    TURNSTILE 

   

---

 **Previous**   [CaptchaInput](/types/CaptchaInput) **Next**  [ChronologicalOrderInput](/types/ChronologicalOrderInput)

---


# ChronologicalOrderInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ChronologicalOrderInput

# ChronologicalOrderInput  Input Object

  Input to order results chronologically 

 ## Fields

 ## [#](#fields)

     direction   [OrderDirection](/../types/OrderDirection) !  Non-null

 Ordering direction. 

 

 Default: "DESC"    field   [DateTimeField](/../types/DateTimeField) !  Non-null

 Field to chronologically order by. 

 

 Default: "CREATED\_AT"   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *orderBy* of field *comments*
 from type [Order](/../types/Order)

 * Argument *orderBy* of field *comments*
 from type [Expense](/../types/Expense)

 * Argument *orderBy* of field *legalDocuments*
 from type [Expense](/../types/Expense)

   Show more (67)   

---

 **Previous**   [CaptchaProvider](/types/CaptchaProvider) **Next**  [Collection](/types/Collection)

---


# CollectionInterface

Source: https://graphql-docs-v2.opencollective.com/types/Collection

# Collection  Interface

  Collection interface shared by all collection types 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

  ## Implementations

 ## [#](#implementations)

 
 Implemented by [MemberCollection](/../types/MemberCollection) , [OrderCollection](/../types/OrderCollection) , [TierCollection](/../types/TierCollection) , [ContributorCollection](/../types/ContributorCollection) , [AccountCollection](/../types/AccountCollection) , [MemberOfCollection](/../types/MemberOfCollection) , [TransactionCollection](/../types/TransactionCollection) , [ExpenseCollection](/../types/ExpenseCollection) , [ConversationCollection](/../types/ConversationCollection) , [CommentCollection](/../types/CommentCollection) , [OAuthApplicationCollection](/../types/OAuthApplicationCollection) , [UpdateCollection](/../types/UpdateCollection) , [VirtualCardCollection](/../types/VirtualCardCollection) , [HostApplicationCollection](/../types/HostApplicationCollection) , [TransactionGroupCollection](/../types/TransactionGroupCollection) , [WebhookCollection](/../types/WebhookCollection) , [AccountingCategoryCollection](/../types/AccountingCategoryCollection) , [AgreementCollection](/../types/AgreementCollection) , [VendorCollection](/../types/VendorCollection) , [HostedAccountCollection](/../types/HostedAccountCollection) , [LegalDocumentCollection](/../types/LegalDocumentCollection) , [TransactionsImportsCollection](/../types/TransactionsImportsCollection) , [TransactionsImportRowCollection](/../types/TransactionsImportRowCollection) , [ActivityCollection](/../types/ActivityCollection) , [OAuthAuthorizationCollection](/../types/OAuthAuthorizationCollection) , [PersonalTokenCollection](/../types/PersonalTokenCollection) , [TagStatsCollection](/../types/TagStatsCollection) , [HostCollection](/../types/HostCollection) , [VirtualCardRequestCollection](/../types/VirtualCardRequestCollection) .  

---

 **Previous**   [ChronologicalOrderInput](/types/ChronologicalOrderInput) **Next**  [Collective](/types/Collective)

---


# CollectiveObject

Source: https://graphql-docs-v2.opencollective.com/types/Collective

# Collective  Object

  This represents a Collective account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id identifying the account (ie: 5v08jk63-w4g9nbpz-j7qmyder-p7ozax5g) 

   legacyId   [Int](/../types/Int) !  Non-null 

 The internal database identifier of the collective (ie: 580) 

   slug   [String](/../types/String) !  Non-null 

 The slug identifying the account (ie: babel) 

   type   [AccountType](/../types/AccountType) !  Non-null 

 The type of the account (BOT/COLLECTIVE/EVENT/ORGANIZATION/INDIVIDUAL/VENDOR) 

   name   [String](/../types/String)  

 Public name 

   legalName   [String](/../types/String)  

 Private, legal name. Used for expense receipts, taxes, etc. Scope: "account". 

   description   [String](/../types/String)  

   longDescription   [String](/../types/String)  

   tags  [ [String](/../types/String) ] 

   website   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   twitterHandle   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   githubHandle   [String](/../types/String)    Deprecated 2022-06-03: Please use repositoryUrl 

   repositoryUrl   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   socialLinks  [ [SocialLink](/../types/SocialLink) !]!  Non-null 

   currency   [Currency](/../types/Currency) !  Non-null 

 The currency of the account 

   expensePolicy   [String](/../types/String)    Deprecated 2024-11-04: Please use policies.EXPENSE\_POLICIES 

   isIncognito   [Boolean](/../types/Boolean) !  Non-null 

 Defines if the contributors wants to be incognito (name not displayed) 

   imageUrl   [String](/../types/String)  

   Show arguments (2)    backgroundImageUrl   [String](/../types/String)  

   Show arguments (2)    createdAt   [DateTime](/../types/DateTime)  

 The time of creation 

   updatedAt   [DateTime](/../types/DateTime)  

 The time of last update 

   unhostedAt   [DateTime](/../types/DateTime)  

 Date of unhosting by a given Fiscal Host. 

   Show arguments (1)    isArchived   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether this account is archived 

   isFrozen   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account is frozen 

   isActive   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether it's active: can accept financial contributions and pay expenses. 

   isHost   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether the account is setup to Host collectives. 

   isAdmin   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user is an admin of this account 

   parentAccount   [Account](/../types/Account)    Deprecated 2022-12-16: use parent on AccountWithParent instead 

   members   [MemberCollection](/../types/MemberCollection) !  Non-null 

 Get all members (admins, members, backers, followers) 

   Show arguments (7)    memberInvitations  [ [MemberInvitation](/../types/MemberInvitation) ] 

 [AUTHENTICATED] Returns the pending invitations 

   Show arguments (3)    legalDocuments  [ [LegalDocument](/../types/LegalDocument) ] 

 The legal documents associated with this account 

   Show arguments (1)    memberOf   [MemberOfCollection](/../types/MemberOfCollection) !  Non-null 

   Show arguments (13)    emails  [ [EmailAddress](/../types/EmailAddress) !] 

 Returns the emails of the account. Individuals only have one, but organizations can have multiple emails. 

   transactions   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   Show arguments (34)    orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

   Show arguments (28)    expenses   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   Show arguments (26)    settings   [JSON](/../types/JSON) !  Non-null 

   conversations   [ConversationCollection](/../types/ConversationCollection) !  Non-null 

   Show arguments (3)    conversationsTags  [ [TagStat](/../types/TagStat) ] 

 Returns conversation's tags for collective sorted by popularity 

   Show arguments (1)    expensesTags  [ [TagStat](/../types/TagStat) ] 

 Returns expense tags for collective sorted by popularity 

   Show arguments (1)    supportedExpenseTypes  [ [ExpenseType](/../types/ExpenseType) !]!  Non-null 

 The list of expense types supported by this account 

   transferwise   [TransferWise](/../types/TransferWise)  

   payoutMethods  [ [PayoutMethod](/../types/PayoutMethod) ] 

 The list of payout methods that this collective can use to get paid. In most cases, admin only and scope: "expenses". 

   Show arguments (1)    paymentMethods  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods that this collective can use to pay for Orders. Admin or Host only. Scope: "orders". 

   Show arguments (3)    paymentMethodsWithPendingConfirmation  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods for this account that are pending a client confirmation (3D Secure / SCA) 

   connectedAccounts  [ [ConnectedAccount](/../types/ConnectedAccount) ] 

 The list of connected accounts (Stripe, PayPal, etc ...). Admin only. Scope: "connectedAccounts". 

   oAuthApplications   [OAuthApplicationCollection](/../types/OAuthApplicationCollection)  

 The list of applications created by this account. Admin only. Scope: "applications". 

   Show arguments (2)    location   [Location](/../types/Location)  

 The address associated to this account. This field is always public for collectives and events. 

   categories  [ [String](/../types/String) ]!  Non-null 

 Categories set by Open Collective to help moderation. 

   stats   [AccountStats](/../types/AccountStats)  

   canHaveChangelogUpdates   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account can have changelog updates 

   updates   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

 Updates published by the account. To see unpublished updates, you need to be an admin and have the scope "updates". 

   Show arguments (7)    features   [CollectiveFeatures](/../types/CollectiveFeatures) !  Non-null 

 Describes the features enabled and available for this account 

   virtualCards   [VirtualCardCollection](/../types/VirtualCardCollection)  

 Virtual Cards attached to the account. Admin only. Scope: "virtualCards". 

   Show arguments (7)    virtualCardMerchants   [AccountCollection](/../types/AccountCollection)  

 Virtual Cards Merchants used by the account. Admin only. Scope: "virtualCards". 

   Show arguments (2)    childrenAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (6)    policies   [Policies](/../types/Policies) !  Non-null 

 Policies for the account. To see non-public policies you need to be admin and have the scope: "account". 

   activitySubscriptions  [ [ActivitySubscription](/../types/ActivitySubscription) ] 

 List of activities that the logged-in user is subscribed for this collective 

   Show arguments (1)    permissions   [AccountPermissions](/../types/AccountPermissions) !  Non-null 

 Logged-in user permissions on an account 

   hostApplicationRequests   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

 Host application requests 

   Show arguments (4)    feed  [ [Activity](/../types/Activity) ] 

   Show arguments (3)    duplicatedFromAccount   [Account](/../types/Account)  

 If created by duplication, the account from which this one was duplicated 

   duplicatedAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

 If this account was duplicated, the accounts that were created from it 

   Show arguments (2)    transactionGroups   [TransactionGroupCollection](/../types/TransactionGroupCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (6)    transactionReports   [TransactionReports](/../types/TransactionReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)    webhooks   [WebhookCollection](/../types/WebhookCollection) !  Non-null 

   Show arguments (3)    host   [Host](/../types/Host)  

 Returns the Fiscal Host 

   hostFeesStructure   [HostFeeStructure](/../types/HostFeeStructure)  

 Describe how the host charges the collective 

   hostFeePercent   [Float](/../types/Float)  

 Fees percentage that the host takes for this collective 

   Show arguments (2)    hostApplication   [HostApplication](/../types/HostApplication)  

 Returns the Fiscal Host application 

   platformFeePercent   [Float](/../types/Float) !  Non-null 

 How much platform fees are charged for this account 

   approvedAt   [DateTime](/../types/DateTime)  

 Date of approval by the Fiscal Host. 

   unfrozenAt   [DateTime](/../types/DateTime)  

 Date when the collective was last unfrozen by current Fiscal Host 

   isApproved   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether it's approved by the Fiscal Host 

   hostAgreements   [AgreementCollection](/../types/AgreementCollection)  

 Returns agreements this account has with its host, or null if not enough permissions. 

   Show arguments (2)    summary   [HostedAccountSummary](/../types/HostedAccountSummary)  

   Show arguments (2)    totalFinancialContributors   [Int](/../types/Int) !  Non-null 

 Number of unique financial contributors. 

   Show arguments (1)    tiers   [TierCollection](/../types/TierCollection) !  Non-null 

   Show arguments (2)    contributors   [ContributorCollection](/../types/ContributorCollection) !  Non-null 

 All the persons and entities that contribute to this account 

   Show arguments (3)    activeContributors   [AccountCollection](/../types/AccountCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (5)    platformContributionAvailable   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if a custom contribution to Open Collective can be submitted for contributions made to this account 

   contributionPolicy   [String](/../types/String)  

   canStartResumeContributionsProcess   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user can start the process to resume contributions for account 

   hasResumeContributionsProcessStarted   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the account has started the process to resume contributions 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Account](/../types/Account) , [AccountWithHost](/../types/AccountWithHost) , [AccountWithContributions](/../types/AccountWithContributions) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *collective* from [Query](/../types/Query)

 * Field *createCollective* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [Collection](/types/Collection) **Next**  [CollectiveCreateInput](/types/CollectiveCreateInput)

---


# CollectiveCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/CollectiveCreateInput

# CollectiveCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     backgroundImage   [Upload](/../types/Upload)  

 The profile background image, for the banner and social media sharing 

 

    description   [String](/../types/String) !  Non-null

    image   [Upload](/../types/Upload)  

 The profile avatar image 

 

    location   [LocationInput](/../types/LocationInput)  

    name   [String](/../types/String) !  Non-null

    settings   [JSON](/../types/JSON)  

    slug   [String](/../types/String) !  Non-null

    tags  [ [String](/../types/String) ] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *collective* of field *createCollective*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Collective](/types/Collective) **Next**  [CollectiveFeatureStatus](/types/CollectiveFeatureStatus)

---


# CollectiveFeatureStatusEnum

Source: https://graphql-docs-v2.opencollective.com/types/CollectiveFeatureStatus

# CollectiveFeatureStatus  Enum

  ## Possible Values

 ## [#](#possible-values)

     ACTIVE 

 The feature is enabled and is actively used 

 

    AVAILABLE 

 The feature is enabled, but there is no data for it 

 

    DISABLED 

 The feature is disabled, but can be enabled by an admin 

 

    UNSUPPORTED 

 The feature is disabled and cannot be activated for this account 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *ALL* from [CollectiveFeatures](/../types/CollectiveFeatures)

 * Field *RECEIVE\_FINANCIAL\_CONTRIBUTIONS* from [CollectiveFeatures](/../types/CollectiveFeatures)

 * Field *RECURRING\_CONTRIBUTIONS* from [CollectiveFeatures](/../types/CollectiveFeatures)

   Show more (32)   

---

 **Previous**   [CollectiveCreateInput](/types/CollectiveCreateInput) **Next**  [CollectiveFeatures](/types/CollectiveFeatures)

---


# CollectiveFeaturesObject

Source: https://graphql-docs-v2.opencollective.com/types/CollectiveFeatures

# CollectiveFeatures  Object

  Describes the features enabled and available for this account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The id of the account 

   ALL   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   RECEIVE\_FINANCIAL\_CONTRIBUTIONS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   RECURRING\_CONTRIBUTIONS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   TRANSACTIONS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   EVENTS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   PROJECTS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   USE\_EXPENSES   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   RECEIVE\_EXPENSES   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   MULTI\_CURRENCY\_EXPENSES   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   RECEIVE\_HOST\_APPLICATIONS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   COLLECTIVE\_GOALS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   TOP\_FINANCIAL\_CONTRIBUTORS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   CONVERSATIONS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   UPDATES   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   ABOUT   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   TEAM   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   ORDER   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   CONTACT\_COLLECTIVE   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   CONTACT\_FORM   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   CREATE\_COLLECTIVE   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   TRANSFERWISE   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   PAYPAL\_PAYOUTS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   PAYPAL\_DONATIONS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   HOST\_DASHBOARD   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   CONNECTED\_ACCOUNTS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   ALIPAY   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   STRIPE\_PAYMENT\_INTENT   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   USE\_PAYMENT\_METHODS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   EMIT\_GIFT\_CARDS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   EMAIL\_NOTIFICATIONS\_PANEL   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   VIRTUAL\_CARDS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   REQUEST\_VIRTUAL\_CARDS   [CollectiveFeatureStatus](/../types/CollectiveFeatureStatus)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *features* from [Host](/../types/Host)

 * Field *features* from [Bot](/../types/Bot)

 * Field *features* from [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [CollectiveFeatureStatus](/types/CollectiveFeatureStatus) **Next**  [Comment](/types/Comment)

---


# CommentObject

Source: https://graphql-docs-v2.opencollective.com/types/Comment

# Comment  Object

  This represents an Comment 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

   createdAt   [DateTime](/../types/DateTime)  

   html   [String](/../types/String)  

   fromAccount   [Account](/../types/Account)  

   account   [Account](/../types/Account)  

   type   [CommentType](/../types/CommentType) !  Non-null 

 The type of this comment 

   reactions   [JSON](/../types/JSON)  

 Returns a map of reactions counts for this comment 

   userReactions  [ [String](/../types/String) ] 

 Returns the list of reactions added to this comment by logged in user 

   conversation   [Conversation](/../types/Conversation)  

   expense   [Expense](/../types/Expense)  

   hostApplication   [HostApplication](/../types/HostApplication)  

   order   [Order](/../types/Order)  

   update   [Update](/../types/Update)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *body* from [Conversation](/../types/Conversation)

 * Field *nodes* from [CommentCollection](/../types/CommentCollection)

 * Field *editComment* from [Mutation](/../types/Mutation)

   Show more (6)   

---

 **Previous**   [CollectiveFeatures](/types/CollectiveFeatures) **Next**  [CommentCollection](/types/CommentCollection)

---


# CommentCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/CommentCollection

# CommentCollection  Object

  A collection of "Comments" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Comment](/../types/Comment) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *comments* from [Order](/../types/Order)

 * Field *comments* from [Expense](/../types/Expense)

 * Field *comments* from [Conversation](/../types/Conversation)

   Show more (6)   

---

 **Previous**   [Comment](/types/Comment) **Next**  [CommentCreateInput](/types/CommentCreateInput)

---


# CommentCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/CommentCreateInput

# CommentCreateInput  Input Object

  Input to create a comment. You can only specify one entity type: expense, conversation, update or host application 

 ## Fields

 ## [#](#fields)

     conversation   [ConversationReferenceInput](/../types/ConversationReferenceInput)  

    expense   [ExpenseReferenceInput](/../types/ExpenseReferenceInput)  

 If your comment is linked to an expense, set it here 

 

    hostApplication   [HostApplicationReferenceInput](/../types/HostApplicationReferenceInput)  

 If your comment is linked to an host application, set it here 

 

    html   [String](/../types/String)  

    order   [OrderReferenceInput](/../types/OrderReferenceInput)  

 If your comment is linked to an order, set it here 

 

    type   [CommentType](/../types/CommentType)  

 The type of the comment 

 

 Default: "COMMENT"    update   [UpdateReferenceInput](/../types/UpdateReferenceInput)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *comment* of field *createComment*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [CommentCollection](/types/CommentCollection) **Next**  [CommentReferenceInput](/types/CommentReferenceInput)

---


# CommentReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/CommentReferenceInput

# CommentReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the comment 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *comment* of field *addEmojiReaction*
 from type [Mutation](/../types/Mutation)

 * Argument *comment* of field *removeEmojiReaction*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [CommentCreateInput](/types/CommentCreateInput) **Next**  [CommentType](/types/CommentType)

---


# CommentTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/CommentType

# CommentType  Enum

  All supported comment contexts 

 ## Possible Values

 ## [#](#possible-values)

     COMMENT 

 Default regular comment 

 

    PRIVATE\_NOTE 

 Comment is visible only to host admins 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *type* from [Comment](/../types/Comment)

 

---

 **Previous**   [CommentReferenceInput](/types/CommentReferenceInput) **Next**  [CommentUpdateInput](/types/CommentUpdateInput)

---


# CommentUpdateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/CommentUpdateInput

# CommentUpdateInput  Input Object

  ## Fields

 ## [#](#fields)

     html   [String](/../types/String)  

    id   [String](/../types/String) !  Non-null

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *comment* of field *editComment*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [CommentType](/types/CommentType) **Next**  [ConfirmGuestAccountResponse](/types/ConfirmGuestAccountResponse)

---


# ConfirmGuestAccountResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/ConfirmGuestAccountResponse

# ConfirmGuestAccountResponse  Object

  Response for the confirmGuestAccount mutation 

 ## Fields

 ## [#](#fields)

     account   [Account](/../types/Account) !  Non-null 

 The validated account 

   accessToken   [String](/../types/String) !  Non-null 

 A token that can be used to sign in 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *confirmGuestAccount* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [CommentUpdateInput](/types/CommentUpdateInput) **Next**  [ConnectedAccount](/types/ConnectedAccount)

---


# ConnectedAccountObject

Source: https://graphql-docs-v2.opencollective.com/types/ConnectedAccount

# ConnectedAccount  Object

  This represents a Connected Account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for this connected account 

   legacyId   [Int](/../types/Int)    Deprecated 2020-05-01: should only be used during the transition to GraphQL API v2. 

 The internal database identifier of the Connected Account (ie: 580) 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

 The date on which the ConnectedAccount was created 

   updatedAt   [DateTime](/../types/DateTime) !  Non-null 

 The date on which the ConnectedAccount was last updated 

   settings   [JSON](/../types/JSON)  

   service   [ConnectedAccountService](/../types/ConnectedAccountService) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *connectedAccounts* from [Host](/../types/Host)

 * Field *connectedAccount* from [TransactionsImport](/../types/TransactionsImport)

 * Field *connectedAccounts* from [Bot](/../types/Bot)

   Show more (13)   

---

 **Previous**   [ConfirmGuestAccountResponse](/types/ConfirmGuestAccountResponse) **Next**  [ConnectedAccountCreateInput](/types/ConnectedAccountCreateInput)

---


# ConnectedAccountCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ConnectedAccountCreateInput

# ConnectedAccountCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     clientId   [String](/../types/String)  

 Optional Client ID for the token or secret 

 

    data   [JSON](/../types/JSON)  

 Private data related to the connected account 

 

    refreshToken   [String](/../types/String)  

 Refresh token for the connected account 

 

    service   [ConnectedAccountService](/../types/ConnectedAccountService)  

 Service which the connected account belongs to 

 

    settings   [JSON](/../types/JSON)  

 Public data related to the connected account 

 

    token   [String](/../types/String)  

 Secret token used to call service 

 

    username   [String](/../types/String)  

 Optional username for the connected account 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *connectedAccount* of field *createConnectedAccount*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ConnectedAccount](/types/ConnectedAccount) **Next**  [ConnectedAccountReferenceInput](/types/ConnectedAccountReferenceInput)

---


# ConnectedAccountReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ConnectedAccountReferenceInput

# ConnectedAccountReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the connected account (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The internal id of the account (ie: 580) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *connectedAccount* of field *deleteConnectedAccount*
 from type [Mutation](/../types/Mutation)

 * Argument *connectedAccount* of field *syncPlaidAccount*
 from type [Mutation](/../types/Mutation)

 * Argument *connectedAccount* of field *refreshPlaidAccount*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ConnectedAccountCreateInput](/types/ConnectedAccountCreateInput) **Next**  [ConnectedAccountService](/types/ConnectedAccountService)

---


# ConnectedAccountServiceEnum

Source: https://graphql-docs-v2.opencollective.com/types/ConnectedAccountService

# ConnectedAccountService  Enum

  All supported services a user can connect with 

 ## Possible Values

 ## [#](#possible-values)

     paypal 

    stripe 

    stripe\_customer 

    github 

    transferwise 

    plaid 

    twitter 

    privacy   Deprecated Not using this service anymore

    thegivingblock 

    meetup   Deprecated Not using this service anymore

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *service* from [ConnectedAccount](/../types/ConnectedAccount)

 

---

 **Previous**   [ConnectedAccountReferenceInput](/types/ConnectedAccountReferenceInput) **Next**  [ContributionFrequency](/types/ContributionFrequency)

---


# ContributionFrequencyEnum

Source: https://graphql-docs-v2.opencollective.com/types/ContributionFrequency

# ContributionFrequency  Enum

  ## Possible Values

 ## [#](#possible-values)

     MONTHLY 

    YEARLY 

    ONETIME 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *frequency* from [Order](/../types/Order)

 * Argument *frequency* of field *orders*
 from type [Host](/../types/Host)

 * Argument *frequency* of field *orders*
 from type [PaymentMethod](/../types/PaymentMethod)

   Show more (15)   

---

 **Previous**   [ConnectedAccountService](/types/ConnectedAccountService) **Next**  [ContributionStats](/types/ContributionStats)

---


# ContributionStatsObject

Source: https://graphql-docs-v2.opencollective.com/types/ContributionStats

# ContributionStats  Object

  Contribution statistics related to the given accounts 

 ## Fields

 ## [#](#fields)

     contributionsCount   [Int](/../types/Int) !  Non-null 

 The total number of contributions 

   oneTimeContributionsCount   [Int](/../types/Int) !  Non-null 

 Number of one time contributions 

   recurringContributionsCount   [Int](/../types/Int) !  Non-null 

 Number of recurring contributions 

   dailyAverageIncomeAmount   [Amount](/../types/Amount) !  Non-null 

 The daily average income 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *contributionStats* from [Host](/../types/Host)

 

---

 **Previous**   [ContributionFrequency](/types/ContributionFrequency) **Next**  [Contributor](/types/Contributor)

---


# ContributorObject

Source: https://graphql-docs-v2.opencollective.com/types/Contributor

# Contributor  Object

 

```
    
  
```
  ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 A unique identifier for this member 

   name   [String](/../types/String) !   Deprecated 2024-08-26: Use account.name instead  Non-null 

 Name of the contributor 

   roles  [ [MemberRole](/../types/MemberRole) ] 

 All the roles for a given contributor 

   isAdmin   [Boolean](/../types/Boolean) !  Non-null 

 True if the contributor is a collective admin 

   isCore   [Boolean](/../types/Boolean) !  Non-null 

 True if the contributor is a core contributor 

   isBacker   [Boolean](/../types/Boolean) !  Non-null 

 True if the contributor is a financial contributor 

   since   [DateTime](/../types/DateTime) !  Non-null 

 Member join date 

   totalAmountDonated   [Int](/../types/Int) !   Deprecated 2024-08-26: Use totalAmountContributed instead  Non-null 

 How much money the user has contributed for this (in cents, using collective currency) 

   totalAmountContributed   [Amount](/../types/Amount) !  Non-null 

 How much money the user has contributed 

   type   [String](/../types/String) !   Deprecated 2024-08-26: Use account.type instead  Non-null 

 Whether the contributor is an individual, an organization... 

   isIncognito   [Boolean](/../types/Boolean) !   Deprecated 2024-08-26: Use account.isIncognito instead  Non-null 

 Defines if the contributors wants to be incognito (name not displayed) 

   description   [String](/../types/String)  

 Description of how the member contribute. Will usually be a tier name, or "design" or "code". 

   collectiveSlug   [String](/../types/String)    Deprecated 2024-08-26: Use account.slug instead 

 If the contributor has a page on Open Collective, this is the slug to link to it. Always null for incognito contributors 

   account   [Account](/../types/Account)  

   image   [String](/../types/String)    Deprecated 2024-08-26: Use account.image instead 

 Contributor avatar or logo 

   Show arguments (2)    publicMessage   [String](/../types/String)  

 A public message from contributors to describe their contributions 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [ContributorCollection](/../types/ContributorCollection)

 

---

 **Previous**   [ContributionStats](/types/ContributionStats) **Next**  [ContributorCollection](/types/ContributorCollection)

---


# ContributorCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/ContributorCollection

# ContributorCollection  Object

  A collection of "Contributor" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Contributor](/../types/Contributor) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *contributors* from [Tier](/../types/Tier)

 * Field *contributors* from [Host](/../types/Host)

 * Field *contributors* from [Collective](/../types/Collective)

   Show more (8)   

---

 **Previous**   [Contributor](/types/Contributor) **Next**  [ContributorProfile](/types/ContributorProfile)

---


# ContributorProfileObject

Source: https://graphql-docs-v2.opencollective.com/types/ContributorProfile

# ContributorProfile  Object

  This represents a profile that can be use to create a contribution 

 ## Fields

 ## [#](#fields)

     account   [Account](/../types/Account)  

 The account that will be used to create the contribution 

   forAccount   [Account](/../types/Account)  

 The account that will receive the contribution 

   totalContributedToHost   [Amount](/../types/Amount)  

 The total amount contributed to the host by this contributor 

   Show arguments (2)    ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *contributorProfiles* from [Individual](/../types/Individual)

 

---

 **Previous**   [ContributorCollection](/types/ContributorCollection) **Next**  [Conversation](/types/Conversation)

---


# ConversationObject

Source: https://graphql-docs-v2.opencollective.com/types/Conversation

# Conversation  Object

  A conversation thread 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   slug   [String](/../types/String) !  Non-null 

   title   [String](/../types/String) !  Non-null 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

   updatedAt   [DateTime](/../types/DateTime) !  Non-null 

   tags  [ [String](/../types/String) ] 

   summary   [String](/../types/String) !  Non-null 

   account   [Account](/../types/Account)  

   fromAccount   [Account](/../types/Account)  

   body   [Comment](/../types/Comment)  

 The root comment / starter for this conversation 

   comments   [CommentCollection](/../types/CommentCollection) !  Non-null 

 List the comments for this conversation. Not backed by a loader, don't use this in lists. 

   Show arguments (2)    followers   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (2)    stats   [ConversationStats](/../types/ConversationStats)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [ConversationCollection](/../types/ConversationCollection)

 * Field *conversation* from [Comment](/../types/Comment)

 * Field *conversation* from [Activity](/../types/Activity)

   Show more (7)   

---

 **Previous**   [ContributorProfile](/types/ContributorProfile) **Next**  [ConversationCollection](/types/ConversationCollection)

---


# ConversationCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/ConversationCollection

# ConversationCollection  Object

  A collection of "Conversations" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Conversation](/../types/Conversation) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *conversations* from [Host](/../types/Host)

 * Field *conversations* from [Bot](/../types/Bot)

 * Field *conversations* from [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [Conversation](/types/Conversation) **Next**  [ConversationReferenceInput](/types/ConversationReferenceInput)

---


# ConversationReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ConversationReferenceInput

# ConversationReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the conversation 

 

    legacyId   [Int](/../types/Int)  

   

---

 **Previous**   [ConversationCollection](/types/ConversationCollection) **Next**  [ConversationStats](/types/ConversationStats)

---


# ConversationStatsObject

Source: https://graphql-docs-v2.opencollective.com/types/ConversationStats

# ConversationStats  Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   commentsCount   [Int](/../types/Int)  

 Total number of comments for this conversation 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *stats* from [Conversation](/../types/Conversation)

 

---

 **Previous**   [ConversationReferenceInput](/types/ConversationReferenceInput) **Next**  [CountryISO](/types/CountryISO)

---


# CountryISOEnum

Source: https://graphql-docs-v2.opencollective.com/types/CountryISO

# CountryISO  Enum

  Two-letters country code following ISO3166\_1 

 ## Possible Values

 ## [#](#possible-values)

     AD 

 Andorra 

 

    AE 

 The United Arab Emirates 

 

    AF 

 Afghanistan 

 

    AG 

 Antigua and Barbuda 

 

    AI 

 Anguilla 

 

    AL 

 Albania 

 

    AM 

 Armenia 

 

    AO 

 Angola 

 

    AQ 

 Antarctica 

 

    AR 

 Argentina 

 

    AS 

 American Samoa 

 

    AT 

 Austria 

 

    AU 

 Australia 

 

    AW 

 Aruba 

 

    AX 

 Åland Islands 

 

    AZ 

 Azerbaijan 

 

    BA 

 Bosnia and Herzegovina 

 

    BB 

 Barbados 

 

    BD 

 Bangladesh 

 

    BE 

 Belgium 

 

    BF 

 Burkina 

 

    BG 

 Bulgaria 

 

    BH 

 Bahrain 

 

    BI 

 Burundi 

 

    BJ 

 Benin 

 

    BL 

 Saint Barthélemy 

 

    BM 

 Bermuda 

 

    BN 

 Brunei 

 

    BO 

 Bolivia 

 

    BQ 

 Bonaire, Sint Eustatius and Saba 

 

    BR 

 Brazil 

 

    BS 

 The Bahamas 

 

    BT 

 Bhutan 

 

    BV 

 Bouvet Island 

 

    BW 

 Botswana 

 

    BY 

 Belarus 

 

    BZ 

 Belize 

 

    CA 

 Canada 

 

    CC 

 Cocos Islands 

 

    CD 

 The Democratic Republic of the Congo 

 

    CF 

 The Central African Republic 

 

    CG 

 The Congo 

 

    CH 

 Switzerland 

 

    CI 

 Côte d'Ivoire 

 

    CK 

 Cook Islands 

 

    CL 

 Chile 

 

    CM 

 Cameroon 

 

    CN 

 China 

 

    CO 

 Colombia 

 

    CR 

 Costa Rica 

 

    CU 

 Cuba 

 

    CV 

 Cape Verde 

 

    CW 

 Curaçao 

 

    CX 

 Christmas Island 

 

    CY 

 Cyprus 

 

    CZ 

 The Czech Republic 

 

    DE 

 Germany 

 

    DJ 

 Djibouti 

 

    DK 

 Denmark 

 

    DM 

 Dominica 

 

    DO 

 The Dominican Republic 

 

    DZ 

 Algeria 

 

    EC 

 Ecuador 

 

    EE 

 Estonia 

 

    EG 

 Egypt 

 

    EH 

 Western Sahara 

 

    ER 

 Eritrea 

 

    ES 

 Spain 

 

    ET 

 Ethiopia 

 

    FI 

 Finland 

 

    FJ 

 Fiji 

 

    FK 

 Falkland Islands 

 

    FM 

 Micronesia 

 

    FO 

 Faroe Islands 

 

    FR 

 France 

 

    GA 

 Gabon 

 

    GB 

 The United Kingdom 

 

    GD 

 Grenada 

 

    GE 

 Georgia 

 

    GF 

 French Guiana 

 

    GG 

 Guernsey 

 

    GH 

 Ghana 

 

    GI 

 Gibraltar 

 

    GL 

 Greenland 

 

    GM 

 The Gambia 

 

    GN 

 Guinea 

 

    GP 

 Guadeloupe 

 

    GQ 

 Equatorial Guinea 

 

    GR 

 Greece 

 

    GS 

 South Georgia and The South Sandwich Islands 

 

    GT 

 Guatemala 

 

    GU 

 Guam 

 

    GW 

 Guinea-Bissau 

 

    GY 

 Guyana 

 

    HK 

 Hong Kong 

 

    HM 

 Heard Island and McDonald Islands 

 

    HN 

 Honduras 

 

    HR 

 Croatia 

 

    HT 

 Haiti 

 

    HU 

 Hungary 

 

    ID 

 Indonesia 

 

    IE 

 Ireland 

 

    IL 

 Israel 

 

    IM 

 Isle of Man 

 

    IN 

 India 

 

    IO 

 The British Indian Ocean Territory 

 

    IQ 

 Iraq 

 

    IR 

 Iran 

 

    IS 

 Iceland 

 

    IT 

 Italy 

 

    JE 

 Jersey 

 

    JM 

 Jamaica 

 

    JO 

 Jordan 

 

    JP 

 Japan 

 

    KE 

 Kenya 

 

    KG 

 Kyrgyzstan 

 

    KH 

 Cambodia 

 

    KI 

 Kiribati 

 

    KM 

 The Comoros 

 

    KN 

 Saint Kitts and Nevis 

 

    KP 

 The Democratic People's Republic of Korea 

 

    KR 

 The Republic of Korea 

 

    KW 

 Kuwait 

 

    KY 

 Cayman Islands 

 

    KZ 

 Kazakhstan 

 

    LA 

 Laos 

 

    LB 

 Lebanon 

 

    LC 

 Saint Lucia 

 

    LI 

 Liechtenstein 

 

    LK 

 Sri Lanka 

 

    LR 

 Liberia 

 

    LS 

 Lesotho 

 

    LT 

 Lithuania 

 

    LU 

 Luxembourg 

 

    LV 

 Latvia 

 

    LY 

 Libya 

 

    MA 

 Morocco 

 

    MC 

 Monaco 

 

    MD 

 Moldova 

 

    ME 

 Montenegro 

 

    MF 

 Saint Martin 

 

    MG 

 Madagascar 

 

    MH 

 The Marshall Islands 

 

    MK 

 Macedonia 

 

    ML 

 Mali 

 

    MM 

 Myanmar 

 

    MN 

 Mongolia 

 

    MO 

 Macao 

 

    MP 

 Northern Mariana Islands 

 

    MQ 

 Martinique 

 

    MR 

 Mauritania 

 

    MS 

 Montserrat 

 

    MT 

 Malta 

 

    MU 

 Mauritius 

 

    MV 

 Maldives 

 

    MW 

 Malawi 

 

    MX 

 Mexico 

 

    MY 

 Malaysia 

 

    MZ 

 Mozambique 

 

    NA 

 Namibia 

 

    NC 

 New Caledonia 

 

    NE 

 The Niger 

 

    NF 

 Norfolk Island 

 

    NG 

 Nigeria 

 

    NI 

 Nicaragua 

 

    NL 

 The Netherlands 

 

    NO 

 Norway 

 

    NP 

 Nepal 

 

    NR 

 Nauru 

 

    NU 

 Niue 

 

    NZ 

 New Zealand 

 

    OM 

 Oman 

 

    PA 

 Panama 

 

    PE 

 Peru 

 

    PF 

 French Polynesia 

 

    PG 

 Papua New Guinea 

 

    PH 

 The Philippines 

 

    PK 

 Pakistan 

 

    PL 

 Poland 

 

    PM 

 Saint Pierre and Miquelon 

 

    PN 

 Pitcairn 

 

    PR 

 Puerto Rico 

 

    PS 

 The Occupied Palestinian Territory 

 

    PT 

 Portugal 

 

    PW 

 Palau 

 

    PY 

 Paraguay 

 

    QA 

 Qatar 

 

    RE 

 Réunion 

 

    RO 

 Romania 

 

    RS 

 Serbia 

 

    RU 

 Russia 

 

    RW 

 Rwanda 

 

    SA 

 Saudi Arabia 

 

    SB 

 Solomon Islands 

 

    SC 

 Seychelles 

 

    SD 

 The Sudan 

 

    SE 

 Sweden 

 

    SG 

 Singapore 

 

    SH 

 Saint Helena 

 

    SI 

 Slovenia 

 

    SJ 

 Svalbard and Jan Mayen 

 

    SK 

 Slovakia 

 

    SL 

 Sierra Leone 

 

    SM 

 San Marino 

 

    SN 

 Senegal 

 

    SO 

 Somalia 

 

    SR 

 Suriname 

 

    SS 

 South Sudan 

 

    ST 

 Sao Tome and Principe 

 

    SV 

 El Salvador 

 

    SX 

 Sint Maarten 

 

    SY 

 Syria 

 

    SZ 

 Swaziland 

 

    TC 

 Turks and Caicos Islands 

 

    TD 

 Chad 

 

    TF 

 The French Southern Territories 

 

    TG 

 Togo 

 

    TH 

 Thailand 

 

    TJ 

 Tajikistan 

 

    TK 

 Tokelau 

 

    TL 

 Timor-Leste 

 

    TM 

 Turkmenistan 

 

    TN 

 Tunisia 

 

    TO 

 Tonga 

 

    TR 

 Turkey 

 

    TT 

 Trinidad and Tobago 

 

    TV 

 Tuvalu 

 

    TW 

 Taiwan 

 

    TZ 

 Tanzania 

 

    UA 

 Ukraine 

 

    UG 

 Uganda 

 

    UM 

 United States Minor Outlying Islands 

 

    US 

 The United States 

 

    UY 

 Uruguay 

 

    UZ 

 Uzbekistan 

 

    VA 

 The Holy See 

 

    VC 

 Saint Vincent and The Grenadines 

 

    VE 

 Venezuela 

 

    VG 

 British Virgin Islands 

 

    VI 

 US Virgin Islands 

 

    VN 

 Viet Nam 

 

    VU 

 Vanuatu 

 

    WF 

 Wallis and Futuna 

 

    WS 

 Samoa 

 

    YE 

 Yemen 

 

    YT 

 Mayotte 

 

    ZA 

 South Africa 

 

    ZM 

 Zambia 

 

    ZW 

 Zimbabwe 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *country* of field *accounts*
 from type [Query](/../types/Query)

 * Argument *country* of field *hosts*
 from type [Query](/../types/Query)

 * Argument *countries* of field *generatePlaidLinkToken*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ConversationStats](/types/ConversationStats) **Next**  [Credit](/types/Credit)

---


# CreditObject

Source: https://graphql-docs-v2.opencollective.com/types/Credit

# Credit  Object

  This represents a Credit transaction 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   legacyId   [Int](/../types/Int) !  Non-null 

   uuid   [String](/../types/String) !   Deprecated 2021-08-15: Use id instead.  Non-null 

   group   [String](/../types/String) !  Non-null 

   type   [TransactionType](/../types/TransactionType) !  Non-null 

   kind   [TransactionKind](/../types/TransactionKind)  

   description   [String](/../types/String)  

   Show arguments (2)    amount   [Amount](/../types/Amount) !  Non-null 

   amountInHostCurrency   [Amount](/../types/Amount) !  Non-null 

   hostCurrencyFxRate   [Float](/../types/Float)  

 Exchange rate between the currency of the transaction and the currency of the host (transaction.amount \* transaction.hostCurrencyFxRate = transaction.amountInHostCurrency) 

   netAmount   [Amount](/../types/Amount) !  Non-null 

   Show arguments (3)    netAmountInHostCurrency   [Amount](/../types/Amount) !  Non-null 

   Show arguments (3)    taxAmount   [Amount](/../types/Amount) !  Non-null 

   Show arguments (1)    taxInfo   [TaxInfo](/../types/TaxInfo)  

 If a tax is set, this field will contain more info about the tax 

   platformFee   [Amount](/../types/Amount) !  Non-null 

   hostFee   [Amount](/../types/Amount) !  Non-null 

   Show arguments (1)    paymentProcessorFee   [Amount](/../types/Amount) !  Non-null 

 Payment Processor Fee (usually in host currency) 

   Show arguments (1)    paymentProcessorUrl   [String](/../types/String)  

   host   [Account](/../types/Account)  

   account   [Account](/../types/Account)  

 The account on the main side of the transaction (CREDIT -> recipient, DEBIT -> sender) 

   oppositeAccount   [Account](/../types/Account)  

 The account on the opposite side of the transaction (CREDIT -> sender, DEBIT -> recipient) 

   fromAccount   [Account](/../types/Account)  

 The sender of a transaction (on CREDIT = oppositeAccount, DEBIT = account) 

   toAccount   [Account](/../types/Account)  

 The recipient of a transaction (on CREDIT = account, DEBIT = oppositeAccount) 

   giftCardEmitterAccount   [Account](/../types/Account)  

 Account that emitted the gift card used for this transaction (if any) 

   createdAt   [DateTime](/../types/DateTime)  

   updatedAt   [DateTime](/../types/DateTime)  

   clearedAt   [DateTime](/../types/DateTime)  

   expense   [Expense](/../types/Expense)  

   order   [Order](/../types/Order)  

   isRefunded   [Boolean](/../types/Boolean)  

   isRefund   [Boolean](/../types/Boolean)  

   isDisputed   [Boolean](/../types/Boolean)  

   isInReview   [Boolean](/../types/Boolean)  

   paymentMethod   [PaymentMethod](/../types/PaymentMethod)  

   payoutMethod   [PayoutMethod](/../types/PayoutMethod)  

   permissions   [TransactionPermissions](/../types/TransactionPermissions) !  Non-null 

 The permissions given to current logged in user for this transaction 

   isOrderRejected   [Boolean](/../types/Boolean) !  Non-null 

   refundTransaction   [Transaction](/../types/Transaction)  

   oppositeTransaction   [Transaction](/../types/Transaction)  

 The opposite transaction (CREDIT -> DEBIT, DEBIT -> CREDIT) 

   relatedTransactions  [ [Transaction](/../types/Transaction) ]!  Non-null 

   Show arguments (1)    merchantId   [String](/../types/String)  

 Merchant ID related to the Transaction (Stripe, PayPal, Wise, Privacy) 

   balanceInHostCurrency   [Amount](/../types/Amount)  

 The balance after the Transaction has run. Only for financially active accounts. 

   invoiceTemplate   [String](/../types/String)  

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Transaction](/../types/Transaction) .

 

---

 **Previous**   [CountryISO](/types/CountryISO) **Next**  [CreditCardCreateInput](/types/CreditCardCreateInput)

---


# CreditCardCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/CreditCardCreateInput

# CreditCardCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     token   [String](/../types/String) !  Non-null

    zip   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *creditCardInfo* of field *addCreditCard*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Credit](/types/Credit) **Next**  [CreditCardWithStripeError](/types/CreditCardWithStripeError)

---


# CreditCardWithStripeErrorObject

Source: https://graphql-docs-v2.opencollective.com/types/CreditCardWithStripeError

# CreditCardWithStripeError  Object

  ## Fields

 ## [#](#fields)

     paymentMethod   [PaymentMethod](/../types/PaymentMethod) !  Non-null 

 The payment method created 

   stripeError   [StripeError](/../types/StripeError)  

 This field will be set if there was an error with Stripe during strong customer authentication 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *addCreditCard* from [Mutation](/../types/Mutation)

 * Field *confirmCreditCard* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [CreditCardCreateInput](/types/CreditCardCreateInput) **Next**  [Currency](/types/Currency)

---


# CurrencyEnum

Source: https://graphql-docs-v2.opencollective.com/types/Currency

# Currency  Enum

  All supported currencies 

 ## Possible Values

 ## [#](#possible-values)

     USD 

 US Dollar 

 

    AED 

 UAE Dirham 

 

    AFN 

 Afghani 

 

    ALL 

 Lek 

 

    AMD 

 Armenian Dram 

 

    ANG 

 Netherlands Antillean Guilder 

 

    AOA 

 Kwanza 

 

    ARS 

 Argentine Peso 

 

    AUD 

 Australian Dollar 

 

    AWG 

 Aruban Florin 

 

    AZN 

 Azerbaijanian Manat 

 

    BAM 

 Convertible Mark 

 

    BBD 

 Barbados Dollar 

 

    BDT 

 Taka 

 

    BGN 

 Bulgarian Lev 

 

    BIF 

 Burundi Franc 

 

    BMD 

 Bermudian Dollar 

 

    BND 

 Brunei Dollar 

 

    BOB 

 Boliviano 

 

    BRL 

 Brazilian Real 

 

    BSD 

 Bahamian Dollar 

 

    BWP 

 Pula 

 

    BYN 

 Belarussian Ruble 

 

    BZD 

 Belize Dollar 

 

    CAD 

 Canadian Dollar 

 

    CDF 

 Congolese Franc 

 

    CHF 

 Swiss Franc 

 

    CLP 

 Chilean Peso 

 

    CNY 

 Yuan Renminbi 

 

    COP 

 Colombian Peso 

 

    CRC 

 Costa Rican Colon 

 

    CVE 

 Cabo Verde Escudo 

 

    CZK 

 Czech Koruna 

 

    DJF 

 Djibouti Franc 

 

    DKK 

 Danish Krone 

 

    DOP 

 Dominican Peso 

 

    DZD 

 Algerian Dinar 

 

    EGP 

 Egyptian Pound 

 

    ETB 

 Ethiopian Birr 

 

    EUR 

 Euro 

 

    FJD 

 Fiji Dollar 

 

    FKP 

 Falkland Islands Pound 

 

    GBP 

 Pound Sterling 

 

    GEL 

 Lari 

 

    GIP 

 Gibraltar Pound 

 

    GMD 

 Dalasi 

 

    GNF 

 Guinea Franc 

 

    GTQ 

 Quetzal 

 

    GYD 

 Guyana Dollar 

 

    HKD 

 Hong Kong Dollar 

 

    HNL 

 Lempira 

 

    HRK 

 Kuna 

 

    HTG 

 Gourde 

 

    HUF 

 Forint 

 

    IDR 

 Rupiah 

 

    ILS 

 New Israeli Sheqel 

 

    INR 

 Indian Rupee 

 

    ISK 

 Iceland Krona 

 

    JMD 

 Jamaican Dollar 

 

    JPY 

 Yen 

 

    KES 

 Kenyan Shilling 

 

    KGS 

 Som 

 

    KHR 

 Riel 

 

    KMF 

 Comoro Franc 

 

    KRW 

 Won 

 

    KYD 

 Cayman Islands Dollar 

 

    KZT 

 Tenge 

 

    LAK 

 Kip 

 

    LBP 

 Lebanese Pound 

 

    LKR 

 Sri Lanka Rupee 

 

    LRD 

 Liberian Dollar 

 

    LSL 

 Loti 

 

    MAD 

 Moroccan Dirham 

 

    MDL 

 Moldovan Leu 

 

    MGA 

 Malagasy Ariary 

 

    MKD 

 Denar 

 

    MMK 

 Kyat 

 

    MNT 

 Tugrik 

 

    MOP 

 Pataca 

 

    MUR 

 Mauritius Rupee 

 

    MVR 

 Rufiyaa 

 

    MWK 

 Kwacha 

 

    MXN 

 Mexican Peso 

 

    MYR 

 Malaysian Ringgit 

 

    MZN 

 Mozambique Metical 

 

    NAD 

 Namibia Dollar 

 

    NGN 

 Naira 

 

    NIO 

 Cordoba Oro 

 

    NOK 

 Norwegian Krone 

 

    NPR 

 Nepalese Rupee 

 

    NZD 

 New Zealand Dollar 

 

    PAB 

 Balboa 

 

    PEN 

 Nuevo Sol 

 

    PGK 

 Kina 

 

    PHP 

 Philippine Peso 

 

    PKR 

 Pakistan Rupee 

 

    PLN 

 Zloty 

 

    PYG 

 Guarani 

 

    QAR 

 Qatari Rial 

 

    RON 

 Romanian Leu 

 

    RSD 

 Serbian Dinar 

 

    RUB 

 Russian Ruble 

 

    RWF 

 Rwanda Franc 

 

    SAR 

 Saudi Riyal 

 

    SBD 

 Solomon Islands Dollar 

 

    SCR 

 Seychelles Rupee 

 

    SEK 

 Swedish Krona 

 

    SGD 

 Singapore Dollar 

 

    SHP 

 Saint Helena Pound 

 

    SLL 

 Leone 

 

    SOS 

 Somali Shilling 

 

    SRD 

 Surinam Dollar 

 

    SZL 

 Lilangeni 

 

    THB 

 Baht 

 

    TJS 

 Somoni 

 

    TOP 

 Pa’anga 

 

    TRY 

 Turkish Lira 

 

    TTD 

 Trinidad and Tobago Dollar 

 

    TWD 

 New Taiwan Dollar 

 

    TZS 

 Tanzanian Shilling 

 

    UAH 

 Hryvnia 

 

    UGX 

 Uganda Shilling 

 

    UYU 

 Peso Uruguayo 

 

    UZS 

 Uzbekistan Sum 

 

    VND 

 Dong 

 

    VUV 

 Vatu 

 

    WST 

 Tala 

 

    XAF 

 CFA Franc BEAC 

 

    XCD 

 East Caribbean Dollar 

 

    XOF 

 CFA Franc BCEAO 

 

    XPF 

 CFP Franc 

 

    YER 

 Yemeni Rial 

 

    ZAR 

 Rand 

 

    ZMW 

 Zambian Kwacha 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *currency* from [Expense](/../types/Expense)

 * Field *currency* from [Host](/../types/Host)

 * Argument *currency* of field *amount*
 from type [ExpenseCollectionTotalAmount](/../types/ExpenseCollectionTotalAmount)

   Show more (23)   

---

 **Previous**   [CreditCardWithStripeError](/types/CreditCardWithStripeError) **Next**  [CurrencyExchangeRate](/types/CurrencyExchangeRate)

---


# CurrencyExchangeRateObject

Source: https://graphql-docs-v2.opencollective.com/types/CurrencyExchangeRate

# CurrencyExchangeRate  Object

  Fields for a currency fx rate 

 ## Fields

 ## [#](#fields)

     value   [Float](/../types/Float) !  Non-null 

 Exchange rate value as a scalar (e.g 1.15 or 0.86) 

   source   [CurrencyExchangeRateSourceType](/../types/CurrencyExchangeRateSourceType) !  Non-null 

 Where does the FX rate comes from 

   fromCurrency   [Currency](/../types/Currency) !  Non-null 

   toCurrency   [Currency](/../types/Currency) !  Non-null 

   date   [DateTime](/../types/DateTime) !  Non-null 

 Date of the FX rate 

   isApproximate   [Boolean](/../types/Boolean) !  Non-null 

 Is the FX rate approximate or a fixed value? 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *referenceExchangeRate* from [ExpenseItem](/../types/ExpenseItem)

 * Field *exchangeRate* from [Amount](/../types/Amount)

 * Field *currencyExchangeRate* from [Query](/../types/Query)

 

---

 **Previous**   [Currency](/types/Currency) **Next**  [CurrencyExchangeRateInput](/types/CurrencyExchangeRateInput)

---


# CurrencyExchangeRateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/CurrencyExchangeRateInput

# CurrencyExchangeRateInput  Input Object

  Fields for a currency exchange rate 

 ## Fields

 ## [#](#fields)

     date   [DateTime](/../types/DateTime) !  Non-null

 Date of the FX rate 

 

    fromCurrency   [Currency](/../types/Currency) !  Non-null

    source   [CurrencyExchangeRateSourceType](/../types/CurrencyExchangeRateSourceType) !  Non-null

 Where does the FX rate comes from 

 

    toCurrency   [Currency](/../types/Currency) !  Non-null

    value   [Float](/../types/Float) !  Non-null

 Exchange rate value as a float (e.g 1.15 or 0.86) 

 

   

---

 **Previous**   [CurrencyExchangeRate](/types/CurrencyExchangeRate) **Next**  [CurrencyExchangeRateRequest](/types/CurrencyExchangeRateRequest)

---


# CurrencyExchangeRateRequestInput Object

Source: https://graphql-docs-v2.opencollective.com/types/CurrencyExchangeRateRequest

# CurrencyExchangeRateRequest  Input Object

  Request for a currency exchange rate 

 ## Fields

 ## [#](#fields)

     date   [DateTime](/../types/DateTime)  

 Date of the exchange rate. Defaults to now. 

 

    fromCurrency   [Currency](/../types/Currency) !  Non-null

 Currency to convert from 

 

    toCurrency   [Currency](/../types/Currency) !  Non-null

 Currency to convert to 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *requests* of field *currencyExchangeRate*
 from type [Query](/../types/Query)

 

---

 **Previous**   [CurrencyExchangeRateInput](/types/CurrencyExchangeRateInput) **Next**  [CurrencyExchangeRateSourceType](/types/CurrencyExchangeRateSourceType)

---


# CurrencyExchangeRateSourceTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/CurrencyExchangeRateSourceType

# CurrencyExchangeRateSourceType  Enum

  Where does the FX rate come from 

 ## Possible Values

 ## [#](#possible-values)

     OPENCOLLECTIVE 

 Open Collective internal system, relying on caching and 3rd party APIs 

 

    PAYPAL 

 PayPal API 

 

    WISE 

 Wise API 

 

    USER 

 User-provided exchange rate 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *source* from [CurrencyExchangeRate](/../types/CurrencyExchangeRate)

 

---

 **Previous**   [CurrencyExchangeRateRequest](/types/CurrencyExchangeRateRequest) **Next**  [Date](/types/Date)

---


# DateScalar

Source: https://graphql-docs-v2.opencollective.com/types/Date

# Date  Scalar

  A date string, such as 2007-12-03, compliant with the `full-date`  format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *date* from [ExpenseParsedFileInfo](/../types/ExpenseParsedFileInfo)

 * Field *incurredAt* from [ExpenseItemParsedFileInfo](/../types/ExpenseItemParsedFileInfo)

 

---

 **Previous**   [CurrencyExchangeRateSourceType](/types/CurrencyExchangeRateSourceType) **Next**  [DateTime](/types/DateTime)

---


# DateTimeScalar

Source: https://graphql-docs-v2.opencollective.com/types/DateTime

# DateTime  Scalar

  A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time`  format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *createdAt* from [OAuthAuthorization](/../types/OAuthAuthorization)

 * Field *updatedAt* from [OAuthAuthorization](/../types/OAuthAuthorization)

 * Field *expiresAt* from [OAuthAuthorization](/../types/OAuthAuthorization)

   Show more (397)   

---

 **Previous**   [Date](/types/Date) **Next**  [DateTimeField](/types/DateTimeField)

---


# DateTimeFieldEnum

Source: https://graphql-docs-v2.opencollective.com/types/DateTimeField

# DateTimeField  Enum

  All possible DateTime fields for a resource 

 ## Possible Values

 ## [#](#possible-values)

     CREATED\_AT 

 The creation time of a resource 

 

    EFFECTIVE\_DATE 

 Transactions only: The date when a transaction was cleared by the payment processor 

 

    LAST\_CHARGED\_AT 

 Orders only: The date when an order was last charged, defaults to createdAt if never charged 

 

   

---

 **Previous**   [DateTime](/types/DateTime) **Next**  [Debit](/types/Debit)

---


# DebitObject

Source: https://graphql-docs-v2.opencollective.com/types/Debit

# Debit  Object

  This represents a Debit transaction 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   legacyId   [Int](/../types/Int) !  Non-null 

   uuid   [String](/../types/String) !   Deprecated 2021-08-15: Use id instead.  Non-null 

   group   [String](/../types/String) !  Non-null 

   type   [TransactionType](/../types/TransactionType) !  Non-null 

   kind   [TransactionKind](/../types/TransactionKind)  

   description   [String](/../types/String)  

   Show arguments (2)    amount   [Amount](/../types/Amount) !  Non-null 

   amountInHostCurrency   [Amount](/../types/Amount) !  Non-null 

   hostCurrencyFxRate   [Float](/../types/Float)  

 Exchange rate between the currency of the transaction and the currency of the host (transaction.amount \* transaction.hostCurrencyFxRate = transaction.amountInHostCurrency) 

   netAmount   [Amount](/../types/Amount) !  Non-null 

   Show arguments (3)    netAmountInHostCurrency   [Amount](/../types/Amount) !  Non-null 

   Show arguments (3)    taxAmount   [Amount](/../types/Amount) !  Non-null 

   Show arguments (1)    taxInfo   [TaxInfo](/../types/TaxInfo)  

 If a tax is set, this field will contain more info about the tax 

   platformFee   [Amount](/../types/Amount) !  Non-null 

   hostFee   [Amount](/../types/Amount) !  Non-null 

   Show arguments (1)    paymentProcessorFee   [Amount](/../types/Amount) !  Non-null 

 Payment Processor Fee (usually in host currency) 

   Show arguments (1)    paymentProcessorUrl   [String](/../types/String)  

   host   [Account](/../types/Account)  

   account   [Account](/../types/Account)  

 The account on the main side of the transaction (CREDIT -> recipient, DEBIT -> sender) 

   oppositeAccount   [Account](/../types/Account)  

 The account on the opposite side of the transaction (CREDIT -> sender, DEBIT -> recipient) 

   fromAccount   [Account](/../types/Account)  

 The sender of a transaction (on CREDIT = oppositeAccount, DEBIT = account) 

   toAccount   [Account](/../types/Account)  

 The recipient of a transaction (on CREDIT = account, DEBIT = oppositeAccount) 

   giftCardEmitterAccount   [Account](/../types/Account)  

 Account that emitted the gift card used for this transaction (if any) 

   createdAt   [DateTime](/../types/DateTime)  

   updatedAt   [DateTime](/../types/DateTime)  

   clearedAt   [DateTime](/../types/DateTime)  

   expense   [Expense](/../types/Expense)  

   order   [Order](/../types/Order)  

   isRefunded   [Boolean](/../types/Boolean)  

   isRefund   [Boolean](/../types/Boolean)  

   isDisputed   [Boolean](/../types/Boolean)  

   isInReview   [Boolean](/../types/Boolean)  

   paymentMethod   [PaymentMethod](/../types/PaymentMethod)  

   payoutMethod   [PayoutMethod](/../types/PayoutMethod)  

   permissions   [TransactionPermissions](/../types/TransactionPermissions) !  Non-null 

 The permissions given to current logged in user for this transaction 

   isOrderRejected   [Boolean](/../types/Boolean) !  Non-null 

   refundTransaction   [Transaction](/../types/Transaction)  

   oppositeTransaction   [Transaction](/../types/Transaction)  

 The opposite transaction (CREDIT -> DEBIT, DEBIT -> CREDIT) 

   relatedTransactions  [ [Transaction](/../types/Transaction) ]!  Non-null 

   Show arguments (1)    merchantId   [String](/../types/String)  

 Merchant ID related to the Transaction (Stripe, PayPal, Wise, Privacy) 

   balanceInHostCurrency   [Amount](/../types/Amount)  

 The balance after the Transaction has run. Only for financially active accounts. 

   invoiceTemplate   [String](/../types/String)  

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Transaction](/../types/Transaction) .

 

---

 **Previous**   [DateTimeField](/types/DateTimeField) **Next**  [DuplicateAccountDataTypeInput](/types/DuplicateAccountDataTypeInput)

---


# DuplicateAccountDataTypeInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/DuplicateAccountDataTypeInput

# DuplicateAccountDataTypeInput  Input Object

  Which data should be copied when duplicating the account 

 ## Fields

 ## [#](#fields)

     admins   [Boolean](/../types/Boolean) !  Non-null

    events   [Boolean](/../types/Boolean) !  Non-null

    projects   [Boolean](/../types/Boolean) !  Non-null

    tiers   [Boolean](/../types/Boolean) !  Non-null

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *include* of field *duplicateAccount*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Debit](/types/Debit) **Next**  [EXPENSE\_AUTHOR\_CANNOT\_APPROVE](/types/EXPENSE_AUTHOR_CANNOT_APPROVE)

---


# EXPENSE_AUTHOR_CANNOT_APPROVEObject

Source: https://graphql-docs-v2.opencollective.com/types/EXPENSE_AUTHOR_CANNOT_APPROVE

# EXPENSE\_AUTHOR\_CANNOT\_APPROVE  Object

  ## Fields

 ## [#](#fields)

     amountInCents   [Int](/../types/Int)  

   enabled   [Boolean](/../types/Boolean)  

   appliesToHostedCollectives   [Boolean](/../types/Boolean)  

   appliesToSingleAdminCollectives   [Boolean](/../types/Boolean)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *EXPENSE\_AUTHOR\_CANNOT\_APPROVE* from [Policies](/../types/Policies)

 

---

 **Previous**   [DuplicateAccountDataTypeInput](/types/DuplicateAccountDataTypeInput) **Next**  [EXPENSE\_CATEGORIZATION](/types/EXPENSE_CATEGORIZATION)

---


# EXPENSE_CATEGORIZATIONObject

Source: https://graphql-docs-v2.opencollective.com/types/EXPENSE_CATEGORIZATION

# EXPENSE\_CATEGORIZATION  Object

  ## Fields

 ## [#](#fields)

     requiredForExpenseSubmitters   [Boolean](/../types/Boolean)  

   requiredForCollectiveAdmins   [Boolean](/../types/Boolean)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *EXPENSE\_CATEGORIZATION* from [Policies](/../types/Policies)

 

---

 **Previous**   [EXPENSE\_AUTHOR\_CANNOT\_APPROVE](/types/EXPENSE_AUTHOR_CANNOT_APPROVE) **Next**  [EXPENSE\_POLICIES](/types/EXPENSE_POLICIES)

---


# EXPENSE_POLICIESObject

Source: https://graphql-docs-v2.opencollective.com/types/EXPENSE_POLICIES

# EXPENSE\_POLICIES  Object

  ## Fields

 ## [#](#fields)

     invoicePolicy   [String](/../types/String)  

   receiptPolicy   [String](/../types/String)  

   titlePolicy   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *EXPENSE\_POLICIES* from [Policies](/../types/Policies)

 

---

 **Previous**   [EXPENSE\_CATEGORIZATION](/types/EXPENSE_CATEGORIZATION) **Next**  [EmailAddress](/types/EmailAddress)

---


# EmailAddressScalar

Source: https://graphql-docs-v2.opencollective.com/types/EmailAddress

# EmailAddress  Scalar

  A field whose value conforms to the standard internet email address format as specified in RFC822: <https://www.w3.org/Protocols/rfc822/>. 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *email* of field *members*
 from type [Host](/../types/Host)

 * Field *emails* from [Host](/../types/Host)

 * Argument *email* of field *members*
 from type [Bot](/../types/Bot)

   Show more (20)   

---

 **Previous**   [EXPENSE\_POLICIES](/types/EXPENSE_POLICIES) **Next**  [EmojiReactionResponse](/types/EmojiReactionResponse)

---


# EmojiReactionResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/EmojiReactionResponse

# EmojiReactionResponse  Object

  ## Fields

 ## [#](#fields)

     update   [Update](/../types/Update)  

 Reference to the update corresponding to the emojis 

   comment   [Comment](/../types/Comment)  

 Reference to the comment corresponding to the emojis 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *addEmojiReaction* from [Mutation](/../types/Mutation)

 * Field *removeEmojiReaction* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [EmailAddress](/types/EmailAddress) **Next**  [Event](/types/Event)

---


# EventObject

Source: https://graphql-docs-v2.opencollective.com/types/Event

# Event  Object

  This represents an Event account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id identifying the account (ie: 5v08jk63-w4g9nbpz-j7qmyder-p7ozax5g) 

   legacyId   [Int](/../types/Int) !  Non-null 

 The internal database identifier of the collective (ie: 580) 

   slug   [String](/../types/String) !  Non-null 

 The slug identifying the account (ie: babel) 

   type   [AccountType](/../types/AccountType) !  Non-null 

 The type of the account (BOT/COLLECTIVE/EVENT/ORGANIZATION/INDIVIDUAL/VENDOR) 

   name   [String](/../types/String)  

 Public name 

   legalName   [String](/../types/String)  

 Private, legal name. Used for expense receipts, taxes, etc. Scope: "account". 

   description   [String](/../types/String)  

   longDescription   [String](/../types/String)  

   tags  [ [String](/../types/String) ] 

   website   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   twitterHandle   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   githubHandle   [String](/../types/String)    Deprecated 2022-06-03: Please use repositoryUrl 

   repositoryUrl   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   socialLinks  [ [SocialLink](/../types/SocialLink) !]!  Non-null 

   currency   [Currency](/../types/Currency) !  Non-null 

 The currency of the account 

   expensePolicy   [String](/../types/String)    Deprecated 2024-11-04: Please use policies.EXPENSE\_POLICIES 

   isIncognito   [Boolean](/../types/Boolean) !  Non-null 

 Defines if the contributors wants to be incognito (name not displayed) 

   imageUrl   [String](/../types/String)  

   Show arguments (2)    backgroundImageUrl   [String](/../types/String)  

   Show arguments (2)    createdAt   [DateTime](/../types/DateTime)  

 The time of creation 

   updatedAt   [DateTime](/../types/DateTime)  

 The time of last update 

   unhostedAt   [DateTime](/../types/DateTime)  

 Date of unhosting by a given Fiscal Host. 

   Show arguments (1)    isArchived   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether this account is archived 

   isFrozen   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account is frozen 

   isActive   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether it's active: can accept financial contributions and pay expenses. 

   isHost   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether the account is setup to Host collectives. 

   isAdmin   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user is an admin of this account 

   parentAccount   [Account](/../types/Account)    Deprecated 2022-12-16: use parent on AccountWithParent instead 

   members   [MemberCollection](/../types/MemberCollection) !  Non-null 

 Get all members (admins, members, backers, followers) 

   Show arguments (7)    memberInvitations  [ [MemberInvitation](/../types/MemberInvitation) ] 

 [AUTHENTICATED] Returns the pending invitations 

   Show arguments (3)    legalDocuments  [ [LegalDocument](/../types/LegalDocument) ] 

 The legal documents associated with this account 

   Show arguments (1)    memberOf   [MemberOfCollection](/../types/MemberOfCollection) !  Non-null 

   Show arguments (13)    emails  [ [EmailAddress](/../types/EmailAddress) !] 

 Returns the emails of the account. Individuals only have one, but organizations can have multiple emails. 

   transactions   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   Show arguments (34)    orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

   Show arguments (28)    expenses   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   Show arguments (26)    settings   [JSON](/../types/JSON) !  Non-null 

   conversations   [ConversationCollection](/../types/ConversationCollection) !  Non-null 

   Show arguments (3)    conversationsTags  [ [TagStat](/../types/TagStat) ] 

 Returns conversation's tags for collective sorted by popularity 

   Show arguments (1)    expensesTags  [ [TagStat](/../types/TagStat) ] 

 Returns expense tags for collective sorted by popularity 

   Show arguments (1)    supportedExpenseTypes  [ [ExpenseType](/../types/ExpenseType) !]!  Non-null 

 The list of expense types supported by this account 

   transferwise   [TransferWise](/../types/TransferWise)  

   payoutMethods  [ [PayoutMethod](/../types/PayoutMethod) ] 

 The list of payout methods that this collective can use to get paid. In most cases, admin only and scope: "expenses". 

   Show arguments (1)    paymentMethods  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods that this collective can use to pay for Orders. Admin or Host only. Scope: "orders". 

   Show arguments (3)    paymentMethodsWithPendingConfirmation  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods for this account that are pending a client confirmation (3D Secure / SCA) 

   connectedAccounts  [ [ConnectedAccount](/../types/ConnectedAccount) ] 

 The list of connected accounts (Stripe, PayPal, etc ...). Admin only. Scope: "connectedAccounts". 

   oAuthApplications   [OAuthApplicationCollection](/../types/OAuthApplicationCollection)  

 The list of applications created by this account. Admin only. Scope: "applications". 

   Show arguments (2)    location   [Location](/../types/Location)  

 The address associated to this account. This field is always public for collectives and events. 

   categories  [ [String](/../types/String) ]!  Non-null 

 Categories set by Open Collective to help moderation. 

   stats   [AccountStats](/../types/AccountStats)  

   canHaveChangelogUpdates   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account can have changelog updates 

   updates   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

 Updates published by the account. To see unpublished updates, you need to be an admin and have the scope "updates". 

   Show arguments (7)    features   [CollectiveFeatures](/../types/CollectiveFeatures) !  Non-null 

 Describes the features enabled and available for this account 

   virtualCards   [VirtualCardCollection](/../types/VirtualCardCollection)  

 Virtual Cards attached to the account. Admin only. Scope: "virtualCards". 

   Show arguments (7)    virtualCardMerchants   [AccountCollection](/../types/AccountCollection)  

 Virtual Cards Merchants used by the account. Admin only. Scope: "virtualCards". 

   Show arguments (2)    childrenAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (6)    policies   [Policies](/../types/Policies) !  Non-null 

 Policies for the account. To see non-public policies you need to be admin and have the scope: "account". 

   activitySubscriptions  [ [ActivitySubscription](/../types/ActivitySubscription) ] 

 List of activities that the logged-in user is subscribed for this collective 

   Show arguments (1)    permissions   [AccountPermissions](/../types/AccountPermissions) !  Non-null 

 Logged-in user permissions on an account 

   hostApplicationRequests   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

 Host application requests 

   Show arguments (4)    feed  [ [Activity](/../types/Activity) ] 

   Show arguments (3)    duplicatedFromAccount   [Account](/../types/Account)  

 If created by duplication, the account from which this one was duplicated 

   duplicatedAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

 If this account was duplicated, the accounts that were created from it 

   Show arguments (2)    transactionGroups   [TransactionGroupCollection](/../types/TransactionGroupCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (6)    transactionReports   [TransactionReports](/../types/TransactionReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)    webhooks   [WebhookCollection](/../types/WebhookCollection) !  Non-null 

   Show arguments (3)    host   [Host](/../types/Host)  

 Returns the Fiscal Host 

   hostFeesStructure   [HostFeeStructure](/../types/HostFeeStructure)  

 Describe how the host charges the collective 

   hostFeePercent   [Float](/../types/Float)  

 Fees percentage that the host takes for this collective 

   Show arguments (2)    hostApplication   [HostApplication](/../types/HostApplication)  

 Returns the Fiscal Host application 

   platformFeePercent   [Float](/../types/Float) !  Non-null 

 How much platform fees are charged for this account 

   approvedAt   [DateTime](/../types/DateTime)  

 Date of approval by the Fiscal Host. 

   unfrozenAt   [DateTime](/../types/DateTime)  

 Date when the collective was last unfrozen by current Fiscal Host 

   isApproved   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether it's approved by the Fiscal Host 

   hostAgreements   [AgreementCollection](/../types/AgreementCollection)  

 Returns agreements this account has with its host, or null if not enough permissions. 

   Show arguments (2)    summary   [HostedAccountSummary](/../types/HostedAccountSummary)  

   Show arguments (2)    totalFinancialContributors   [Int](/../types/Int) !  Non-null 

 Number of unique financial contributors. 

   Show arguments (1)    tiers   [TierCollection](/../types/TierCollection) !  Non-null 

   Show arguments (2)    contributors   [ContributorCollection](/../types/ContributorCollection) !  Non-null 

 All the persons and entities that contribute to this account 

   Show arguments (3)    activeContributors   [AccountCollection](/../types/AccountCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (5)    platformContributionAvailable   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if a custom contribution to Open Collective can be submitted for contributions made to this account 

   contributionPolicy   [String](/../types/String)  

   canStartResumeContributionsProcess   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user can start the process to resume contributions for account 

   hasResumeContributionsProcessStarted   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the account has started the process to resume contributions 

   parent   [Account](/../types/Account)  

 The Account parenting this account 

   startsAt   [DateTime](/../types/DateTime)  

 The Event start date and time 

   endsAt   [DateTime](/../types/DateTime)  

 The Event end date and time 

   timezone   [String](/../types/String)  

 Timezone of the Event (TZ database format, e.g. UTC or Europe/Berlin) 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Account](/../types/Account) , [AccountWithHost](/../types/AccountWithHost) , [AccountWithContributions](/../types/AccountWithContributions) , [AccountWithParent](/../types/AccountWithParent) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *event* from [Query](/../types/Query)

 * Field *createEvent* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [EmojiReactionResponse](/types/EmojiReactionResponse) **Next**  [EventCreateInput](/types/EventCreateInput)

---


# EventCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/EventCreateInput

# EventCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     backgroundImage   [Upload](/../types/Upload)  

 The profile background image, for the banner and social media sharing 

 

    description   [String](/../types/String)  

    endsAt   [DateTime](/../types/DateTime) !  Non-null

 The Event end date and time 

 

    image   [Upload](/../types/Upload)  

 The profile avatar image 

 

    name   [String](/../types/String) !  Non-null

    settings   [JSON](/../types/JSON)  

    slug   [String](/../types/String)  

    startsAt   [DateTime](/../types/DateTime) !  Non-null

 The Event start date and time 

 

    tags  [ [String](/../types/String) ] 

    timezone   [String](/../types/String) !  Non-null

 Timezone of the Event (TZ database format, e.g. UTC or Europe/Berlin) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *event* of field *createEvent*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Event](/types/Event) **Next**  [ExpectedFundsFilter](/types/ExpectedFundsFilter)

---


# ExpectedFundsFilterEnum

Source: https://graphql-docs-v2.opencollective.com/types/ExpectedFundsFilter

# ExpectedFundsFilter  Enum

  Expected funds filter (ALL\_EXPECTED\_FUNDS, ONLY\_PENDING, ONLY\_MANUAL) 

 ## Possible Values

 ## [#](#possible-values)

     ALL\_EXPECTED\_FUNDS 

    ONLY\_PENDING 

    ONLY\_MANUAL 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *expectedFundsFilter* of field *orders*
 from type [Host](/../types/Host)

 * Argument *expectedFundsFilter* of field *orders*
 from type [PaymentMethod](/../types/PaymentMethod)

 * Argument *expectedFundsFilter* of field *orders*
 from type [Bot](/../types/Bot)

   Show more (11)   

---

 **Previous**   [EventCreateInput](/types/EventCreateInput) **Next**  [Expense](/types/Expense)

---


# ExpenseObject

Source: https://graphql-docs-v2.opencollective.com/types/Expense

# Expense  Object

  This represents an Expense 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   legacyId   [Int](/../types/Int) !  Non-null 

 Legacy ID as returned by API V1. Avoid relying on this field as it may be removed in the future. 

   description   [String](/../types/String) !  Non-null 

 Title/main description for this expense 

   longDescription   [String](/../types/String)  

 Longer description for this expense 

   reference   [String](/../types/String)  

 User-provided reference number or any other identifier that references the invoice 

   amount   [Int](/../types/Int) !   Deprecated 2022-02-09: Please use amountV2  Non-null 

 Total amount of the expense (sum of the item's amounts). 

   amountV2   [Amount](/../types/Amount)  

 Total amount of the expense 

   Show arguments (1)    taxes  [ [TaxInfo](/../types/TaxInfo) ]!  Non-null 

 Taxes applied to this expense 

   accountCurrencyFxRate   [Float](/../types/Float) !   Deprecated 2022-02-09: Please use amountV2  Non-null 

 The exchange rate between the expense currency and the account currency 

   accountingCategory   [AccountingCategory](/../types/AccountingCategory)  

 The accounting category attached to this expense 

   valuesByRole   [ExpenseValuesByRole](/../types/ExpenseValuesByRole)  

 If available, this field will contain a breakdown of the expense values depending on who edited it 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

 The time of creation 

   currency   [Currency](/../types/Currency) !  Non-null 

 Currency that should be used for the payout 

   type   [ExpenseType](/../types/ExpenseType) !  Non-null 

 Whether this expense is a receipt or an invoice 

   status   [ExpenseStatus](/../types/ExpenseStatus) !  Non-null 

 The state of the expense (pending, approved, paid, rejected...etc) 

   approvedBy  [ [Account](/../types/Account) ]!  Non-null 

 The accounts who approved this expense 

   paidBy   [Account](/../types/Account)  

 The account who paid this expense 

   onHold   [Boolean](/../types/Boolean)  

 Whether this expense is on hold 

   comments   [CommentCollection](/../types/CommentCollection)  

 Returns the list of comments for this expense, or `null`  if user is not allowed to see them 

   Show arguments (3)    account   [Account](/../types/Account) !  Non-null 

 The account where the expense was submitted 

   payee   [Account](/../types/Account) !  Non-null 

 The account being paid by this expense 

   payeeLocation   [Location](/../types/Location)  

 The address of the payee 

   createdByAccount   [Account](/../types/Account)  

 The account who created this expense 

   host   [Host](/../types/Host)  

 The account from where the expense was paid 

   payoutMethod   [PayoutMethod](/../types/PayoutMethod)  

 The payout method to use for this expense 

   paymentMethod   [PaymentMethod](/../types/PaymentMethod)  

   virtualCard   [VirtualCard](/../types/VirtualCard)  

 The virtual card used to pay for this charge 

   attachedFiles  [ [ExpenseAttachedFile](/../types/ExpenseAttachedFile) !] 

 (Optional) files attached to the expense 

   invoiceFile   [FileInfo](/../types/FileInfo)  

 (Optional - applicable to invoice expense only) The invoice file for this expense 

   items  [ [ExpenseItem](/../types/ExpenseItem) ] 

   privateMessage   [String](/../types/String)  

 Additional information about the payment as HTML. Only visible to user and admins. 

   invoiceInfo   [String](/../types/String)  

 Information to display on the invoice. Only visible to user and admins. 

   feesPayer   [FeesPayer](/../types/FeesPayer) !  Non-null 

 The fees payer for this expense 

   permissions   [ExpensePermissions](/../types/ExpensePermissions) !  Non-null 

 The permissions given to current logged in user for this expense 

   activities  [ [Activity](/../types/Activity) !]!  Non-null 

 The list of activities (ie. approved, edited, etc) for this expense ordered by date ascending 

   tags  [ [String](/../types/String) ]!  Non-null 

   requiredLegalDocuments  [ [LegalDocumentType](/../types/LegalDocumentType) ] 

 Returns the list of legal documents required from the payee before the expense can be payed. Must be logged in. 

   legalDocuments   [LegalDocumentCollection](/../types/LegalDocumentCollection)  

 Returns the list of legal documents attached to this expense. Must be logged in as a host admin. 

   Show arguments (5)    draft   [JSON](/../types/JSON)  

 Drafted field values that were still not persisted 

   requestedByAccount   [Account](/../types/Account)  

 The account that requested this expense to be submitted 

   quote   [ExpenseQuote](/../types/ExpenseQuote)  

   validateTransferRequirements  [ [TransferWiseRequiredField](/../types/TransferWiseRequiredField) ] 

   Show arguments (1)    recurringExpense   [RecurringExpense](/../types/RecurringExpense)  

   securityChecks  [ [SecurityCheck](/../types/SecurityCheck) ] 

 [Admin only] Security checks for this expense. Only available to expenses under trusted hosts. 

   draftKey   [String](/../types/String)  

 [Host Admin only] Key to access the draft of this expense 

   customData   [JSON](/../types/JSON)  

 Custom data for this expense 

   merchantId   [String](/../types/String)  

 The merchant ID for this expense 

   transferReference   [String](/../types/String)  

 The reference text used in the payment transfer 

   lockedFields  [ [ExpenseLockableFields](/../types/ExpenseLockableFields) ] 

 Fields that cannot be edited on this expense 

   transactionImportRow   [TransactionsImportRow](/../types/TransactionsImportRow)  

 [Host admins only] If the expense associated with a transactions import row, this field will reference it 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [ExpenseCollection](/../types/ExpenseCollection)

 * Field *expense* from [Comment](/../types/Comment)

 * Field *expense* from [Activity](/../types/Activity)

   Show more (16)   

---

 **Previous**   [ExpectedFundsFilter](/types/ExpectedFundsFilter) **Next**  [ExpenseAttachedFile](/types/ExpenseAttachedFile)

---


# ExpenseAttachedFileObject

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseAttachedFile

# ExpenseAttachedFile  Object

  Fields for an expense's attached file 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for this file 

   url   [URL](/../types/URL)  

   info   [FileInfo](/../types/FileInfo)  

 The file info associated with this item (if any) 

   name   [String](/../types/String)    Deprecated 2023-01-23: We're moving this field to "file.name" 

 The original filename 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *attachedFiles* from [Expense](/../types/Expense)

 

---

 **Previous**   [Expense](/types/Expense) **Next**  [ExpenseAttachedFileInput](/types/ExpenseAttachedFileInput)

---


# ExpenseAttachedFileInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseAttachedFileInput

# ExpenseAttachedFileInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 ID of the file 

 

    url   [URL](/../types/URL) !  Non-null

 URL of the file 

 

   

---

 **Previous**   [ExpenseAttachedFile](/types/ExpenseAttachedFile) **Next**  [ExpenseCollection](/types/ExpenseCollection)

---


# ExpenseCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseCollection

# ExpenseCollection  Object

  A collection of "Expenses" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Expense](/../types/Expense) ] 

   totalAmount   [ExpenseCollectionTotalAmount](/../types/ExpenseCollectionTotalAmount)  

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *expenses* from [Host](/../types/Host)

 * Field *expenses* from [Bot](/../types/Bot)

 * Field *expenses* from [Collective](/../types/Collective)

   Show more (11)   

---

 **Previous**   [ExpenseAttachedFileInput](/types/ExpenseAttachedFileInput) **Next**  [ExpenseCollectionTotalAmount](/types/ExpenseCollectionTotalAmount)

---


# ExpenseCollectionTotalAmountObject

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseCollectionTotalAmount

# ExpenseCollectionTotalAmount  Object

  ## Fields

 ## [#](#fields)

     amount   [Amount](/../types/Amount)  

   Show arguments (1)    amountsByCurrency  [ [Amount](/../types/Amount) ] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *totalAmount* from [ExpenseCollection](/../types/ExpenseCollection)

 

---

 **Previous**   [ExpenseCollection](/types/ExpenseCollection) **Next**  [ExpenseCreateInput](/types/ExpenseCreateInput)

---


# ExpenseCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseCreateInput

# ExpenseCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     accountingCategory   [AccountingCategoryReferenceInput](/../types/AccountingCategoryReferenceInput)  

 The accounting category this expense belongs to 

 

    attachedFiles  [ [ExpenseAttachedFileInput](/../types/ExpenseAttachedFileInput) !] 

 (Optional) A list of files that you want to attach to this expense 

 

    currency   [Currency](/../types/Currency)  

 Currency that should be used for the payout. Defaults to the account currency 

 

    customData   [JSON](/../types/JSON)  

 Custom data to be stored in the expense 

 

    description   [String](/../types/String) !  Non-null

 Main title of the expense 

 

    invoiceFile   [ExpenseAttachedFileInput](/../types/ExpenseAttachedFileInput)  

 (Optional - applicable to invoice expense only) The invoice file for this expense 

 

    invoiceInfo   [String](/../types/String)  

 Custom information to print on the invoice 

 

    items  [ [ExpenseItemCreateInput](/../types/ExpenseItemCreateInput) ] 

 The list of items for this expense. Total amount will be computed from them. 

 

    longDescription   [String](/../types/String)  

 Longer text to attach to the expense 

 

    payee   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null

 Account to reimburse 

 

    payeeLocation   [LocationInput](/../types/LocationInput)  

 The address of the payee 

 

    payoutMethod   [PayoutMethodInput](/../types/PayoutMethodInput) !  Non-null

 The payout method that will be used to reimburse the expense 

 

    privateMessage   [String](/../types/String)  

 A private note that will be attached to your invoice, as HTML. Only visible to the payee and the collective/host admins. 

 

    reference   [String](/../types/String)  

 User-provided reference number or any other identifier that references the invoice 

 

    tags  [ [String](/../types/String) ] 

 Tags associated to the expense (ie. Food, Engineering...) 

 

    tax  [ [ExpenseTaxInput](/../types/ExpenseTaxInput) ] 

 The list of taxes that should be applied to the expense (VAT, GST, etc...) 

 

    type   [ExpenseType](/../types/ExpenseType) !  Non-null

 The type of the expense 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *expense* of field *createExpense*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ExpenseCollectionTotalAmount](/types/ExpenseCollectionTotalAmount) **Next**  [ExpenseCurrencySource](/types/ExpenseCurrencySource)

---


# ExpenseCurrencySourceEnum

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseCurrencySource

# ExpenseCurrencySource  Enum

  All supported expense currency sources 

 ## Possible Values

 ## [#](#possible-values)

     HOST 

 The expense currency expressed as the host currency 

 

    ACCOUNT 

 The expense currency expressed as the account currency 

 

    EXPENSE 

 The expense currency expressed as the expense currency 

 

    CREATED\_BY\_ACCOUNT 

 The expense currency expressed as the expense currency 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *currencySource* of field *amountV2*
 from type [Expense](/../types/Expense)

 

---

 **Previous**   [ExpenseCreateInput](/types/ExpenseCreateInput) **Next**  [ExpenseDirection](/types/ExpenseDirection)

---


# ExpenseDirectionEnum

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseDirection

# ExpenseDirection  Enum

  Describes the role in which an account is involved in an expense. This is used to filter 

 ## Possible Values

 ## [#](#possible-values)

     SUBMITTED 

 Submitted: The account is the one who submitted the expense and possibly the beneficiary. 

 

    RECEIVED 

 Received: The account is the one who received the expense and the one who's paying for it. 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *direction* of field *expenses*
 from type [Host](/../types/Host)

 * Argument *direction* of field *expenses*
 from type [Bot](/../types/Bot)

 * Argument *direction* of field *expenses*
 from type [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [ExpenseCurrencySource](/types/ExpenseCurrencySource) **Next**  [ExpenseInviteDraftInput](/types/ExpenseInviteDraftInput)

---


# ExpenseInviteDraftInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseInviteDraftInput

# ExpenseInviteDraftInput  Input Object

  ## Fields

 ## [#](#fields)

     accountingCategory   [AccountingCategoryReferenceInput](/../types/AccountingCategoryReferenceInput)  

 The accounting category this expense belongs to 

 

    attachedFiles  [ [JSON](/../types/JSON) ] 

 (Optional) A list of files that you want to attach to this expense 

 

    currency   [Currency](/../types/Currency)  

 Currency that should be used for the payout. Defaults to the account currency 

 

    customData   [JSON](/../types/JSON)  

 Custom data to be stored in the expense 

 

    description   [String](/../types/String)  

 Main title of the expense 

 

    invoiceFile   [JSON](/../types/JSON)  

 (Optional - applicable to invoice expense only) The invoice file for this expense 

 

    invoiceInfo   [String](/../types/String)  

 Custom information to print on the invoice 

 

    items  [ [JSON](/../types/JSON) ] 

 The list of items for this expense. Total amount will be computed from them. 

 

    longDescription   [String](/../types/String)  

 Longer text to attach to the expense 

 

    payee   [ExpenseInvitee](/../types/ExpenseInvitee) !  Non-null

 Account to reimburse 

 

    payeeLocation   [LocationInput](/../types/LocationInput)  

 The address of the payee 

 

    payoutMethod   [PayoutMethodInput](/../types/PayoutMethodInput)  

 The payout method that will be used to reimburse the expense 

 

    privateMessage   [String](/../types/String)  

 A private note that will be attached to your invoice, as HTML. Only visible to the payee and the collective/host admins. 

 

    recipientNote   [String](/../types/String)  

 Note to be sent to the invited user through email. 

 

    reference   [String](/../types/String)  

 User-provided reference number or any other identifier that references the invoice 

 

    tags  [ [String](/../types/String) ] 

 Tags associated to the expense (ie. Food, Engineering...) 

 

    tax  [ [ExpenseTaxInput](/../types/ExpenseTaxInput) ] 

 The list of taxes that should be applied to the expense (VAT, GST, etc...) 

 

    type   [ExpenseType](/../types/ExpenseType) !  Non-null

 The type of the expense 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *expense* of field *draftExpenseAndInviteUser*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ExpenseDirection](/types/ExpenseDirection) **Next**  [ExpenseInvitee](/types/ExpenseInvitee)

---


# ExpenseInviteeInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseInvitee

# ExpenseInvitee  Input Object

  ## Fields

 ## [#](#fields)

     email   [String](/../types/String)  

    isInvite   [Boolean](/../types/Boolean)  

    legacyId   [Int](/../types/Int)  

    name   [String](/../types/String)  

    organization   [ExpenseInviteeOrganizationInput](/../types/ExpenseInviteeOrganizationInput)  

    slug   [String](/../types/String)  

   

---

 **Previous**   [ExpenseInviteDraftInput](/types/ExpenseInviteDraftInput) **Next**  [ExpenseInviteeOrganizationInput](/types/ExpenseInviteeOrganizationInput)

---


# ExpenseInviteeOrganizationInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseInviteeOrganizationInput

# ExpenseInviteeOrganizationInput  Input Object

  ## Fields

 ## [#](#fields)

     description   [String](/../types/String)  

    name   [String](/../types/String)  

    slug   [String](/../types/String)  

    website   [String](/../types/String)  

   

---

 **Previous**   [ExpenseInvitee](/types/ExpenseInvitee) **Next**  [ExpenseItem](/types/ExpenseItem)

---


# ExpenseItemObject

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseItem

# ExpenseItem  Object

  Fields for an expense item 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for this expense item 

   amount   [Int](/../types/Int) !   Deprecated Please use `amountV2`  Non-null 

 Amount of this item 

   amountV2   [Amount](/../types/Amount) !  Non-null 

 Amount of this item 

   referenceExchangeRate   [CurrencyExchangeRate](/../types/CurrencyExchangeRate)  

 If the item currency is different than the expense currency, this field will expose the average exchange rate for this date as recorded by Open Collective. Used to decide whether the value in `amountV2.exchangeRate`  looks correct. 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

 The date on which the item was created 

   updatedAt   [DateTime](/../types/DateTime) !  Non-null 

 The date on which the item was last updated 

   incurredAt   [DateTime](/../types/DateTime) !  Non-null 

 The date on which the expense took place 

   description   [String](/../types/String)  

 A description for this item. Enforced for new items, but old expenses may not have one. 

   url   [URL](/../types/URL)  

   file   [FileInfo](/../types/FileInfo)  

 The file associated with this item (if any) 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *items* from [Expense](/../types/Expense)

 

---

 **Previous**   [ExpenseInviteeOrganizationInput](/types/ExpenseInviteeOrganizationInput) **Next**  [ExpenseItemCreateInput](/types/ExpenseItemCreateInput)

---


# ExpenseItemCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseItemCreateInput

# ExpenseItemCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     amountV2   [AmountInput](/../types/AmountInput)  

 Amount 

 

    description   [String](/../types/String) !  Non-null

 What is this item about? 

 

    incurredAt   [DateTime](/../types/DateTime)  

 When was the money spent? 

 

    url   [URL](/../types/URL)  

 URL of the file linked to this item. Must be provided if the expense type is RECEIPT. 

 

   

---

 **Previous**   [ExpenseItem](/types/ExpenseItem) **Next**  [ExpenseItemInput](/types/ExpenseItemInput)

---


# ExpenseItemInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseItemInput

# ExpenseItemInput  Input Object

  ## Fields

 ## [#](#fields)

     amountV2   [AmountInput](/../types/AmountInput)  

 Amount 

 

    description   [String](/../types/String)  

 What is this item about? 

 

    id   [String](/../types/String)  

 ID of the item 

 

    incurredAt   [DateTime](/../types/DateTime)  

 When was the money spent? 

 

    url   [URL](/../types/URL)  

 URL of the file linked to this item. Must be provided if the expense type is RECEIPT. 

 

   

---

 **Previous**   [ExpenseItemCreateInput](/types/ExpenseItemCreateInput) **Next**  [ExpenseItemParsedFileInfo](/types/ExpenseItemParsedFileInfo)

---


# ExpenseItemParsedFileInfoObject

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseItemParsedFileInfo

# ExpenseItemParsedFileInfo  Object

  ## Fields

 ## [#](#fields)

     description   [String](/../types/String)  

   amount   [Amount](/../types/Amount)  

   incurredAt   [Date](/../types/Date)  

   url   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *items* from [ExpenseParsedFileInfo](/../types/ExpenseParsedFileInfo)

 

---

 **Previous**   [ExpenseItemInput](/types/ExpenseItemInput) **Next**  [ExpenseLockableFields](/types/ExpenseLockableFields)

---


# ExpenseLockableFieldsEnum

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseLockableFields

# ExpenseLockableFields  Enum

  All fields that can be locked on an expense draft 

 ## Possible Values

 ## [#](#possible-values)

     AMOUNT 

 Locks items' amount and currency, and it also blocks the hability to add new items. 

 

    PAYEE 

 Locks the payee field, if the user is not on the platform it locks its email. 

 

    DESCRIPTION 

 Locks the description field. 

 

    TYPE 

 Locks the type field. 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *lockedFields* from [Expense](/../types/Expense)

 * Argument *lockedFields* of field *draftExpenseAndInviteUser*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ExpenseItemParsedFileInfo](/types/ExpenseItemParsedFileInfo) **Next**  [ExpenseParsedFileInfo](/types/ExpenseParsedFileInfo)

---


# ExpenseParsedFileInfoObject

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseParsedFileInfo

# ExpenseParsedFileInfo  Object

  ## Fields

 ## [#](#fields)

     confidence   [StrictPercentage](/../types/StrictPercentage)  

   description   [String](/../types/String)  

   amount   [Amount](/../types/Amount)  

   date   [Date](/../types/Date)  

   items  [ [ExpenseItemParsedFileInfo](/../types/ExpenseItemParsedFileInfo) !]!  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *expense* from [ParseUploadedFileResult](/../types/ParseUploadedFileResult)

 

---

 **Previous**   [ExpenseLockableFields](/types/ExpenseLockableFields) **Next**  [ExpensePermissions](/types/ExpensePermissions)

---


# ExpensePermissionsObject

Source: https://graphql-docs-v2.opencollective.com/types/ExpensePermissions

# ExpensePermissions  Object

  Fields for the user permissions on an expense 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   canEdit   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can edit the expense 

   canEditAccountingCategory   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can edit the expense accounting category 

   canEditTags   [Boolean](/../types/Boolean) !  Non-null 

 Tags permissions are a bit different, and can be edited by admins even if the expense has already been paid 

   canDelete   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can edit the expense 

   canSeeInvoiceInfo   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can the the invoice info for this expense 

   canPay   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can trigger the payment for this expense 

   canApprove   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can approve this expense 

   canUnapprove   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can unapprove this expense 

   canReject   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can reject this expense 

   canDeclineExpenseInvite   [Boolean](/../types/Boolean) !  Non-null 

 Whether the user or the given draft key is allowed decline the expense invite 

   Show arguments (1)    canMarkAsSpam   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can mark this expense as spam 

   canMarkAsUnpaid   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can mark this expense as unpaid 

   canMarkAsIncomplete   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can mark this expense as incomplete 

   canComment   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can comment and see comments for this expense 

   canUnschedulePayment   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can unschedule this expense payment 

   canVerifyDraftExpense   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can verify this draft expense 

   canUsePrivateNote   [Boolean](/../types/Boolean) !  Non-null 

   canHold   [Boolean](/../types/Boolean) !  Non-null 

   canRelease   [Boolean](/../types/Boolean) !  Non-null 

   canDownloadTaxForm   [Boolean](/../types/Boolean) !  Non-null 

   canSeePayoutMethodPrivateDetails   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can see the private details of the payout method of this expense 

   edit   [Permission](/../types/Permission) !  Non-null 

   editAccountingCategory   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can edit the expense accounting category 

   editTags   [Permission](/../types/Permission) !  Non-null 

   delete   [Permission](/../types/Permission) !  Non-null 

   seeInvoiceInfo   [Permission](/../types/Permission) !  Non-null 

   pay   [Permission](/../types/Permission) !  Non-null 

   approve   [Permission](/../types/Permission) !  Non-null 

   unapprove   [Permission](/../types/Permission) !  Non-null 

   reject   [Permission](/../types/Permission) !  Non-null 

   markAsSpam   [Permission](/../types/Permission) !  Non-null 

   markAsUnpaid   [Permission](/../types/Permission) !  Non-null 

   comment   [Permission](/../types/Permission) !  Non-null 

   usePrivateNote   [Permission](/../types/Permission) !  Non-null 

   unschedulePayment   [Permission](/../types/Permission) !  Non-null 

   verifyDraftExpense   [Permission](/../types/Permission) !  Non-null 

   hold   [Permission](/../types/Permission) !  Non-null 

   release   [Permission](/../types/Permission) !  Non-null 

   downloadTaxForm   [Permission](/../types/Permission) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *permissions* from [Expense](/../types/Expense)

 

---

 **Previous**   [ExpenseParsedFileInfo](/types/ExpenseParsedFileInfo) **Next**  [ExpenseProcessAction](/types/ExpenseProcessAction)

---


# ExpenseProcessActionEnum

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseProcessAction

# ExpenseProcessAction  Enum

  All supported expense types 

 ## Possible Values

 ## [#](#possible-values)

     APPROVE 

 To mark the expense as approved 

 

    UNAPPROVE 

 To mark the expense as pending after it has been approved 

 

    REQUEST\_RE\_APPROVAL 

 To request re-approval of the expense, marking it as pending. 

 

    REJECT 

 To mark the expense as rejected 

 

    MARK\_AS\_UNPAID 

 To mark the expense as unpaid (marks the transaction as refunded) 

 

    SCHEDULE\_FOR\_PAYMENT 

 To schedule the expense for payment 

 

    UNSCHEDULE\_PAYMENT 

 To unschedule the expense payment 

 

    PAY 

 To trigger the payment 

 

    MARK\_AS\_SPAM 

 To mark the expense as spam 

 

    MARK\_AS\_INCOMPLETE 

 To mark the expense as incomplete and notify the payee it requires more information 

 

    HOLD 

 To put the expense on hold 

 

    RELEASE 

 To release the expense from hold 

 

    DECLINE\_INVITED\_EXPENSE 

 To decline an invited expense 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *action* of field *processExpense*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ExpensePermissions](/types/ExpensePermissions) **Next**  [ExpenseQuote](/types/ExpenseQuote)

---


# ExpenseQuoteObject

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseQuote

# ExpenseQuote  Object

  Fields for an expense quote 

 ## Fields

 ## [#](#fields)

     sourceAmount   [Amount](/../types/Amount) !  Non-null 

 Amount of this item 

   paymentProcessorFeeAmount   [Amount](/../types/Amount) !  Non-null 

 Amount of payment processor fee 

   estimatedDeliveryAt   [DateTime](/../types/DateTime)  

 The date on which the item was created 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *quote* from [Expense](/../types/Expense)

 

---

 **Previous**   [ExpenseProcessAction](/types/ExpenseProcessAction) **Next**  [ExpenseReferenceInput](/types/ExpenseReferenceInput)

---


# ExpenseReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseReferenceInput

# ExpenseReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the expense (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The internal id of the expense (ie: 580) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *expense* of field *transactions*
 from type [Host](/../types/Host)

 * Argument *expense* of field *transactions*
 from type [Bot](/../types/Bot)

 * Argument *expense* of field *transactions*
 from type [Collective](/../types/Collective)

   Show more (16)   

---

 **Previous**   [ExpenseQuote](/types/ExpenseQuote) **Next**  [ExpenseStats](/types/ExpenseStats)

---


# ExpenseStatsObject

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseStats

# ExpenseStats  Object

  Expense statistics related to the given accounts 

 ## Fields

 ## [#](#fields)

     expensesCount   [Int](/../types/Int) !  Non-null 

 The total number of expenses 

   dailyAverageAmount   [Amount](/../types/Amount) !  Non-null 

 The daily average paid in expenses 

   invoicesCount   [Int](/../types/Int) !  Non-null 

 Number of invoices 

   reimbursementsCount   [Int](/../types/Int) !  Non-null 

 Number of reimbursements 

   grantsCount   [Int](/../types/Int) !  Non-null 

 Number of grants 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *expenseStats* from [Host](/../types/Host)

 

---

 **Previous**   [ExpenseReferenceInput](/types/ExpenseReferenceInput) **Next**  [ExpenseStatus](/types/ExpenseStatus)

---


# ExpenseStatusEnum

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseStatus

# ExpenseStatus  Enum

  ## Possible Values

 ## [#](#possible-values)

     DRAFT 

    UNVERIFIED 

    PENDING 

    INCOMPLETE 

    APPROVED 

    REJECTED 

    PROCESSING 

    ERROR 

    PAID 

    SCHEDULED\_FOR\_PAYMENT 

    SPAM 

    CANCELED 

    INVITE\_DECLINED 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *status* from [Expense](/../types/Expense)

 

---

 **Previous**   [ExpenseStats](/types/ExpenseStats) **Next**  [ExpenseStatusFilter](/types/ExpenseStatusFilter)

---


# ExpenseStatusFilterEnum

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseStatusFilter

# ExpenseStatusFilter  Enum

  Describes the values allowed to filter expenses, namely all the expense statuses and the special "READY\_TO\_PAY" value. 

 ## Possible Values

 ## [#](#possible-values)

     DRAFT 

    UNVERIFIED 

    PENDING 

    INCOMPLETE 

    APPROVED 

    REJECTED 

    PROCESSING 

    ERROR 

    PAID 

    SCHEDULED\_FOR\_PAYMENT 

    SPAM 

    CANCELED 

    INVITE\_DECLINED 

    READY\_TO\_PAY 

 Only expenses that are ready to be paid (must be approved, have the sufficiant balance and have the tax forms completed) 

 

    ON\_HOLD 

 Only expenses that are on hold 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *status* of field *expenses*
 from type [Host](/../types/Host)

 * Argument *status* of field *expenses*
 from type [Bot](/../types/Bot)

 * Argument *status* of field *expenses*
 from type [Collective](/../types/Collective)

   Show more (10)   

---

 **Previous**   [ExpenseStatus](/types/ExpenseStatus) **Next**  [ExpenseTaxInput](/types/ExpenseTaxInput)

---


# ExpenseTaxInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseTaxInput

# ExpenseTaxInput  Input Object

  Input to set taxes for an expense 

 ## Fields

 ## [#](#fields)

     idNumber   [String](/../types/String)  

 Tax identification number, if any 

 

    rate   [Float](/../types/Float) !  Non-null

 Tax rate as a float number between 0 and 1 

 

    type   [TaxType](/../types/TaxType) !  Non-null

   

---

 **Previous**   [ExpenseStatusFilter](/types/ExpenseStatusFilter) **Next**  [ExpenseType](/types/ExpenseType)

---


# ExpenseTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseType

# ExpenseType  Enum

  All supported expense types 

 ## Possible Values

 ## [#](#possible-values)

     INVOICE 

 Invoice: Charge for your time or get paid in advance. 

 

    RECEIPT 

 Receipt: Get paid back for a purchase already made. 

 

    FUNDING\_REQUEST 

 Funding Request: Request funding for a project or initiative. 

 

    GRANT 

 Grant: Request funding for a project or initiative. 

 

    UNCLASSIFIED 

 Unclassified expense 

 

    CHARGE 

 Credit Card Charge: Payment done using an issued (virtual) credit card issued by your Fiscal Host. 

 

    SETTLEMENT 

 Settlement: expense generated by Open Collective to collect money owed by Fiscal Hosts. 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *type* from [Expense](/../types/Expense)

 * Field *expensesTypes* from [AccountingCategory](/../types/AccountingCategory)

 * Argument *expenseType* of field *transactions*
 from type [Host](/../types/Host)

   Show more (43)   

---

 **Previous**   [ExpenseTaxInput](/types/ExpenseTaxInput) **Next**  [ExpenseUpdateInput](/types/ExpenseUpdateInput)

---


# ExpenseUpdateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseUpdateInput

# ExpenseUpdateInput  Input Object

  ## Fields

 ## [#](#fields)

     accountingCategory   [AccountingCategoryReferenceInput](/../types/AccountingCategoryReferenceInput)  

 The accounting category this expense belongs to 

 

    attachedFiles  [ [ExpenseAttachedFileInput](/../types/ExpenseAttachedFileInput) !] 

 (Optional) A list of files that you want to attach to this expense 

 

    attachments  [ [ExpenseItemInput](/../types/ExpenseItemInput) ] 

 @deprecated 2020-04-08: Please use the items field - The list of items for this expense. Total amount will be computed from them. 

 

    currency   [Currency](/../types/Currency)  

 Currency that should be used for the payout. Defaults to the account currency 

 

    customData   [JSON](/../types/JSON)  

 Custom data to be stored in the expense 

 

    description   [String](/../types/String)  

 Main title of the expense 

 

    id   [String](/../types/String) !  Non-null

 ID of the expense that you are trying to edit 

 

    invoiceFile   [ExpenseAttachedFileInput](/../types/ExpenseAttachedFileInput)  

 (Optional - applicable to invoice expense only) The invoice file for this expense 

 

    invoiceInfo   [String](/../types/String)  

 Tax ID, VAT number...etc This information will be printed on your invoice. 

 

    items  [ [ExpenseItemInput](/../types/ExpenseItemInput) ] 

 The list of items for this expense. Total amount will be computed from them. 

 

    longDescription   [String](/../types/String)  

 Longer text to attach to the expense 

 

    payee   [NewAccountOrReferenceInput](/../types/NewAccountOrReferenceInput)  

 Account to reimburse 

 

    payeeLocation   [LocationInput](/../types/LocationInput)  

 The address of the payee 

 

    payoutMethod   [PayoutMethodInput](/../types/PayoutMethodInput)  

 The payout method that will be used to reimburse the expense 

 

    privateMessage   [String](/../types/String)  

 A private note that will be attached to your invoice, as HTML 

 

    reference   [String](/../types/String)  

 User-provided reference number or any other identifier that references the invoice 

 

    tags  [ [String](/../types/String) ] 

 Tags associated to the expense (ie. Food, Engineering...) 

 

    tax  [ [ExpenseTaxInput](/../types/ExpenseTaxInput) ] 

 The list of taxes that should be applied to the expense (VAT, GST, etc...) 

 

    type   [ExpenseType](/../types/ExpenseType)  

 The type of the expense 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *expense* of field *editExpense*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ExpenseType](/types/ExpenseType) **Next**  [ExpenseValuesByRole](/types/ExpenseValuesByRole)

---


# ExpenseValuesByRoleObject

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseValuesByRole

# ExpenseValuesByRole  Object

  ## Fields

 ## [#](#fields)

     id   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

   submitter   [ExpenseValuesRoleDetails](/../types/ExpenseValuesRoleDetails)  

 The values provided by the expense submitter(s) 

   accountAdmin   [ExpenseValuesRoleDetails](/../types/ExpenseValuesRoleDetails)  

 The values provided by the account admin(s) 

   hostAdmin   [ExpenseValuesRoleDetails](/../types/ExpenseValuesRoleDetails)  

 The values provided by the host admin(s) 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *valuesByRole* from [Expense](/../types/Expense)

 

---

 **Previous**   [ExpenseUpdateInput](/types/ExpenseUpdateInput) **Next**  [ExpenseValuesRoleDetails](/types/ExpenseValuesRoleDetails)

---


# ExpenseValuesRoleDetailsObject

Source: https://graphql-docs-v2.opencollective.com/types/ExpenseValuesRoleDetails

# ExpenseValuesRoleDetails  Object

  ## Fields

 ## [#](#fields)

     accountingCategory   [AccountingCategory](/../types/AccountingCategory)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *submitter* from [ExpenseValuesByRole](/../types/ExpenseValuesByRole)

 * Field *accountAdmin* from [ExpenseValuesByRole](/../types/ExpenseValuesByRole)

 * Field *hostAdmin* from [ExpenseValuesByRole](/../types/ExpenseValuesByRole)

 

---

 **Previous**   [ExpenseValuesByRole](/types/ExpenseValuesByRole) **Next**  [FeesPayer](/types/FeesPayer)

---


# FeesPayerEnum

Source: https://graphql-docs-v2.opencollective.com/types/FeesPayer

# FeesPayer  Enum

  All supported expense types 

 ## Possible Values

 ## [#](#possible-values)

     COLLECTIVE 

 The collective will be responsible for paying the fees 

 

    PAYEE 

 The payee will be responsible for paying the fees (they'll be deduced from the total amount) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *feesPayer* from [Expense](/../types/Expense)

 

---

 **Previous**   [ExpenseValuesRoleDetails](/types/ExpenseValuesRoleDetails) **Next**  [FileInfo](/types/FileInfo)

---


# FileInfoInterface

Source: https://graphql-docs-v2.opencollective.com/types/FileInfo

# FileInfo  Interface

  Exposes information about an uploaded file (image, pdf, etc.) 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for the file 

   url   [URL](/../types/URL) !  Non-null 

 URL to access the file 

   name   [String](/../types/String)  

 Name of the file 

   type   [String](/../types/String) !  Non-null 

 Mime type of the file 

   size   [Int](/../types/Int)  

 Size of the file in bytes 

  ## Implementations

 ## [#](#implementations)

 
 Implemented by [ImageFileInfo](/../types/ImageFileInfo) , [GenericFileInfo](/../types/GenericFileInfo) .  ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *invoiceFile* from [Expense](/../types/Expense)

 * Field *attachment* from [Agreement](/../types/Agreement)

 * Field *file* from [TransactionsImport](/../types/TransactionsImport)

   Show more (6)   

---

 **Previous**   [FeesPayer](/types/FeesPayer) **Next**  [Float](/types/Float)

---


# FloatScalar

Source: https://graphql-docs-v2.opencollective.com/types/Float

# Float  Scalar

  The `Float`  scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point) . 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hostFeePercent* from [Order](/../types/Order)

 * Field *rate* from [TaxInfo](/../types/TaxInfo)

 * Field *accountCurrencyFxRate* from [Expense](/../types/Expense)

   Show more (38)   

---

 **Previous**   [FileInfo](/types/FileInfo) **Next**  [FollowAccountResult](/types/FollowAccountResult)

---


# FollowAccountResultObject

Source: https://graphql-docs-v2.opencollective.com/types/FollowAccountResult

# FollowAccountResult  Object

  ## Fields

 ## [#](#fields)

     individual   [Individual](/../types/Individual) !  Non-null 

   member   [Member](/../types/Member) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *followAccount* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [Float](/types/Float) **Next**  [Fund](/types/Fund)

---


# FundObject

Source: https://graphql-docs-v2.opencollective.com/types/Fund

# Fund  Object

  This represents an Project account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id identifying the account (ie: 5v08jk63-w4g9nbpz-j7qmyder-p7ozax5g) 

   legacyId   [Int](/../types/Int) !  Non-null 

 The internal database identifier of the collective (ie: 580) 

   slug   [String](/../types/String) !  Non-null 

 The slug identifying the account (ie: babel) 

   type   [AccountType](/../types/AccountType) !  Non-null 

 The type of the account (BOT/COLLECTIVE/EVENT/ORGANIZATION/INDIVIDUAL/VENDOR) 

   name   [String](/../types/String)  

 Public name 

   legalName   [String](/../types/String)  

 Private, legal name. Used for expense receipts, taxes, etc. Scope: "account". 

   description   [String](/../types/String)  

   longDescription   [String](/../types/String)  

   tags  [ [String](/../types/String) ] 

   website   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   twitterHandle   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   githubHandle   [String](/../types/String)    Deprecated 2022-06-03: Please use repositoryUrl 

   repositoryUrl   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   socialLinks  [ [SocialLink](/../types/SocialLink) !]!  Non-null 

   currency   [Currency](/../types/Currency) !  Non-null 

 The currency of the account 

   expensePolicy   [String](/../types/String)    Deprecated 2024-11-04: Please use policies.EXPENSE\_POLICIES 

   isIncognito   [Boolean](/../types/Boolean) !  Non-null 

 Defines if the contributors wants to be incognito (name not displayed) 

   imageUrl   [String](/../types/String)  

   Show arguments (2)    backgroundImageUrl   [String](/../types/String)  

   Show arguments (2)    createdAt   [DateTime](/../types/DateTime)  

 The time of creation 

   updatedAt   [DateTime](/../types/DateTime)  

 The time of last update 

   unhostedAt   [DateTime](/../types/DateTime)  

 Date of unhosting by a given Fiscal Host. 

   Show arguments (1)    isArchived   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether this account is archived 

   isFrozen   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account is frozen 

   isActive   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether it's active: can accept financial contributions and pay expenses. 

   isHost   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether the account is setup to Host collectives. 

   isAdmin   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user is an admin of this account 

   parentAccount   [Account](/../types/Account)    Deprecated 2022-12-16: use parent on AccountWithParent instead 

   members   [MemberCollection](/../types/MemberCollection) !  Non-null 

 Get all members (admins, members, backers, followers) 

   Show arguments (7)    memberInvitations  [ [MemberInvitation](/../types/MemberInvitation) ] 

 [AUTHENTICATED] Returns the pending invitations 

   Show arguments (3)    legalDocuments  [ [LegalDocument](/../types/LegalDocument) ] 

 The legal documents associated with this account 

   Show arguments (1)    memberOf   [MemberOfCollection](/../types/MemberOfCollection) !  Non-null 

   Show arguments (13)    emails  [ [EmailAddress](/../types/EmailAddress) !] 

 Returns the emails of the account. Individuals only have one, but organizations can have multiple emails. 

   transactions   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   Show arguments (34)    orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

   Show arguments (28)    expenses   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   Show arguments (26)    settings   [JSON](/../types/JSON) !  Non-null 

   conversations   [ConversationCollection](/../types/ConversationCollection) !  Non-null 

   Show arguments (3)    conversationsTags  [ [TagStat](/../types/TagStat) ] 

 Returns conversation's tags for collective sorted by popularity 

   Show arguments (1)    expensesTags  [ [TagStat](/../types/TagStat) ] 

 Returns expense tags for collective sorted by popularity 

   Show arguments (1)    supportedExpenseTypes  [ [ExpenseType](/../types/ExpenseType) !]!  Non-null 

 The list of expense types supported by this account 

   transferwise   [TransferWise](/../types/TransferWise)  

   payoutMethods  [ [PayoutMethod](/../types/PayoutMethod) ] 

 The list of payout methods that this collective can use to get paid. In most cases, admin only and scope: "expenses". 

   Show arguments (1)    paymentMethods  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods that this collective can use to pay for Orders. Admin or Host only. Scope: "orders". 

   Show arguments (3)    paymentMethodsWithPendingConfirmation  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods for this account that are pending a client confirmation (3D Secure / SCA) 

   connectedAccounts  [ [ConnectedAccount](/../types/ConnectedAccount) ] 

 The list of connected accounts (Stripe, PayPal, etc ...). Admin only. Scope: "connectedAccounts". 

   oAuthApplications   [OAuthApplicationCollection](/../types/OAuthApplicationCollection)  

 The list of applications created by this account. Admin only. Scope: "applications". 

   Show arguments (2)    location   [Location](/../types/Location)  

 The address associated to this account. This field is always public for collectives and events. 

   categories  [ [String](/../types/String) ]!  Non-null 

 Categories set by Open Collective to help moderation. 

   stats   [AccountStats](/../types/AccountStats)  

   canHaveChangelogUpdates   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account can have changelog updates 

   updates   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

 Updates published by the account. To see unpublished updates, you need to be an admin and have the scope "updates". 

   Show arguments (7)    features   [CollectiveFeatures](/../types/CollectiveFeatures) !  Non-null 

 Describes the features enabled and available for this account 

   virtualCards   [VirtualCardCollection](/../types/VirtualCardCollection)  

 Virtual Cards attached to the account. Admin only. Scope: "virtualCards". 

   Show arguments (7)    virtualCardMerchants   [AccountCollection](/../types/AccountCollection)  

 Virtual Cards Merchants used by the account. Admin only. Scope: "virtualCards". 

   Show arguments (2)    childrenAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (6)    policies   [Policies](/../types/Policies) !  Non-null 

 Policies for the account. To see non-public policies you need to be admin and have the scope: "account". 

   activitySubscriptions  [ [ActivitySubscription](/../types/ActivitySubscription) ] 

 List of activities that the logged-in user is subscribed for this collective 

   Show arguments (1)    permissions   [AccountPermissions](/../types/AccountPermissions) !  Non-null 

 Logged-in user permissions on an account 

   hostApplicationRequests   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

 Host application requests 

   Show arguments (4)    feed  [ [Activity](/../types/Activity) ] 

   Show arguments (3)    duplicatedFromAccount   [Account](/../types/Account)  

 If created by duplication, the account from which this one was duplicated 

   duplicatedAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

 If this account was duplicated, the accounts that were created from it 

   Show arguments (2)    transactionGroups   [TransactionGroupCollection](/../types/TransactionGroupCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (6)    transactionReports   [TransactionReports](/../types/TransactionReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)    webhooks   [WebhookCollection](/../types/WebhookCollection) !  Non-null 

   Show arguments (3)    host   [Host](/../types/Host)  

 Returns the Fiscal Host 

   hostFeesStructure   [HostFeeStructure](/../types/HostFeeStructure)  

 Describe how the host charges the collective 

   hostFeePercent   [Float](/../types/Float)  

 Fees percentage that the host takes for this collective 

   Show arguments (2)    hostApplication   [HostApplication](/../types/HostApplication)  

 Returns the Fiscal Host application 

   platformFeePercent   [Float](/../types/Float) !  Non-null 

 How much platform fees are charged for this account 

   approvedAt   [DateTime](/../types/DateTime)  

 Date of approval by the Fiscal Host. 

   unfrozenAt   [DateTime](/../types/DateTime)  

 Date when the collective was last unfrozen by current Fiscal Host 

   isApproved   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether it's approved by the Fiscal Host 

   hostAgreements   [AgreementCollection](/../types/AgreementCollection)  

 Returns agreements this account has with its host, or null if not enough permissions. 

   Show arguments (2)    summary   [HostedAccountSummary](/../types/HostedAccountSummary)  

   Show arguments (2)    totalFinancialContributors   [Int](/../types/Int) !  Non-null 

 Number of unique financial contributors. 

   Show arguments (1)    tiers   [TierCollection](/../types/TierCollection) !  Non-null 

   Show arguments (2)    contributors   [ContributorCollection](/../types/ContributorCollection) !  Non-null 

 All the persons and entities that contribute to this account 

   Show arguments (3)    activeContributors   [AccountCollection](/../types/AccountCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (5)    platformContributionAvailable   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if a custom contribution to Open Collective can be submitted for contributions made to this account 

   contributionPolicy   [String](/../types/String)  

   canStartResumeContributionsProcess   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user can start the process to resume contributions for account 

   hasResumeContributionsProcessStarted   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the account has started the process to resume contributions 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Account](/../types/Account) , [AccountWithHost](/../types/AccountWithHost) , [AccountWithContributions](/../types/AccountWithContributions) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *fund* from [Query](/../types/Query)

 * Field *createFund* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [FollowAccountResult](/types/FollowAccountResult) **Next**  [FundCreateInput](/types/FundCreateInput)

---


# FundCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/FundCreateInput

# FundCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     backgroundImage   [Upload](/../types/Upload)  

 The profile background image, for the banner and social media sharing 

 

    description   [String](/../types/String) !  Non-null

    image   [Upload](/../types/Upload)  

 The profile avatar image 

 

    name   [String](/../types/String) !  Non-null

    settings   [JSON](/../types/JSON)  

    slug   [String](/../types/String) !  Non-null

    tags  [ [String](/../types/String) ] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *fund* of field *createFund*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Fund](/types/Fund) **Next**  [GenericFileInfo](/types/GenericFileInfo)

---


# GenericFileInfoObject

Source: https://graphql-docs-v2.opencollective.com/types/GenericFileInfo

# GenericFileInfo  Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for the file 

   url   [URL](/../types/URL) !  Non-null 

 URL to access the file 

   name   [String](/../types/String)  

 Name of the file 

   type   [String](/../types/String) !  Non-null 

 Mime type of the file 

   size   [Int](/../types/Int)  

 Size of the file in bytes 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [FileInfo](/../types/FileInfo) .

 

---

 **Previous**   [FundCreateInput](/types/FundCreateInput) **Next**  [GuestInfoInput](/types/GuestInfoInput)

---


# GuestInfoInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/GuestInfoInput

# GuestInfoInput  Input Object

  Input type for guest contributions 

 ## Fields

 ## [#](#fields)

     captcha   [CaptchaInput](/../types/CaptchaInput)  

 Captcha validation for creating an order 

 

    email   [EmailAddress](/../types/EmailAddress) !  Non-null

 Contributor's email 

 

    legalName   [String](/../types/String)  

 Legal name of the user 

 

    location   [LocationInput](/../types/LocationInput)  

 Address of the user, mandatory when amount is above $5000. 

 

    name   [String](/../types/String)  

 Display name of the user 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *guestInfo* of field *createPaymentIntent*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [GenericFileInfo](/types/GenericFileInfo) **Next**  [Host](/types/Host)

---


# HostObject

Source: https://graphql-docs-v2.opencollective.com/types/Host

# Host  Object

  This represents an Host account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id identifying the account (ie: 5v08jk63-w4g9nbpz-j7qmyder-p7ozax5g) 

   legacyId   [Int](/../types/Int) !  Non-null 

 The internal database identifier of the collective (ie: 580) 

   slug   [String](/../types/String) !  Non-null 

 The slug identifying the account (ie: babel) 

   type   [AccountType](/../types/AccountType) !  Non-null 

 The type of the account (BOT/COLLECTIVE/EVENT/ORGANIZATION/INDIVIDUAL/VENDOR) 

   name   [String](/../types/String)  

 Public name 

   legalName   [String](/../types/String)  

 Private, legal name. Used for expense receipts, taxes, etc. Scope: "account". 

   description   [String](/../types/String)  

   longDescription   [String](/../types/String)  

   tags  [ [String](/../types/String) ] 

   website   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   twitterHandle   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   githubHandle   [String](/../types/String)    Deprecated 2022-06-03: Please use repositoryUrl 

   repositoryUrl   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   socialLinks  [ [SocialLink](/../types/SocialLink) !]!  Non-null 

   currency   [Currency](/../types/Currency) !  Non-null 

 The currency of the account 

   expensePolicy   [String](/../types/String)    Deprecated 2024-11-04: Please use policies.EXPENSE\_POLICIES 

   isIncognito   [Boolean](/../types/Boolean) !  Non-null 

 Defines if the contributors wants to be incognito (name not displayed) 

   imageUrl   [String](/../types/String)  

   Show arguments (2)    backgroundImageUrl   [String](/../types/String)  

   Show arguments (2)    createdAt   [DateTime](/../types/DateTime)  

 The time of creation 

   updatedAt   [DateTime](/../types/DateTime)  

 The time of last update 

   unhostedAt   [DateTime](/../types/DateTime)  

 Date of unhosting by a given Fiscal Host. 

   Show arguments (1)    isArchived   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether this account is archived 

   isFrozen   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account is frozen 

   isActive   [Boolean](/../types/Boolean)  

 Returns whether the account accepts financial contributions. 

   isHost   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether the account is setup to Host collectives. 

   isAdmin   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user is an admin of this account 

   parentAccount   [Account](/../types/Account)    Deprecated 2022-12-16: use parent on AccountWithParent instead 

   members   [MemberCollection](/../types/MemberCollection) !  Non-null 

 Get all members (admins, members, backers, followers) 

   Show arguments (7)    memberInvitations  [ [MemberInvitation](/../types/MemberInvitation) ] 

 [AUTHENTICATED] Returns the pending invitations 

   Show arguments (3)    legalDocuments  [ [LegalDocument](/../types/LegalDocument) ] 

 The legal documents associated with this account 

   Show arguments (1)    memberOf   [MemberOfCollection](/../types/MemberOfCollection) !  Non-null 

   Show arguments (13)    emails  [ [EmailAddress](/../types/EmailAddress) !] 

 Returns the emails of the account. Individuals only have one, but organizations can have multiple emails. 

   transactions   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   Show arguments (34)    orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

   Show arguments (28)    expenses   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   Show arguments (26)    settings   [JSON](/../types/JSON) !  Non-null 

   conversations   [ConversationCollection](/../types/ConversationCollection) !  Non-null 

   Show arguments (3)    conversationsTags  [ [TagStat](/../types/TagStat) ] 

 Returns conversation's tags for collective sorted by popularity 

   Show arguments (1)    expensesTags  [ [TagStat](/../types/TagStat) ] 

 Returns expense tags for collective sorted by popularity 

   Show arguments (1)    supportedExpenseTypes  [ [ExpenseType](/../types/ExpenseType) !]!  Non-null 

 The list of expense types supported by this account 

   transferwise   [TransferWise](/../types/TransferWise)  

   payoutMethods  [ [PayoutMethod](/../types/PayoutMethod) ] 

 The list of payout methods that this collective can use to get paid. In most cases, admin only and scope: "expenses". 

   Show arguments (1)    paymentMethods  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods that this collective can use to pay for Orders. Admin or Host only. Scope: "orders". 

   Show arguments (3)    paymentMethodsWithPendingConfirmation  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods for this account that are pending a client confirmation (3D Secure / SCA) 

   connectedAccounts  [ [ConnectedAccount](/../types/ConnectedAccount) ] 

 The list of connected accounts (Stripe, PayPal, etc ...). Admin only. Scope: "connectedAccounts". 

   oAuthApplications   [OAuthApplicationCollection](/../types/OAuthApplicationCollection)  

 The list of applications created by this account. Admin only. Scope: "applications". 

   Show arguments (2)    location   [Location](/../types/Location)  

 The address associated to this account. This field is always public for collectives and events. 

   categories  [ [String](/../types/String) ]!  Non-null 

 Categories set by Open Collective to help moderation. 

   stats   [AccountStats](/../types/AccountStats)  

   canHaveChangelogUpdates   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account can have changelog updates 

   updates   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

 Updates published by the account. To see unpublished updates, you need to be an admin and have the scope "updates". 

   Show arguments (7)    features   [CollectiveFeatures](/../types/CollectiveFeatures) !  Non-null 

 Describes the features enabled and available for this account 

   virtualCards   [VirtualCardCollection](/../types/VirtualCardCollection)  

 Virtual Cards attached to the account. Admin only. Scope: "virtualCards". 

   Show arguments (7)    virtualCardMerchants   [AccountCollection](/../types/AccountCollection)  

 Virtual Cards Merchants used by the account. Admin only. Scope: "virtualCards". 

   Show arguments (2)    childrenAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (6)    policies   [Policies](/../types/Policies) !  Non-null 

 Policies for the account. To see non-public policies you need to be admin and have the scope: "account". 

   activitySubscriptions  [ [ActivitySubscription](/../types/ActivitySubscription) ] 

 List of activities that the logged-in user is subscribed for this collective 

   Show arguments (1)    permissions   [AccountPermissions](/../types/AccountPermissions) !  Non-null 

 Logged-in user permissions on an account 

   hostApplicationRequests   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

 Host application requests 

   Show arguments (4)    feed  [ [Activity](/../types/Activity) ] 

   Show arguments (3)    duplicatedFromAccount   [Account](/../types/Account)  

 If created by duplication, the account from which this one was duplicated 

   duplicatedAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

 If this account was duplicated, the accounts that were created from it 

   Show arguments (2)    transactionGroups   [TransactionGroupCollection](/../types/TransactionGroupCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (6)    transactionReports   [TransactionReports](/../types/TransactionReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)    webhooks   [WebhookCollection](/../types/WebhookCollection) !  Non-null 

   Show arguments (3)    totalFinancialContributors   [Int](/../types/Int) !  Non-null 

 Number of unique financial contributors. 

   Show arguments (1)    tiers   [TierCollection](/../types/TierCollection) !  Non-null 

   Show arguments (2)    contributors   [ContributorCollection](/../types/ContributorCollection) !  Non-null 

 All the persons and entities that contribute to this account 

   Show arguments (3)    activeContributors   [AccountCollection](/../types/AccountCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (5)    platformFeePercent   [Float](/../types/Float) !  Non-null 

 How much platform fees are charged for this account 

   platformContributionAvailable   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if a custom contribution to Open Collective can be submitted for contributions made to this account 

   contributionPolicy   [String](/../types/String)  

   canStartResumeContributionsProcess   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user can start the process to resume contributions for account 

   hasResumeContributionsProcessStarted   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the account has started the process to resume contributions 

   accountingCategories   [AccountingCategoryCollection](/../types/AccountingCategoryCollection) !  Non-null 

 List of accounting categories for this host 

   Show arguments (2)    hostFeePercent   [Float](/../types/Float)  

   totalHostedCollectives   [Int](/../types/Int)    Deprecated 2023-03-20: Renamed to totalHostedAccounts 

   totalHostedAccounts   [Int](/../types/Int)  

   isOpenToApplications   [Boolean](/../types/Boolean)  

   termsUrl   [URL](/../types/URL)  

   plan   [HostPlan](/../types/HostPlan) !  Non-null 

   hostTransactionsReports   [HostTransactionReports](/../types/HostTransactionReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)    hostMetrics   [HostMetrics](/../types/HostMetrics) !  Non-null 

   Show arguments (3)    hostMetricsTimeSeries   [HostMetricsTimeSeries](/../types/HostMetricsTimeSeries) !  Non-null 

   Show arguments (4)    hostExpensesReport   [HostExpensesReports](/../types/HostExpensesReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)    supportedPaymentMethods  [ [PaymentMethodLegacyType](/../types/PaymentMethodLegacyType) ] 

 The list of payment methods (Stripe, Paypal, manual bank transfer, etc ...) the Host can accept for its Collectives 

   bankAccount   [PayoutMethod](/../types/PayoutMethod)  

   paypalPreApproval   [PaymentMethod](/../types/PaymentMethod)  

 Paypal preapproval info. Returns null if PayPal account is not connected. 

   paypalClientId   [String](/../types/String)  

 If the host supports PayPal, this will contain the client ID to use in the frontend 

   supportedPayoutMethods  [ [PayoutMethodType](/../types/PayoutMethodType) ] 

 The list of payout methods this Host accepts for its expenses 

   stripe   [StripeConnectedAccount](/../types/StripeConnectedAccount)  

 Stripe connected account 

   hostApplications   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

 Applications for this host 

   Show arguments (6)    pendingApplications   [HostApplicationCollection](/../types/HostApplicationCollection) !   Deprecated 2023-08-25: Deprecated in favour of host.hostApplications(status: PENDING).  Non-null 

 Pending applications for this host 

   Show arguments (4)    hostedVirtualCards   [VirtualCardCollection](/../types/VirtualCardCollection) !  Non-null 

   Show arguments (12)    hostedVirtualCardMerchants   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (2)    hostedVirtualCardCollectives   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (2)    contributionStats   [ContributionStats](/../types/ContributionStats) !  Non-null 

   Show arguments (4)    expenseStats   [ExpenseStats](/../types/ExpenseStats) !  Non-null 

   Show arguments (4)    isTrustedHost   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether the host is trusted or not 

   hasDisputedOrders   [Boolean](/../types/Boolean)  

 Returns whether the host has any Stripe disputed orders 

   hasInReviewOrders   [Boolean](/../types/Boolean)  

 Returns whether the host has any Stripe in review orders 

   hostedAccountAgreements   [AgreementCollection](/../types/AgreementCollection) !  Non-null 

 Returns agreements with Hosted Accounts 

   Show arguments (3)    vendors   [VendorCollection](/../types/VendorCollection) !  Non-null 

 Returns a list of vendors that works with this host 

   Show arguments (5)    potentialVendors   [AccountCollection](/../types/AccountCollection) !  Non-null 

 Returns a list of organizations that only transacted with this host and all its admins are also admins of this host. 

   Show arguments (2)    hostedAccounts   [HostedAccountCollection](/../types/HostedAccountCollection) !  Non-null 

 Returns a list of accounts hosted by this host 

   Show arguments (12)    requiredLegalDocuments  [ [LegalDocumentType](/../types/LegalDocumentType) !]!  Non-null 

 Returns the legal documents required by this host 

   hostedLegalDocuments   [LegalDocumentCollection](/../types/LegalDocumentCollection) !  Non-null 

 Returns legal documents hosted by this host 

   Show arguments (9)    transactionsImports   [TransactionsImportsCollection](/../types/TransactionsImportsCollection) !  Non-null 

 Returns a list of transactions imports for this host 

   Show arguments (3)    transactionsImportsSources  [ [NonEmptyString](/../types/NonEmptyString) ]!  Non-null 

 Returns a list of transactions imports sources for this host 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Account](/../types/Account) , [AccountWithContributions](/../types/AccountWithContributions) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *host* from [Expense](/../types/Expense)

 * Field *account* from [AccountingCategory](/../types/AccountingCategory)

 * Field *host* from [HostApplication](/../types/HostApplication)

   Show more (17)   

---

 **Previous**   [GuestInfoInput](/types/GuestInfoInput) **Next**  [HostApplication](/types/HostApplication)

---


# HostApplicationObject

Source: https://graphql-docs-v2.opencollective.com/types/HostApplication

# HostApplication  Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   account   [Account](/../types/Account) !  Non-null 

 The account who applied to this host 

   host   [Host](/../types/Host) !  Non-null 

 The host the collective applied to 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

 The date on which the item was created 

   updatedAt   [DateTime](/../types/DateTime) !  Non-null 

 The date on which the item was updated 

   status   [HostApplicationStatus](/../types/HostApplicationStatus)  

   message   [String](/../types/String)  

   customData   [JSON](/../types/JSON)  

   comments   [CommentCollection](/../types/CommentCollection)  

 Returns the list of comments for this host application, or `null`  if user is not allowed to see them 

   Show arguments (3)    ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hostApplication* from [Comment](/../types/Comment)

 * Field *nodes* from [HostApplicationCollection](/../types/HostApplicationCollection)

 * Field *hostApplication* from [Collective](/../types/Collective)

   Show more (8)   

---

 **Previous**   [Host](/types/Host) **Next**  [HostApplicationCollection](/types/HostApplicationCollection)

---


# HostApplicationCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/HostApplicationCollection

# HostApplicationCollection  Object

  A collection of "HostApplication" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [HostApplication](/../types/HostApplication) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hostApplicationRequests* from [Host](/../types/Host)

 * Field *hostApplications* from [Host](/../types/Host)

 * Field *pendingApplications* from [Host](/../types/Host)

   Show more (12)   

---

 **Previous**   [HostApplication](/types/HostApplication) **Next**  [HostApplicationReferenceInput](/types/HostApplicationReferenceInput)

---


# HostApplicationReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/HostApplicationReferenceInput

# HostApplicationReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the host application (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *hostApplication* of field *hostApplication*
 from type [Query](/../types/Query)

 * Argument *hostApplication* of field *processHostApplication*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [HostApplicationCollection](/types/HostApplicationCollection) **Next**  [HostApplicationStatus](/types/HostApplicationStatus)

---


# HostApplicationStatusEnum

Source: https://graphql-docs-v2.opencollective.com/types/HostApplicationStatus

# HostApplicationStatus  Enum

  ## Possible Values

 ## [#](#possible-values)

     PENDING 

    APPROVED 

    REJECTED 

    EXPIRED 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *status* of field *hostApplicationRequests*
 from type [Host](/../types/Host)

 * Argument *status* of field *hostApplications*
 from type [Host](/../types/Host)

 * Field *status* from [HostApplication](/../types/HostApplication)

   Show more (11)   

---

 **Previous**   [HostApplicationReferenceInput](/types/HostApplicationReferenceInput) **Next**  [HostCollection](/types/HostCollection)

---


# HostCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/HostCollection

# HostCollection  Object

  A collection of "Hosts" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Host](/../types/Host) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hosts* from [Query](/../types/Query)

 

---

 **Previous**   [HostApplicationStatus](/types/HostApplicationStatus) **Next**  [HostExpensesReportNode](/types/HostExpensesReportNode)

---


# HostExpensesReportNodeObject

Source: https://graphql-docs-v2.opencollective.com/types/HostExpensesReportNode

# HostExpensesReportNode  Object

  ## Fields

 ## [#](#fields)

     date   [DateTime](/../types/DateTime) !  Non-null 

   isHost   [Boolean](/../types/Boolean) !  Non-null 

   accountingCategory   [AccountingCategory](/../types/AccountingCategory)  

   amount   [Amount](/../types/Amount) !  Non-null 

   count   [Int](/../types/Int) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [HostExpensesReports](/../types/HostExpensesReports)

 

---

 **Previous**   [HostCollection](/types/HostCollection) **Next**  [HostExpensesReports](/types/HostExpensesReports)

---


# HostExpensesReportsObject

Source: https://graphql-docs-v2.opencollective.com/types/HostExpensesReports

# HostExpensesReports  Object

  EXPERIMENTAL (this may change or be deleted): Host expenses report 

 ## Fields

 ## [#](#fields)

     dateFrom   [DateTime](/../types/DateTime)  

 The start date of the time series 

   dateTo   [DateTime](/../types/DateTime)  

 The end date of the time series 

   timeUnit   [TimeUnit](/../types/TimeUnit) !  Non-null 

 The interval between two data points 

   nodes  [ [HostExpensesReportNode](/../types/HostExpensesReportNode) !] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hostExpensesReport* from [Host](/../types/Host)

 

---

 **Previous**   [HostExpensesReportNode](/types/HostExpensesReportNode) **Next**  [HostFeeStructure](/types/HostFeeStructure)

---


# HostFeeStructureEnum

Source: https://graphql-docs-v2.opencollective.com/types/HostFeeStructure

# HostFeeStructure  Enum

  All supported expense types 

 ## Possible Values

 ## [#](#possible-values)

     DEFAULT 

 Use global host fees 

 

    CUSTOM\_FEE 

 Custom fee for this Collective only 

 

    MONTHLY\_RETAINER 

 Set a monthly retainer for this Collective 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *hostFeesStructure* of field *memberOf*
 from type [Host](/../types/Host)

 * Argument *hostFeesStructure* of field *hostedAccounts*
 from type [Host](/../types/Host)

 * Argument *hostFeesStructure* of field *memberOf*
 from type [Bot](/../types/Bot)

   Show more (14)   

---

 **Previous**   [HostExpensesReports](/types/HostExpensesReports) **Next**  [HostMetrics](/types/HostMetrics)

---


# HostMetricsObject

Source: https://graphql-docs-v2.opencollective.com/types/HostMetrics

# HostMetrics  Object

  Host metrics related to collected and pending fees/tips. 

 ## Fields

 ## [#](#fields)

     hostFees   [Amount](/../types/Amount)  

 Amount collected in host fees for given period 

   platformFees   [Amount](/../types/Amount)  

 Amount collected in platform fees for given period 

   pendingPlatformFees   [Amount](/../types/Amount)  

 Amount collected in platform fees requiring settlement 

   platformTips   [Amount](/../types/Amount)  

 Amount collected in platform tips for given period 

   pendingPlatformTips   [Amount](/../types/Amount)  

 Amount collected in platform tips requiring settlement 

   hostFeeShare   [Amount](/../types/Amount)  

 Amount in host fee shared with the platform 

   pendingHostFeeShare   [Amount](/../types/Amount)  

 Amount in host fee shared requiring settlement 

   settledHostFeeShare   [Amount](/../types/Amount)  

 Amount in host fee shared not requiring settlement 

   totalMoneyManaged   [Amount](/../types/Amount)  

 Total amount managed on behalf of hosted collectives 

   hostFeeSharePercent   [Float](/../types/Float)  

 Host fee sharing percent 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hostMetrics* from [Host](/../types/Host)

 

---

 **Previous**   [HostFeeStructure](/types/HostFeeStructure) **Next**  [HostMetricsTimeSeries](/types/HostMetricsTimeSeries)

---


# HostMetricsTimeSeriesObject

Source: https://graphql-docs-v2.opencollective.com/types/HostMetricsTimeSeries

# HostMetricsTimeSeries  Object

  Host metrics time series 

 ## Fields

 ## [#](#fields)

     dateFrom   [DateTime](/../types/DateTime)  

 The start date of the time series 

   dateTo   [DateTime](/../types/DateTime)  

 The end date of the time series 

   timeUnit   [TimeUnit](/../types/TimeUnit) !  Non-null 

 The interval between two data points 

   platformTips   [TimeSeriesAmount](/../types/TimeSeriesAmount) !  Non-null 

 History of the collected platform tips 

   hostFees   [TimeSeriesAmount](/../types/TimeSeriesAmount) !  Non-null 

 History of the host fees collected 

   hostFeeShare   [TimeSeriesAmountWithSettlement](/../types/TimeSeriesAmountWithSettlement) !  Non-null 

 History of the share of host fees collected owed to Open Collective Inc. 

   totalMoneyManaged   [TimeSeriesAmount](/../types/TimeSeriesAmount) !  Non-null 

 History of the total money managed by this host 

   totalReceived   [TimeSeriesAmountWithKind](/../types/TimeSeriesAmountWithKind) !  Non-null 

 History of the total money received by this host 

   totalSpent   [TimeSeriesAmountWithKind](/../types/TimeSeriesAmountWithKind) !  Non-null 

 History of the total money spent by this host 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hostMetricsTimeSeries* from [Host](/../types/Host)

 

---

 **Previous**   [HostMetrics](/types/HostMetrics) **Next**  [HostPlan](/types/HostPlan)

---


# HostPlanObject

Source: https://graphql-docs-v2.opencollective.com/types/HostPlan

# HostPlan  Object

  The name of the current plan and its characteristics. 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the account (ie: 5v08jk63-w4g9nbpz-j7qmyder-p7ozax5g) 

   name   [String](/../types/String)  

 The name of the plan 

   hostedCollectives   [Int](/../types/Int)  

 Number of collectives hosted 

   hostedCollectivesLimit   [Int](/../types/Int)  

 Max number of collectives than can be hosted 

   addedFunds   [Int](/../types/Int)  

 Whether this plan allows to use the added funds feature 

   addedFundsLimit   [Int](/../types/Int)  

 Amount limit for the added funds feature under this plan 

   hostDashboard   [Boolean](/../types/Boolean)  

 Whether this plan allows to use the host dashboard 

   manualPayments   [Boolean](/../types/Boolean)  

 Whether this plan allows to use the manual payments feature 

   bankTransfers   [Int](/../types/Int)  

 Whether this plan allows to use the bank transfers feature 

   bankTransfersLimit   [Int](/../types/Int)  

 Amount limit for the bank transfers feature under this plan 

   transferwisePayouts   [Int](/../types/Int)  

 Whether this plan allows to use the transferwise payouts feature 

   transferwisePayoutsLimit   [Int](/../types/Int)  

 Amount limit for the transferwise payouts feature under this plan 

   hostFees   [Boolean](/../types/Boolean)  

 Ability to charge Host Fees. 

   hostFeeSharePercent   [Float](/../types/Float)  

 Charge on revenues made through Host Fees. 

   platformTips   [Boolean](/../types/Boolean)  

 Ability to collect Platform Tips. 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *plan* from [Host](/../types/Host)

 

---

 **Previous**   [HostMetricsTimeSeries](/types/HostMetricsTimeSeries) **Next**  [HostTransactionReportNode](/types/HostTransactionReportNode)

---


# HostTransactionReportNodeObject

Source: https://graphql-docs-v2.opencollective.com/types/HostTransactionReportNode

# HostTransactionReportNode  Object

  ## Fields

 ## [#](#fields)

     date   [DateTime](/../types/DateTime) !  Non-null 

   managedFunds   [TransactionReport](/../types/TransactionReport) !  Non-null 

   operationalFunds   [TransactionReport](/../types/TransactionReport) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [HostTransactionReports](/../types/HostTransactionReports)

 

---

 **Previous**   [HostPlan](/types/HostPlan) **Next**  [HostTransactionReports](/types/HostTransactionReports)

---


# HostTransactionReportsObject

Source: https://graphql-docs-v2.opencollective.com/types/HostTransactionReports

# HostTransactionReports  Object

  EXPERIMENTAL (this may change or be deleted): Host transaction report 

 ## Fields

 ## [#](#fields)

     dateFrom   [DateTime](/../types/DateTime)  

 The start date of the time series 

   dateTo   [DateTime](/../types/DateTime)  

 The end date of the time series 

   timeUnit   [TimeUnit](/../types/TimeUnit) !  Non-null 

 The interval between two data points 

   nodes  [ [HostTransactionReportNode](/../types/HostTransactionReportNode) !] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hostTransactionsReports* from [Host](/../types/Host)

 

---

 **Previous**   [HostTransactionReportNode](/types/HostTransactionReportNode) **Next**  [HostedAccountCollection](/types/HostedAccountCollection)

---


# HostedAccountCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/HostedAccountCollection

# HostedAccountCollection  Object

  A collection of hosted "Accounts" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Account](/../types/Account) ] 

   currencies  [ [String](/../types/String) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hostedAccounts* from [Host](/../types/Host)

 

---

 **Previous**   [HostTransactionReports](/types/HostTransactionReports) **Next**  [HostedAccountSummary](/types/HostedAccountSummary)

---


# HostedAccountSummaryObject

Source: https://graphql-docs-v2.opencollective.com/types/HostedAccountSummary

# HostedAccountSummary  Object

  Return a summary of transaction info about a given account within the context of its current fiscal host 

 ## Fields

 ## [#](#fields)

     expenseCount   [Int](/../types/Int)  

   expenseTotal   [Amount](/../types/Amount)  

   expenseMaxValue   [Amount](/../types/Amount)  

   expenseDistinctPayee   [Int](/../types/Int)  

   contributionCount   [Int](/../types/Int)  

   contributionTotal   [Amount](/../types/Amount)  

   hostFeeTotal   [Amount](/../types/Amount)  

   spentTotal   [Amount](/../types/Amount)  

   receivedTotal   [Amount](/../types/Amount)  

   expenseAverageTotal   [Amount](/../types/Amount)  

 Average calculated over the number of months the collective was approved or the number of months since dateFrom, whichever is less 

   Show arguments (1)    expenseAverageCount   [Float](/../types/Float)  

 Average calculated over the number of months the collective was approved or the number of months since dateFrom, whichever is less 

   Show arguments (1)    contributionAverageTotal   [Amount](/../types/Amount)  

 Average calculated over the number of months the collective was approved or the number of months since dateFrom, whichever is less 

   Show arguments (1)    contributionAverageCount   [Float](/../types/Float)  

 Average calculated over the number of months/years the collective was approved or the number of months since dateFrom, whichever is less 

   Show arguments (1)    spentTotalAverage   [Amount](/../types/Amount)  

   Show arguments (1)    receivedTotalAverage   [Amount](/../types/Amount)  

   Show arguments (1)    contributionRefundedTotal   [Amount](/../types/Amount)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *summary* from [Collective](/../types/Collective)

 * Field *summary* from [Event](/../types/Event)

 * Field *summary* from [Fund](/../types/Fund)

   Show more (4)   

---

 **Previous**   [HostedAccountCollection](/types/HostedAccountCollection) **Next**  [ImageFileInfo](/types/ImageFileInfo)

---


# ImageFileInfoObject

Source: https://graphql-docs-v2.opencollective.com/types/ImageFileInfo

# ImageFileInfo  Object

  Exposes information about an uploaded image file 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for the file 

   url   [URL](/../types/URL) !  Non-null 

 URL to access the file 

   name   [String](/../types/String)  

 Name of the file 

   type   [String](/../types/String) !  Non-null 

 Mime type of the file 

   size   [Int](/../types/Int)  

 Size of the file in bytes 

   width   [Int](/../types/Int)  

 If the file is an image, this will be the width of the image in pixels 

   height   [Int](/../types/Int)  

 If the file is an image, this will be the height of the image in pixels 

   blurHash   [String](/../types/String)  

 Blurhash of the image 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [FileInfo](/../types/FileInfo) .

 

---

 **Previous**   [HostedAccountSummary](/types/HostedAccountSummary) **Next**  [ImageFormat](/types/ImageFormat)

---


# ImageFormatEnum

Source: https://graphql-docs-v2.opencollective.com/types/ImageFormat

# ImageFormat  Enum

  ## Possible Values

 ## [#](#possible-values)

     txt 

    png 

    jpg 

    gif 

    svg 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *format* of field *imageUrl*
 from type [Host](/../types/Host)

 * Argument *format* of field *backgroundImageUrl*
 from type [Host](/../types/Host)

 * Argument *format* of field *image*
 from type [Contributor](/../types/Contributor)

   Show more (19)   

---

 **Previous**   [ImageFileInfo](/types/ImageFileInfo) **Next**  [Individual](/types/Individual)

---


# IndividualObject

Source: https://graphql-docs-v2.opencollective.com/types/Individual

# Individual  Object

  This represents an Individual account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id identifying the account (ie: 5v08jk63-w4g9nbpz-j7qmyder-p7ozax5g) 

   legacyId   [Int](/../types/Int) !  Non-null 

 The internal database identifier of the collective (ie: 580) 

   slug   [String](/../types/String) !  Non-null 

 The slug identifying the account (ie: babel) 

   type   [AccountType](/../types/AccountType) !  Non-null 

 The type of the account (BOT/COLLECTIVE/EVENT/ORGANIZATION/INDIVIDUAL/VENDOR) 

   name   [String](/../types/String)  

 Public name 

   legalName   [String](/../types/String)  

 Private, legal name. Used for expense receipts, taxes, etc. Scope: "account". 

   description   [String](/../types/String)  

   longDescription   [String](/../types/String)  

   tags  [ [String](/../types/String) ] 

   website   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   twitterHandle   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   githubHandle   [String](/../types/String)    Deprecated 2022-06-03: Please use repositoryUrl 

   repositoryUrl   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   socialLinks  [ [SocialLink](/../types/SocialLink) !]!  Non-null 

   currency   [Currency](/../types/Currency) !  Non-null 

 The currency of the account 

   expensePolicy   [String](/../types/String)    Deprecated 2024-11-04: Please use policies.EXPENSE\_POLICIES 

   isIncognito   [Boolean](/../types/Boolean) !  Non-null 

 Defines if the contributors wants to be incognito (name not displayed) 

   imageUrl   [String](/../types/String)  

   Show arguments (2)    backgroundImageUrl   [String](/../types/String)  

   Show arguments (2)    createdAt   [DateTime](/../types/DateTime)  

 The time of creation 

   updatedAt   [DateTime](/../types/DateTime)  

 The time of last update 

   unhostedAt   [DateTime](/../types/DateTime)  

 Date of unhosting by a given Fiscal Host. 

   Show arguments (1)    isArchived   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether this account is archived 

   isFrozen   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account is frozen 

   isActive   [Boolean](/../types/Boolean)  

 Returns whether the account accepts financial contributions. 

   isHost   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether the account is setup to Host collectives. 

   isAdmin   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user is an admin of this account 

   parentAccount   [Account](/../types/Account)    Deprecated 2022-12-16: use parent on AccountWithParent instead 

   members   [MemberCollection](/../types/MemberCollection) !  Non-null 

 Get all members (admins, members, backers, followers) 

   Show arguments (7)    memberInvitations  [ [MemberInvitation](/../types/MemberInvitation) ] 

 [AUTHENTICATED] Returns the pending invitations 

   Show arguments (3)    legalDocuments  [ [LegalDocument](/../types/LegalDocument) ] 

 The legal documents associated with this account 

   Show arguments (1)    memberOf   [MemberOfCollection](/../types/MemberOfCollection) !  Non-null 

   Show arguments (13)    emails  [ [EmailAddress](/../types/EmailAddress) !] 

 Returns the emails of the account. Individuals only have one, but organizations can have multiple emails. 

   transactions   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   Show arguments (34)    orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

   Show arguments (28)    expenses   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   Show arguments (26)    settings   [JSON](/../types/JSON) !  Non-null 

   conversations   [ConversationCollection](/../types/ConversationCollection) !  Non-null 

   Show arguments (3)    conversationsTags  [ [TagStat](/../types/TagStat) ] 

 Returns conversation's tags for collective sorted by popularity 

   Show arguments (1)    expensesTags  [ [TagStat](/../types/TagStat) ] 

 Returns expense tags for collective sorted by popularity 

   Show arguments (1)    supportedExpenseTypes  [ [ExpenseType](/../types/ExpenseType) !]!  Non-null 

 The list of expense types supported by this account 

   transferwise   [TransferWise](/../types/TransferWise)  

   payoutMethods  [ [PayoutMethod](/../types/PayoutMethod) ] 

 The list of payout methods that this collective can use to get paid. In most cases, admin only and scope: "expenses". 

   Show arguments (1)    paymentMethods  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods that this collective can use to pay for Orders. Admin or Host only. Scope: "orders". 

   Show arguments (3)    paymentMethodsWithPendingConfirmation  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods for this account that are pending a client confirmation (3D Secure / SCA) 

   connectedAccounts  [ [ConnectedAccount](/../types/ConnectedAccount) ] 

 The list of connected accounts (Stripe, PayPal, etc ...). Admin only. Scope: "connectedAccounts". 

   oAuthApplications   [OAuthApplicationCollection](/../types/OAuthApplicationCollection)  

 The list of applications created by this account. Admin only. Scope: "applications". 

   Show arguments (2)    location   [Location](/../types/Location)  

```
    
  
```
    categories  [ [String](/../types/String) ]!  Non-null 

 Categories set by Open Collective to help moderation. 

   stats   [AccountStats](/../types/AccountStats)  

   canHaveChangelogUpdates   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account can have changelog updates 

   updates   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

 Updates published by the account. To see unpublished updates, you need to be an admin and have the scope "updates". 

   Show arguments (7)    features   [CollectiveFeatures](/../types/CollectiveFeatures) !  Non-null 

 Describes the features enabled and available for this account 

   virtualCards   [VirtualCardCollection](/../types/VirtualCardCollection)  

 Virtual Cards attached to the account. Admin only. Scope: "virtualCards". 

   Show arguments (7)    virtualCardMerchants   [AccountCollection](/../types/AccountCollection)  

 Virtual Cards Merchants used by the account. Admin only. Scope: "virtualCards". 

   Show arguments (2)    childrenAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (6)    policies   [Policies](/../types/Policies) !  Non-null 

 Policies for the account. To see non-public policies you need to be admin and have the scope: "account". 

   activitySubscriptions  [ [ActivitySubscription](/../types/ActivitySubscription) ] 

 List of activities that the logged-in user is subscribed for this collective 

   Show arguments (1)    permissions   [AccountPermissions](/../types/AccountPermissions) !  Non-null 

 Logged-in user permissions on an account 

   hostApplicationRequests   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

 Host application requests 

   Show arguments (4)    feed  [ [Activity](/../types/Activity) ] 

   Show arguments (3)    duplicatedFromAccount   [Account](/../types/Account)  

 If created by duplication, the account from which this one was duplicated 

   duplicatedAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

 If this account was duplicated, the accounts that were created from it 

   Show arguments (2)    transactionGroups   [TransactionGroupCollection](/../types/TransactionGroupCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (6)    transactionReports   [TransactionReports](/../types/TransactionReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)    webhooks   [WebhookCollection](/../types/WebhookCollection) !  Non-null 

   Show arguments (3)    email   [String](/../types/String)  

 Email for the account. For authenticated user: scope: "email". 

   isGuest   [Boolean](/../types/Boolean) !  Non-null 

   isFollowingConversation   [Boolean](/../types/Boolean) !  Non-null 

   Show arguments (1)    hasTwoFactorAuth   [Boolean](/../types/Boolean)  

   newsletterOptIn   [Boolean](/../types/Boolean)  

   host   [Host](/../types/Host)  

 If the individual is a host account, this will return the matching Host object 

   hasSeenLatestChangelogEntry   [Boolean](/../types/Boolean)  

   oAuthAuthorizations   [OAuthAuthorizationCollection](/../types/OAuthAuthorizationCollection)  

   Show arguments (2)    personalTokens   [PersonalTokenCollection](/../types/PersonalTokenCollection)  

 The list of personal tokens created by this account. Admin only. Scope: "applications". 

   Show arguments (2)    hasPassword   [Boolean](/../types/Boolean)  

 Has the account a password set? For authenticated user: scope: "account". 

   twoFactorMethods  [ [UserTwoFactorMethod](/../types/UserTwoFactorMethod) ] 

 User two factor methods 

   contributorProfiles  [ [ContributorProfile](/../types/ContributorProfile) ]!  Non-null 

   Show arguments (1)   ## Interfaces

 ## [#](#interfaces)

  Also implements [Account](/../types/Account) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *account* from [OAuthAuthorization](/../types/OAuthAuthorization)

 * Field *inviter* from [MemberInvitation](/../types/MemberInvitation)

 * Field *individual* from [ActivitySubscription](/../types/ActivitySubscription)

   Show more (19)   

---

 **Previous**   [ImageFormat](/types/ImageFormat) **Next**  [IndividualConfirmEmailResponse](/types/IndividualConfirmEmailResponse)

---


# IndividualConfirmEmailResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/IndividualConfirmEmailResponse

# IndividualConfirmEmailResponse  Object

  ## Fields

 ## [#](#fields)

     individual   [Individual](/../types/Individual) !  Non-null 

 The account that was confirmed 

   sessionToken   [String](/../types/String)  

 A new session token to use for the account. Only returned if user is signed in already. 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *confirmEmail* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [Individual](/types/Individual) **Next**  [IndividualCreateInput](/types/IndividualCreateInput)

---


# IndividualCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/IndividualCreateInput

# IndividualCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     email   [String](/../types/String) !  Non-null

    name   [String](/../types/String) !  Non-null

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *user* of field *createCollective*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [IndividualConfirmEmailResponse](/types/IndividualConfirmEmailResponse) **Next**  [Int](/types/Int)

---


# IntScalar

Source: https://graphql-docs-v2.opencollective.com/types/Int

# Int  Scalar

  The `Int`  scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *legacyId* from [Application](/../types/Application)

 * Field *offset* from [MemberCollection](/../types/MemberCollection)

 * Field *limit* from [MemberCollection](/../types/MemberCollection)

   Show more (668)   

---

 **Previous**   [IndividualCreateInput](/types/IndividualCreateInput) **Next**  [InviteMemberInput](/types/InviteMemberInput)

---


# InviteMemberInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/InviteMemberInput

# InviteMemberInput  Input Object

  ## Fields

 ## [#](#fields)

     description   [String](/../types/String)  

    memberAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

 Reference to an account for the invitee 

 

    memberInfo   [IndividualCreateInput](/../types/IndividualCreateInput)  

 Email and name of the invitee if no reference. 

 

    role   [MemberRole](/../types/MemberRole) !  Non-null

 Role of the invitee 

 

    since   [DateTime](/../types/DateTime)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *inviteMembers* of field *createCollective*
 from type [Mutation](/../types/Mutation)

 * Argument *inviteMembers* of field *createOrganization*
 from type [Mutation](/../types/Mutation)

 * Argument *inviteMembers* of field *applyToHost*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Int](/types/Int) **Next**  [JSON](/types/JSON)

---


# JSONScalar

Source: https://graphql-docs-v2.opencollective.com/types/JSON

# JSON  Scalar

  The `JSON`  scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf) . 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *customFields* from [Tier](/../types/Tier)

 * Field *data* from [Order](/../types/Order)

 * Field *customData* from [Order](/../types/Order)

   Show more (44)   

---

 **Previous**   [InviteMemberInput](/types/InviteMemberInput) **Next**  [JSONObject](/types/JSONObject)

---


# JSONObjectScalar

Source: https://graphql-docs-v2.opencollective.com/types/JSONObject

# JSONObject  Scalar

  The `JSONObject`  scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf) . 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *rawValue* from [TransactionsImportRow](/../types/TransactionsImportRow)

 * Field *availableCurrencies* from [TransferWise](/../types/TransferWise)

 * Field *data* from [VirtualCard](/../types/VirtualCard)

   Show more (13)   

---

 **Previous**   [JSON](/types/JSON) **Next**  [LastCommentBy](/types/LastCommentBy)

---


# LastCommentByEnum

Source: https://graphql-docs-v2.opencollective.com/types/LastCommentBy

# LastCommentBy  Enum

  Defines role of the last comment author 

 ## Possible Values

 ## [#](#possible-values)

     USER 

 Expense Submitter 

 

    HOST\_ADMIN 

 Fiscal Host Admin 

 

    NON\_HOST\_ADMIN 

 Not a Fiscal Host Admin 

 

    COLLECTIVE\_ADMIN 

 Collective Admin 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *lastCommentBy* of field *expenses*
 from type [Host](/../types/Host)

 * Argument *lastCommentBy* of field *hostApplications*
 from type [Host](/../types/Host)

 * Argument *lastCommentBy* of field *expenses*
 from type [Bot](/../types/Bot)

   Show more (11)   

---

 **Previous**   [JSONObject](/types/JSONObject) **Next**  [LegalDocument](/types/LegalDocument)

---


# LegalDocumentObject

Source: https://graphql-docs-v2.opencollective.com/types/LegalDocument

# LegalDocument  Object

  A legal document (e.g. W9, W8BEN, W8BEN-E) 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for this legal document 

   year   [Int](/../types/Int) !  Non-null 

 The year this legal document is for 

   type   [LegalDocumentType](/../types/LegalDocumentType) !  Non-null 

 The type of legal document 

   status   [LegalDocumentRequestStatus](/../types/LegalDocumentRequestStatus) !  Non-null 

 The status of the request for this legal document 

   service   [LegalDocumentService](/../types/LegalDocumentService) !  Non-null 

 The service that provided this legal document 

   isExpired   [Boolean](/../types/Boolean) !  Non-null 

 Whether this legal document is expired 

   requestedAt   [DateTime](/../types/DateTime) !  Non-null 

 The date and time the request for this legal document was created 

   updatedAt   [DateTime](/../types/DateTime) !  Non-null 

 The date and time this legal document was last updated 

   account   [Account](/../types/Account) !  Non-null 

 The account this legal document is for 

   documentLink   [URL](/../types/URL)  

 URL to download the file. Must be logged in as a host with access to the document. The returned URL will be protected by authentication + 2FA. 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *legalDocuments* from [Host](/../types/Host)

 * Field *nodes* from [LegalDocumentCollection](/../types/LegalDocumentCollection)

 * Field *legalDocuments* from [Bot](/../types/Bot)

   Show more (12)   

---

 **Previous**   [LastCommentBy](/types/LastCommentBy) **Next**  [LegalDocumentCollection](/types/LegalDocumentCollection)

---


# LegalDocumentCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/LegalDocumentCollection

# LegalDocumentCollection  Object

  A collection of "LegalDocument" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [LegalDocument](/../types/LegalDocument) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *legalDocuments* from [Expense](/../types/Expense)

 * Field *hostedLegalDocuments* from [Host](/../types/Host)

 

---

 **Previous**   [LegalDocument](/types/LegalDocument) **Next**  [LegalDocumentRequestStatus](/types/LegalDocumentRequestStatus)

---


# LegalDocumentRequestStatusEnum

Source: https://graphql-docs-v2.opencollective.com/types/LegalDocumentRequestStatus

# LegalDocumentRequestStatus  Enum

  Status for a legal document 

 ## Possible Values

 ## [#](#possible-values)

     NOT\_REQUESTED 

    REQUESTED 

    RECEIVED 

    ERROR 

    INVALID 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *status* of field *legalDocuments*
 from type [Expense](/../types/Expense)

 * Argument *status* of field *hostedLegalDocuments*
 from type [Host](/../types/Host)

 * Field *status* from [LegalDocument](/../types/LegalDocument)

   Show more (4)   

---

 **Previous**   [LegalDocumentCollection](/types/LegalDocumentCollection) **Next**  [LegalDocumentService](/types/LegalDocumentService)

---


# LegalDocumentServiceEnum

Source: https://graphql-docs-v2.opencollective.com/types/LegalDocumentService

# LegalDocumentService  Enum

  Type for a required legal document 

 ## Possible Values

 ## [#](#possible-values)

     DROPBOX\_FORMS 

    OPENCOLLECTIVE 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *service* from [LegalDocument](/../types/LegalDocument)

 

---

 **Previous**   [LegalDocumentRequestStatus](/types/LegalDocumentRequestStatus) **Next**  [LegalDocumentType](/types/LegalDocumentType)

---


# LegalDocumentTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/LegalDocumentType

# LegalDocumentType  Enum

  Type for a required legal document 

 ## Possible Values

 ## [#](#possible-values)

     US\_TAX\_FORM 

 US tax form (W9, W8BEN, W8BEN-E) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *requiredLegalDocuments* from [Expense](/../types/Expense)

 * Argument *type* of field *legalDocuments*
 from type [Expense](/../types/Expense)

 * Argument *type* of field *legalDocuments*
 from type [Host](/../types/Host)

   Show more (15)   

---

 **Previous**   [LegalDocumentService](/types/LegalDocumentService) **Next**  [Locale](/types/Locale)

---


# LocaleScalar

Source: https://graphql-docs-v2.opencollective.com/types/Locale

# Locale  Scalar

  The locale in the format of a BCP 47 (RFC 5646) standard string 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *locale* of field *generatePlaidLinkToken*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [LegalDocumentType](/types/LegalDocumentType) **Next**  [Location](/types/Location)

---


# LocationObject

Source: https://graphql-docs-v2.opencollective.com/types/Location

# Location  Object

  Type for Geographic location 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 Unique identifier for this location 

   name   [String](/../types/String)  

 A short name for the location (eg. Open Collective Headquarters) 

   address   [String](/../types/String)  

 Postal address without country (eg. 12 opensource avenue, 7500 Paris) 

   country   [String](/../types/String)  

 Two letters country code (eg. FR, BE...etc) 

   lat   [Float](/../types/Float)  

 Latitude 

   long   [Float](/../types/Float)  

 Longitude 

   structured   [JSON](/../types/JSON)  

 Structured JSON address 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *payeeLocation* from [Expense](/../types/Expense)

 * Field *location* from [Host](/../types/Host)

 * Field *location* from [Bot](/../types/Bot)

   Show more (10)   

---

 **Previous**   [Locale](/types/Locale) **Next**  [LocationInput](/types/LocationInput)

---


# LocationInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/LocationInput

# LocationInput  Input Object

  Input type for Geographic location 

 ## Fields

 ## [#](#fields)

     address   [String](/../types/String)  

 Postal address without country (eg. 12 opensource avenue, 7500 Paris) 

 

    country   [CountryISO](/../types/CountryISO)  

 Two letters country code (eg. FR, BE...etc) 

 

    lat   [Float](/../types/Float)  

 Latitude 

 

    long   [Float](/../types/Float)  

 Longitude 

 

    name   [String](/../types/String)  

 A short name for the location (eg. Open Collective Headquarters) 

 

    structured   [JSON](/../types/JSON)  

 Structured JSON address 

 

   

---

 **Previous**   [Location](/types/Location) **Next**  [MAXIMUM\_VIRTUAL\_CARD\_LIMIT\_AMOUNT\_FOR\_INTERVAL](/types/MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL)

---


# MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVALObject

Source: https://graphql-docs-v2.opencollective.com/types/MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL

# MAXIMUM\_VIRTUAL\_CARD\_LIMIT\_AMOUNT\_FOR\_INTERVAL  Object

  ## Fields

 ## [#](#fields)

     ALL\_TIME   [Amount](/../types/Amount)  

   DAILY   [Amount](/../types/Amount)  

   MONTHLY   [Amount](/../types/Amount)  

   PER\_AUTHORIZATION   [Amount](/../types/Amount)  

   WEEKLY   [Amount](/../types/Amount)  

   YEARLY   [Amount](/../types/Amount)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *MAXIMUM\_VIRTUAL\_CARD\_LIMIT\_AMOUNT\_FOR\_INTERVAL* from [Policies](/../types/Policies)

 

---

 **Previous**   [LocationInput](/types/LocationInput) **Next**  [MarkAsUnPaidExpenseStatus](/types/MarkAsUnPaidExpenseStatus)

---


# MarkAsUnPaidExpenseStatusEnum

Source: https://graphql-docs-v2.opencollective.com/types/MarkAsUnPaidExpenseStatus

# MarkAsUnPaidExpenseStatus  Enum

  ## Possible Values

 ## [#](#possible-values)

     APPROVED 

    INCOMPLETE 

    ERROR 

   

---

 **Previous**   [MAXIMUM\_VIRTUAL\_CARD\_LIMIT\_AMOUNT\_FOR\_INTERVAL](/types/MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL) **Next**  [Member](/types/Member)

---


# MemberObject

Source: https://graphql-docs-v2.opencollective.com/types/Member

# Member  Object

  This represents a Member relationship (ie: Organization backing a Collective) 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   role   [MemberRole](/../types/MemberRole) !  Non-null 

   tier   [Tier](/../types/Tier)  

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

   updatedAt   [DateTime](/../types/DateTime) !  Non-null 

   since   [DateTime](/../types/DateTime) !  Non-null 

   totalDonations   [Amount](/../types/Amount) !  Non-null 

 Total amount donated 

   publicMessage   [String](/../types/String)  

 Custom user message from member to the collective 

   description   [String](/../types/String)  

 Custom user description 

   inherited   [Boolean](/../types/Boolean) !  Non-null 

 If membership is inherited from parent collective 

   isActive   [Boolean](/../types/Boolean) !  Non-null 

 Whether the membership is active. Warning: this definition is subject to change. 

   account   [Account](/../types/Account)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [MemberCollection](/../types/MemberCollection)

 * Field *editPublicMessage* from [Mutation](/../types/Mutation)

 * Field *createMember* from [Mutation](/../types/Mutation)

   Show more (6)   

---

 **Previous**   [MarkAsUnPaidExpenseStatus](/types/MarkAsUnPaidExpenseStatus) **Next**  [MemberCollection](/types/MemberCollection)

---


# MemberCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/MemberCollection

# MemberCollection  Object

  A collection of "Members" (ie: Organization backing a Collective) 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Member](/../types/Member) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *members* from [Host](/../types/Host)

 * Field *members* from [Bot](/../types/Bot)

 * Field *members* from [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [Member](/types/Member) **Next**  [MemberInvitation](/types/MemberInvitation)

---


# MemberInvitationObject

Source: https://graphql-docs-v2.opencollective.com/types/MemberInvitation

# MemberInvitation  Object

  An invitation to join the members of a collective 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   inviter   [Individual](/../types/Individual)  

 The person who invited the member, if any 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

   account   [Account](/../types/Account) !  Non-null 

   memberAccount   [Account](/../types/Account) !  Non-null 

   role   [MemberRole](/../types/MemberRole) !  Non-null 

   description   [String](/../types/String)  

   tier   [Tier](/../types/Tier)  

   since   [DateTime](/../types/DateTime)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *memberInvitations* from [Host](/../types/Host)

 * Field *memberInvitations* from [Bot](/../types/Bot)

 * Field *memberInvitations* from [Collective](/../types/Collective)

   Show more (12)   

---

 **Previous**   [MemberCollection](/types/MemberCollection) **Next**  [MemberInvitationReferenceInput](/types/MemberInvitationReferenceInput)

---


# MemberInvitationReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/MemberInvitationReferenceInput

# MemberInvitationReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the member invitation (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The internal id of the invitation (ie: 580) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *invitation* of field *replyToMemberInvitation*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [MemberInvitation](/types/MemberInvitation) **Next**  [MemberOf](/types/MemberOf)

---


# MemberOfObject

Source: https://graphql-docs-v2.opencollective.com/types/MemberOf

# MemberOf  Object

  This represents a MemberOf relationship (ie: Collective backed by an Organization) 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   role   [MemberRole](/../types/MemberRole) !  Non-null 

   tier   [Tier](/../types/Tier)  

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

   updatedAt   [DateTime](/../types/DateTime) !  Non-null 

   since   [DateTime](/../types/DateTime) !  Non-null 

   totalDonations   [Amount](/../types/Amount) !  Non-null 

 Total amount donated 

   publicMessage   [String](/../types/String)  

 Custom user message from member to the collective 

   description   [String](/../types/String)  

 Custom user description 

   inherited   [Boolean](/../types/Boolean) !  Non-null 

 If membership is inherited from parent collective 

   isActive   [Boolean](/../types/Boolean) !  Non-null 

 Whether the membership is active. Warning: this definition is subject to change. 

   account   [Account](/../types/Account)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *membership* from [Order](/../types/Order)

 * Field *nodes* from [MemberOfCollection](/../types/MemberOfCollection)

 

---

 **Previous**   [MemberInvitationReferenceInput](/types/MemberInvitationReferenceInput) **Next**  [MemberOfCollection](/types/MemberOfCollection)

---


# MemberOfCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/MemberOfCollection

# MemberOfCollection  Object

  A collection of "MemberOf" (ie: Collective backed by an Organization) 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [MemberOf](/../types/MemberOf) ] 

   roles  [ [MemberOfCollectionRoles](/../types/MemberOfCollectionRoles) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *memberOf* from [Host](/../types/Host)

 * Field *memberOf* from [Bot](/../types/Bot)

 * Field *memberOf* from [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [MemberOf](/types/MemberOf) **Next**  [MemberOfCollectionRoles](/types/MemberOfCollectionRoles)

---


# MemberOfCollectionRolesObject

Source: https://graphql-docs-v2.opencollective.com/types/MemberOfCollectionRoles

# MemberOfCollectionRoles  Object

  An existing member role and account type combination used used to filter collections 

 ## Fields

 ## [#](#fields)

     type   [AccountType](/../types/AccountType) !  Non-null 

   role   [MemberRole](/../types/MemberRole) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *roles* from [MemberOfCollection](/../types/MemberOfCollection)

 

---

 **Previous**   [MemberOfCollection](/types/MemberOfCollection) **Next**  [MemberRole](/types/MemberRole)

---


# MemberRoleEnum

Source: https://graphql-docs-v2.opencollective.com/types/MemberRole

# MemberRole  Enum

  All member roles 

 ## Possible Values

 ## [#](#possible-values)

     BACKER 

    ADMIN 

    CONTRIBUTOR 

    HOST 

    ATTENDEE 

    MEMBER 

    FUNDRAISER   Deprecated 2022-09-12: This role does not exist anymore

    FOLLOWER 

    ACCOUNTANT 

    CONNECTED\_ACCOUNT 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *role* from [MemberInvitation](/../types/MemberInvitation)

 * Argument *role* of field *members*
 from type [Host](/../types/Host)

 * Argument *role* of field *memberInvitations*
 from type [Host](/../types/Host)

   Show more (45)   

---

 **Previous**   [MemberOfCollectionRoles](/types/MemberOfCollectionRoles) **Next**  [MergeAccountsResponse](/types/MergeAccountsResponse)

---


# MergeAccountsResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/MergeAccountsResponse

# MergeAccountsResponse  Object

  ## Fields

 ## [#](#fields)

     account   [Account](/../types/Account) !  Non-null 

 The resulting account 

   message   [String](/../types/String)  

 A message to display to the user about the result 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *mergeAccounts* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [MemberRole](/types/MemberRole) **Next**  [Mutation](/types/Mutation)

---


# MutationObject

Source: https://graphql-docs-v2.opencollective.com/types/Mutation

# Mutation  Object

  This is the root mutation 

 ## Fields

 ## [#](#fields)

     createCollective   [Collective](/../types/Collective)  

 Create a Collective. Scope: "account". 

   Show arguments (9)    createEvent   [Event](/../types/Event)  

 Create an Event. Scope: "account". 

   Show arguments (2)    createFund   [Fund](/../types/Fund)  

 Create a Fund. Scope: "account". 

   Show arguments (2)    createOrganization   [Organization](/../types/Organization)  

 Create an Organization. Scope: "account". 

   Show arguments (2)    createProject   [Project](/../types/Project)  

 Create a Project. Scope: "account". 

   Show arguments (4)    duplicateAccount   [Account](/../types/Account) !  Non-null 

 Duplicate an account. Scope: "account". 

   Show arguments (6)    editAccountSetting   [Account](/../types/Account) !  Non-null 

 Edit the settings for the given account. Scope: "account" or "host". 

   Show arguments (3)    editAccountFeeStructure   [Account](/../types/Account) !  Non-null 

 An endpoint for hosts to edit the fees structure of their hosted accounts. Scope: "host". 

   Show arguments (3)    editAccountFreezeStatus   [Account](/../types/Account) !  Non-null 

 An endpoint for hosts to edit the freeze status of their hosted accounts. Scope: "host". 

   Show arguments (5)    createWebAuthnRegistrationOptions   [JSON](/../types/JSON) !  Non-null 

 Create WebAuthn public key registration request options 

   Show arguments (1)    addTwoFactorAuthTokenToIndividual   [AddTwoFactorAuthTokenToIndividualResponse](/../types/AddTwoFactorAuthTokenToIndividualResponse) !  Non-null 

 Add 2FA to the Individual if it does not have it. Scope: "account". 

   Show arguments (3)    removeTwoFactorAuthTokenFromIndividual   [Individual](/../types/Individual) !  Non-null 

 Remove 2FA from the Individual if it has been enabled. Scope: "account". 

   Show arguments (2)    editTwoFactorAuthenticationMethod   [Individual](/../types/Individual) !  Non-null 

 Edit 2FA method 

   Show arguments (2)    editAccount   [Host](/../types/Host) !  Non-null 

 Edit key properties of an account. Scope: "account". 

   Show arguments (1)    setPolicies   [Account](/../types/Account) !  Non-null 

 Adds or removes a policy on a given account. Scope: "account". 

   Show arguments (2)    deleteAccount   [Account](/../types/Account)  

 Adds or removes a policy on a given account. Scope: "account". 

   Show arguments (1)    sendMessage   [SendMessageResult](/../types/SendMessageResult)  

 Send a message to an account. Scope: "account" 

   Show arguments (3)    regenerateRecoveryCodes  [ [String](/../types/String) !] 

 Regenerate two factor authentication recovery codes 

   editAccountingCategories   [Account](/../types/Account) !  Non-null 

 Edit an accounting category. Returns the account with the updated categories. 

   Show arguments (2)    addFunds   [Order](/../types/Order) !  Non-null 

 Add funds to the given account. Scope: "host". 

   Show arguments (13)    editAddedFunds   [Order](/../types/Order) !  Non-null 

 Add funds to the given account. Scope: "host". 

   Show arguments (13)    createApplication   [Application](/../types/Application)  

   Show arguments (1)    updateApplication   [Application](/../types/Application)  

   Show arguments (1)    deleteApplication   [Application](/../types/Application)  

   Show arguments (1)    editComment   [Comment](/../types/Comment)  

 Edit a comment. Scope: "conversations", "expenses" or "updates". 

   Show arguments (1)    deleteComment   [Comment](/../types/Comment)  

   Show arguments (1)    createComment   [Comment](/../types/Comment)  

 Create a comment. Scope: "conversations", "expenses" or "updates". 

   Show arguments (1)    createConnectedAccount   [ConnectedAccount](/../types/ConnectedAccount)  

 Connect external account to Open Collective Account. Scope: "connectedAccounts". 

   Show arguments (2)    deleteConnectedAccount   [ConnectedAccount](/../types/ConnectedAccount)  

 Delete ConnectedAccount. Scope: "connectedAccounts". 

   Show arguments (1)    createConversation   [Conversation](/../types/Conversation)  

 Create a conversation. Scope: "conversations". 

   Show arguments (4)    editConversation   [Conversation](/../types/Conversation)  

 Edit a conversation. Scope: "conversations". 

   Show arguments (3)    followConversation   [Boolean](/../types/Boolean)  

 Returns true if user is following, false otherwise. Must be authenticated. Scope: "conversations". 

   Show arguments (2)    addEmojiReaction   [EmojiReactionResponse](/../types/EmojiReactionResponse) !  Non-null 

 Add an emoji reaction. Scope: "conversations", "expenses" or "updates". 

   Show arguments (3)    removeEmojiReaction   [EmojiReactionResponse](/../types/EmojiReactionResponse) !  Non-null 

 Remove an emoji reaction. Scope: "conversations", "expenses" or "updates". 

   Show arguments (3)    createExpense   [Expense](/../types/Expense) !  Non-null 

 Submit an expense to a collective. Scope: "expenses". 

   Show arguments (5)    editExpense   [Expense](/../types/Expense) !  Non-null 

 To update an existing expense 

   Show arguments (2)    deleteExpense   [Expense](/../types/Expense) !  Non-null 

 Delete an expense. Only work if the expense is rejected - please check permissions.canDelete. Scope: "expenses". 

   Show arguments (1)    processExpense   [Expense](/../types/Expense) !  Non-null 

 Process the expense with the given action. Scope: "expenses". 

   Show arguments (5)    draftExpenseAndInviteUser   [Expense](/../types/Expense) !  Non-null 

 Persist an Expense as a draft and invite someone to edit and submit it. Scope: "expenses". 

   Show arguments (4)    resendDraftExpenseInvite   [Expense](/../types/Expense) !  Non-null 

 To re-send the invitation to complete a draft expense. Scope: "expenses". 

   Show arguments (1)    sendGuestConfirmationEmail   [Boolean](/../types/Boolean) !  Non-null 

 Sends an email for guest to confirm their emails and create their Open Collective account 

   Show arguments (1)    confirmGuestAccount   [ConfirmGuestAccountResponse](/../types/ConfirmGuestAccountResponse) !  Non-null 

 Mark an account as confirmed 

   Show arguments (2)    applyToHost   [Account](/../types/Account) !  Non-null 

 Apply to an host with a collective. Scope: "account". 

   Show arguments (5)    processHostApplication   [ProcessHostApplicationResponse](/../types/ProcessHostApplicationResponse) !  Non-null 

 Reply to a host application. Scope: "host". 

   Show arguments (3)    removeHost   [Account](/../types/Account) !  Non-null 

 Removes the host for an account 

   Show arguments (4)    setChangelogViewDate   [Individual](/../types/Individual) !  Non-null 

 Update the time which the user viewed the changelog updates. Scope: "account". 

   Show arguments (1)    setNewsletterOptIn   [Individual](/../types/Individual) !  Non-null 

 Update newsletter opt-in preference. Scope: "account". 

   Show arguments (1)    setPassword   [SetPasswordResponse](/../types/SetPasswordResponse) !  Non-null 

 Set password to Individual. Scope: "account". 2FA. 

   Show arguments (2)    confirmEmail   [IndividualConfirmEmailResponse](/../types/IndividualConfirmEmailResponse) !  Non-null 

 Confirm email for Individual. Scope: "account". 

   Show arguments (1)    submitLegalDocument   [LegalDocument](/../types/LegalDocument) !  Non-null 

 Submit a legal document 

   Show arguments (3)    editLegalDocumentStatus   [LegalDocument](/../types/LegalDocument) !  Non-null 

 Edit the status of a legal document 

   Show arguments (5)    inviteMember   [MemberInvitation](/../types/MemberInvitation) !  Non-null 

 Invite a new member to the Collective. Scope: "account". 

   Show arguments (5)    editMemberInvitation   [MemberInvitation](/../types/MemberInvitation)  

 Edit an existing member invitation of the Collective. Scope: "account". 

   Show arguments (5)    replyToMemberInvitation   [Boolean](/../types/Boolean) !  Non-null 

 Endpoint to accept or reject an invitation to become a member. Scope: "account". 

   Show arguments (2)    followAccount   [FollowAccountResult](/../types/FollowAccountResult) !  Non-null 

 Follows a given Collective. Scope: "account" 

   Show arguments (1)    unfollowAccount   [UnfollowAccountResult](/../types/UnfollowAccountResult) !  Non-null 

 Unfollows a given Collective. Scope: "account" 

   Show arguments (1)    editPublicMessage   [Member](/../types/Member) !  Non-null 

 Edit the public message for the given Member of a Collective. Scope: "account". 

   Show arguments (3)    createMember   [Member](/../types/Member) !  Non-null 

 [Root only] Create a member entry directly. For non-root users, use `inviteMember`  

   Show arguments (5)    editMember   [Member](/../types/Member) !  Non-null 

 Edit an existing member of the Collective. Scope: "account". 

   Show arguments (5)    removeMember   [Boolean](/../types/Boolean)  

 Remove a member from the Collective. Scope: "account". 

   Show arguments (4)    revokeOAuthAuthorization   [OAuthAuthorization](/../types/OAuthAuthorization) !  Non-null 

 Revoke an OAuth authorization. Scope: "account". 

   Show arguments (1)    createOrder   [OrderWithPayment](/../types/OrderWithPayment) !  Non-null 

 To submit a new order. Scope: "orders". 

   Show arguments (1)    cancelOrder   [Order](/../types/Order)  

 Cancel an order. Scope: "orders". 

   Show arguments (3)    updateOrder   [Order](/../types/Order)  

 Update an Order's amount, tier, or payment method. Scope: "orders". 

   Show arguments (5)    updateOrderAccountingCategory   [Order](/../types/Order) !  Non-null 

 Update the accounting category of an order. Scope: "orders". 

   Show arguments (2)    confirmOrder   [OrderWithPayment](/../types/OrderWithPayment) !  Non-null 

 Confirm an order (strong customer authentication). Scope: "orders". 

   Show arguments (2)    processPendingOrder   [Order](/../types/Order) !  Non-null 

 A mutation for the host to approve or reject an order. Scope: "orders". 

   Show arguments (2)    moveOrders  [ [Order](/../types/Order) ]!  Non-null 

 [Root only] A mutation to move orders from one account to another 

   Show arguments (4)    createPaymentIntent   [PaymentIntent](/../types/PaymentIntent) !  Non-null 

 Creates a Stripe payment intent 

   Show arguments (2)    createPendingOrder   [Order](/../types/Order) !  Non-null 

 To submit a new order. Scope: "orders". 

   Show arguments (1)    editPendingOrder   [Order](/../types/Order) !  Non-null 

 To edit a pending order. Scope: "orders". 

   Show arguments (1)    startResumeOrdersProcess   [Account](/../types/Account) !  Non-null 

 Starts or resumes the process of notifying contributors for their PAUSED contributions 

   Show arguments (2)    addCreditCard   [CreditCardWithStripeError](/../types/CreditCardWithStripeError) !  Non-null 

 Add a new payment method to be used with an Order. Scope: "orders". 

   Show arguments (4)    confirmCreditCard   [CreditCardWithStripeError](/../types/CreditCardWithStripeError) !  Non-null 

 Confirm a credit card is ready for use after strong customer authentication. Scope: "orders". 

   Show arguments (1)    createSetupIntent   [SetupIntent](/../types/SetupIntent) !  Non-null 

 Creates a Stripe setup intent 

   Show arguments (2)    addStripePaymentMethodFromSetupIntent   [PaymentMethod](/../types/PaymentMethod) !  Non-null 

 Adds a Stripe payment method 

   Show arguments (2)    removePaymentMethod   [PaymentMethod](/../types/PaymentMethod) !  Non-null 

 Remove a payment method 

   Show arguments (2)    createPayoutMethod   [PayoutMethod](/../types/PayoutMethod)  

 Create a new Payout Method to get paid through the platform. Scope: "expenses". 

   Show arguments (2)    removePayoutMethod   [PayoutMethod](/../types/PayoutMethod) !  Non-null 

 Remove the given payout method. Scope: "expenses". 

   Show arguments (1)    restorePayoutMethod   [PayoutMethod](/../types/PayoutMethod) !  Non-null 

 Restore the given payout method. Scope: "expenses". 

   Show arguments (1)    editPayoutMethod   [PayoutMethod](/../types/PayoutMethod) !  Non-null 

   Show arguments (1)    generatePlaidLinkToken   [PlaidLinkTokenCreateResponse](/../types/PlaidLinkTokenCreateResponse) !  Non-null 

 Generate a Plaid Link token 

   Show arguments (5)    connectPlaidAccount   [PlaidConnectAccountResponse](/../types/PlaidConnectAccountResponse) !  Non-null 

 Connect a Plaid account 

   Show arguments (4)    syncPlaidAccount   [TransactionsImport](/../types/TransactionsImport) !  Non-null 

 Manually request a sync for Plaid account 

   Show arguments (1)    refreshPlaidAccount   [PlaidConnectAccountResponse](/../types/PlaidConnectAccountResponse) !  Non-null 

 Refresh the list of sub-accounts & other metadata by re-fetching the account info 

   Show arguments (2)    editAccountFlags   [Account](/../types/Account) !  Non-null 

 [Root only] Edits account flags (deleted, banned, archived, trusted host) 

   Show arguments (4)    editAccountType   [Account](/../types/Account) !  Non-null 

 [Root only] Edits account type from User to Organization 

   Show arguments (1)    clearCacheForAccount   [Account](/../types/Account) !  Non-null 

 [Root only] Clears the cache for a given account 

   Show arguments (2)    mergeAccounts   [MergeAccountsResponse](/../types/MergeAccountsResponse) !  Non-null 

 [Root only] Merge two accounts, returns the result account 

   Show arguments (3)    banAccount   [BanAccountResponse](/../types/BanAccountResponse) !  Non-null 

 [Root only] Ban accounts 

   Show arguments (3)    moveExpenses  [ [Expense](/../types/Expense) ]!  Non-null 

 [Root only] A mutation to move expenses from one account to another 

   Show arguments (2)    rootAnonymizeAccount   [Account](/../types/Account) !  Non-null 

 [Root only] Anonymizes an account 

   Show arguments (1)    refundTransaction   [Transaction](/../types/Transaction)  

 Refunds a transaction. Scope: "transactions". 

   Show arguments (2)    rejectTransaction   [Transaction](/../types/Transaction) !  Non-null 

 Rejects transaction, removes member from Collective, and sends a message to the contributor. Scope: "transactions". 

   Show arguments (2)    createTransactionsImport   [TransactionsImport](/../types/TransactionsImport) !  Non-null 

 Create a new import. To manually add transactions to it, use `importTransactions` . 

   Show arguments (4)    editTransactionsImport   [TransactionsImport](/../types/TransactionsImport) !  Non-null 

 Edit an import 

   Show arguments (4)    importTransactions   [TransactionsImport](/../types/TransactionsImport) !  Non-null 

 Import transactions, manually or from a CSV file 

   Show arguments (4)    updateTransactionsImportRows   [TransactionsImportEditResponse](/../types/TransactionsImportEditResponse) !  Non-null 

 Update transactions import rows to set new values or perform actions on them 

   Show arguments (3)    deleteTransactionsImport   [Boolean](/../types/Boolean) !  Non-null 

 Delete an import and all its associated rows 

   Show arguments (1)    createUpdate   [Update](/../types/Update) !  Non-null 

 Create update. Scope: "updates". 

   Show arguments (1)    editUpdate   [Update](/../types/Update) !  Non-null 

 Edit update. Scope: "updates". 

   Show arguments (1)    publishUpdate   [Update](/../types/Update) !  Non-null 

 Publish update. Scope: "updates". 

   Show arguments (2)    unpublishUpdate   [Update](/../types/Update) !  Non-null 

 Unpublish update. Scope: "updates". 

   Show arguments (1)    deleteUpdate   [Update](/../types/Update) !  Non-null 

 Delete update. Scope: "updates". 

   Show arguments (1)    uploadFile  [ [UploadFileResult](/../types/UploadFileResult) !]!  Non-null 

   Show arguments (1)    assignNewVirtualCard   [VirtualCard](/../types/VirtualCard) !  Non-null 

 Assign Virtual Card information to existing hosted collective. Scope: "virtualCards". 

   Show arguments (3)    createVirtualCard   [VirtualCard](/../types/VirtualCard) !  Non-null 

 Create new Stripe Virtual Card for existing hosted collective. Scope: "virtualCards". 

   Show arguments (6)    editVirtualCard   [VirtualCard](/../types/VirtualCard) !  Non-null 

 Edit existing Virtual Card information. Scope: "virtualCards". 

   Show arguments (5)    requestVirtualCard   [Boolean](/../types/Boolean)  

 Request Virtual Card to host. Scope: "virtualCards". 

   Show arguments (5)    rejectVirtualCardRequest   [VirtualCardRequest](/../types/VirtualCardRequest) !  Non-null 

 Reject a virtual card request. Scope: "virtualCards" 

   Show arguments (1)    pauseVirtualCard   [VirtualCard](/../types/VirtualCard) !  Non-null 

 Pause active Virtual Card. Scope: "virtualCards". 

   Show arguments (1)    resumeVirtualCard   [VirtualCard](/../types/VirtualCard) !  Non-null 

 Resume paused Virtual Card. Scope: "virtualCards". 

   Show arguments (1)    deleteVirtualCard   [Boolean](/../types/Boolean)  

 Delete Virtual Card. Scope: "virtualCards". 

   Show arguments (1)    createWebhook   [Webhook](/../types/Webhook)  

 Create webhook. Scope: "webhooks". 

   Show arguments (1)    updateWebhook   [Webhook](/../types/Webhook)  

 Update webhook. Scope: "webhooks". 

   Show arguments (1)    deleteWebhook   [Webhook](/../types/Webhook)  

 Delete webhook. Scope: "webhooks". 

   Show arguments (1)    setEmailNotification   [ActivitySubscription](/../types/ActivitySubscription)  

 Set email notification subscription for requesting logged-in user 

   Show arguments (3)    editTier   [Tier](/../types/Tier) !  Non-null 

 Edit a tier. 

   Show arguments (1)    createTier   [Tier](/../types/Tier) !  Non-null 

 Create a tier. 

   Show arguments (2)    deleteTier   [Tier](/../types/Tier) !  Non-null 

 Delete a tier. 

   Show arguments (2)    createPersonalToken   [PersonalToken](/../types/PersonalToken) !  Non-null 

   Show arguments (1)    updatePersonalToken   [PersonalToken](/../types/PersonalToken) !  Non-null 

   Show arguments (1)    deletePersonalToken   [PersonalToken](/../types/PersonalToken)  

   Show arguments (1)    updateSocialLinks  [ [SocialLink](/../types/SocialLink) !]!  Non-null 

 Updates collective social links 

   Show arguments (2)    setTags   [TagResponse](/../types/TagResponse) !  Non-null 

   Show arguments (3)    addAgreement   [Agreement](/../types/Agreement) !  Non-null 

 Add an agreement for the given host account. Scope: "host". 

   Show arguments (6)    editAgreement   [Agreement](/../types/Agreement) !  Non-null 

 Edit an agreement for the given host account. Scope: "host". 

   Show arguments (5)    deleteAgreement   [Agreement](/../types/Agreement) !  Non-null 

 Delete an agreement for the given host account. Scope: "host". 

   Show arguments (1)    createVendor   [Vendor](/../types/Vendor) !  Non-null 

 Create a new vendor for given host 

   Show arguments (2)    editVendor   [Vendor](/../types/Vendor) !  Non-null 

 Edit an existing vendor 

   Show arguments (2)    deleteVendor   [Boolean](/../types/Boolean) !  Non-null 

 Delete a vendor 

   Show arguments (1)    convertOrganizationToVendor   [Vendor](/../types/Vendor) !  Non-null 

 Convert an organization to a vendor 

   Show arguments (2)    sendSurveyResponse   [Boolean](/../types/Boolean)  

 Send In-App Survey response 

   Show arguments (5)    

---

 **Previous**   [MergeAccountsResponse](/types/MergeAccountsResponse) **Next**  [NewAccountOrReferenceInput](/types/NewAccountOrReferenceInput)

---


# NewAccountOrReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/NewAccountOrReferenceInput

# NewAccountOrReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     email   [String](/../types/String)  

    id   [String](/../types/String)  

 The public id identifying the account (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legalName   [String](/../types/String)  

    name   [String](/../types/String)  

    newsletterOptIn   [Boolean](/../types/Boolean)  

    organization   [NewAccountOrganizationInput](/../types/NewAccountOrganizationInput)  

    slug   [String](/../types/String)  

 The slug identifying the account (ie: babel for <https://opencollective.com/babel>) 

 

   

---

 **Previous**   [Mutation](/types/Mutation) **Next**  [NewAccountOrganizationInput](/types/NewAccountOrganizationInput)

---


# NewAccountOrganizationInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/NewAccountOrganizationInput

# NewAccountOrganizationInput  Input Object

  ## Fields

 ## [#](#fields)

     description   [String](/../types/String)  

    legalName   [String](/../types/String)  

    name   [String](/../types/String)  

    slug   [String](/../types/String)  

    website   [String](/../types/String)  

   

---

 **Previous**   [NewAccountOrReferenceInput](/types/NewAccountOrReferenceInput) **Next**  [NonEmptyString](/types/NonEmptyString)

---


# NonEmptyStringScalar

Source: https://graphql-docs-v2.opencollective.com/types/NonEmptyString

# NonEmptyString  Scalar

  A string that cannot be passed as an empty value 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *transactionsImportsSources* from [Host](/../types/Host)

 * Field *source* from [TransactionsImport](/../types/TransactionsImport)

 * Field *name* from [TransactionsImport](/../types/TransactionsImport)

   Show more (19)   

---

 **Previous**   [NewAccountOrganizationInput](/types/NewAccountOrganizationInput) **Next**  [OAuthApplicationCollection](/types/OAuthApplicationCollection)

---


# OAuthApplicationCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/OAuthApplicationCollection

# OAuthApplicationCollection  Object

  A collection of "Application" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Application](/../types/Application) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *oAuthApplications* from [Host](/../types/Host)

 * Field *oAuthApplications* from [Bot](/../types/Bot)

 * Field *oAuthApplications* from [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [NonEmptyString](/types/NonEmptyString) **Next**  [OAuthAuthorization](/types/OAuthAuthorization)

---


# OAuthAuthorizationObject

Source: https://graphql-docs-v2.opencollective.com/types/OAuthAuthorization

# OAuthAuthorization  Object

  An OAuth authorization 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

   account   [Individual](/../types/Individual) !  Non-null 

   application   [Application](/../types/Application) !  Non-null 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

 The time of creation 

   updatedAt   [DateTime](/../types/DateTime) !  Non-null 

 The time of last update 

   expiresAt   [DateTime](/../types/DateTime) !  Non-null 

 The time of expiration 

   lastUsedAt   [DateTime](/../types/DateTime)  

 The last time of token was used 

   scope  [ [OAuthScope](/../types/OAuthScope) ] 

 The attached scopes. 

   preAuthorize2FA   [Boolean](/../types/Boolean) !  Non-null 

 Whether this OAuth token is allowed to directly use operations that would normally require 2FA 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *oAuthAuthorization* from [Application](/../types/Application)

 * Field *nodes* from [OAuthAuthorizationCollection](/../types/OAuthAuthorizationCollection)

 * Field *revokeOAuthAuthorization* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [OAuthApplicationCollection](/types/OAuthApplicationCollection) **Next**  [OAuthAuthorizationCollection](/types/OAuthAuthorizationCollection)

---


# OAuthAuthorizationCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/OAuthAuthorizationCollection

# OAuthAuthorizationCollection  Object

  A collection of "OAuth Authorizations" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [OAuthAuthorization](/../types/OAuthAuthorization) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *oAuthAuthorizations* from [Individual](/../types/Individual)

 

---

 **Previous**   [OAuthAuthorization](/types/OAuthAuthorization) **Next**  [OAuthAuthorizationReferenceInput](/types/OAuthAuthorizationReferenceInput)

---


# OAuthAuthorizationReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/OAuthAuthorizationReferenceInput

# OAuthAuthorizationReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The id identifying the OAuth Authorization (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *oAuthAuthorization* of field *revokeOAuthAuthorization*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [OAuthAuthorizationCollection](/types/OAuthAuthorizationCollection) **Next**  [OAuthScope](/types/OAuthScope)

---


# OAuthScopeEnum

Source: https://graphql-docs-v2.opencollective.com/types/OAuthScope

# OAuthScope  Enum

  All supported OAuth scopes 

 ## Possible Values

 ## [#](#possible-values)

     email 

 Access your email address. 

 

    incognito 

 Access your incognito account. 

 

    account 

 Manage your account, collectives and organizations. 

 

    expenses 

 Create and manage expenses, payout methods. 

 

    orders 

 Create and manage contributions, payment methods. 

 

    transactions 

 Refund and reject recorded transactions. 

 

    virtualCards 

 Create and manage virtual cards. 

 

    updates 

 Create and manage updates. 

 

    conversations 

 Create and manage conversations. 

 

    webhooks 

 Create and manage webhooks 

 

    host 

 Administrate fiscal hosts. 

 

    applications 

 Create and manage OAuth applications. 

 

    connectedAccounts 

 Create and manage connected accounts. 

 

    root 

 Perform critical administrative operations. 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *scope* from [OAuthAuthorization](/../types/OAuthAuthorization)

 * Field *scope* from [PersonalToken](/../types/PersonalToken)

 

---

 **Previous**   [OAuthAuthorizationReferenceInput](/types/OAuthAuthorizationReferenceInput) **Next**  [OCRParsingOptionsInput](/types/OCRParsingOptionsInput)

---


# OCRParsingOptionsInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/OCRParsingOptionsInput

# OCRParsingOptionsInput  Input Object

  To configure the OCR parsing 

 ## Fields

 ## [#](#fields)

     currency   [Currency](/../types/Currency)  

 The currency that you'd like to use for the amounts 

 

   

---

 **Previous**   [OAuthScope](/types/OAuthScope) **Next**  [Order](/types/Order)

---


# OrderObject

Source: https://graphql-docs-v2.opencollective.com/types/Order

# Order  Object

  Order model 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   legacyId   [Int](/../types/Int) !  Non-null 

   description   [String](/../types/String)  

   amount   [Amount](/../types/Amount) !  Non-null 

 Base order amount (without platform tip) 

   taxAmount   [Amount](/../types/Amount)  

 Tax amount 

   totalAmount   [Amount](/../types/Amount) !  Non-null 

 Total order amount, including all taxes and platform tip 

   quantity   [Int](/../types/Int)  

   status   [OrderStatus](/../types/OrderStatus)  

   frequency   [ContributionFrequency](/../types/ContributionFrequency)  

   nextChargeDate   [DateTime](/../types/DateTime)  

   lastChargedAt   [DateTime](/../types/DateTime)  

   tier   [Tier](/../types/Tier)  

   fromAccount   [Account](/../types/Account)  

   toAccount   [Account](/../types/Account)  

   transactions  [ [Transaction](/../types/Transaction) ]!  Non-null 

 Transactions for this order ordered by createdAt ASC 

   createdAt   [DateTime](/../types/DateTime)  

   updatedAt   [DateTime](/../types/DateTime)  

   totalDonations   [Amount](/../types/Amount) !  Non-null 

 WARNING: Total amount donated between collectives, though there will be edge cases especially when looking on the Order level, as the order id is not used in calculating this. 

   totalContributed   [Amount](/../types/Amount) !  Non-null 

 Total amount contributed with this order. 

   paymentMethod   [PaymentMethod](/../types/PaymentMethod)  

   paymentProcessorUrl   [String](/../types/String)  

   hostFeePercent   [Float](/../types/Float)  

 Host fee percent attached to the Order. 

   paymentProcessorFee   [Amount](/../types/Amount)  

 Payment processor fee attached to manually Added Funds. 

   platformTipAmount   [Amount](/../types/Amount)  

 Platform Tip attached to the Order. 

   platformTipEligible   [Boolean](/../types/Boolean)  

   tags  [ [String](/../types/String) ]!  Non-null 

   tax   [TaxInfo](/../types/TaxInfo)  

   taxes  [ [OrderTax](/../types/OrderTax) ]!   Deprecated 2023-04-13: Please use `tax` instead.  Non-null 

   membership   [MemberOf](/../types/MemberOf)  

 This represents a MemberOf relationship (ie: Collective backed by an Individual) attached to the Order. 

   permissions   [OrderPermissions](/../types/OrderPermissions) !  Non-null 

 The permissions given to current logged in user for this order 

   accountingCategory   [AccountingCategory](/../types/AccountingCategory)  

 The accounting category attached to this order 

   activities   [ActivityCollection](/../types/ActivityCollection) !  Non-null 

 The list of activities (ie. approved, edited, etc) for this Order ordered by date ascending 

   data   [JSON](/../types/JSON)  

 Data related to the order 

   customData   [JSON](/../types/JSON)  

 Custom data related to the order, based on the fields described by tier.customFields. Must be authenticated as an admin of the fromAccount or toAccount (returns null otherwise) 

   memo   [String](/../types/String)  

 Memo field which adds additional details about the order. For example in added funds this can be a note to mark what method (cheque, money order) the funds were received. 

   createdByAccount   [Account](/../types/Account)  

 The account who created this order 

   processedAt   [DateTime](/../types/DateTime)  

 Date the funds were received. 

   pendingContributionData   [PendingOrderData](/../types/PendingOrderData)  

 Data about the pending contribution 

   needsConfirmation   [Boolean](/../types/Boolean)  

 Whether the order needs confirmation (3DSecure/SCA) 

   comments   [CommentCollection](/../types/CommentCollection)  

 Returns the list of comments for this order, or `null`  if user is not allowed to see them 

   Show arguments (3)    transactionImportRow   [TransactionsImportRow](/../types/TransactionsImportRow)  

 [Host admins only] If the order was associated with a transactions import row, this field will reference it 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [OrderCollection](/../types/OrderCollection)

 * Field *order* from [Comment](/../types/Comment)

 * Field *order* from [Activity](/../types/Activity)

   Show more (18)   

---

 **Previous**   [OCRParsingOptionsInput](/types/OCRParsingOptionsInput) **Next**  [OrderByFieldType](/types/OrderByFieldType)

---


# OrderByFieldTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/OrderByFieldType

# OrderByFieldType  Enum

  Possible fields you can use to order by 

 ## Possible Values

 ## [#](#possible-values)

     CREATED\_AT 

    LAST\_CHARGED\_AT 

    ACTIVITY 

 The financial activity of the collective (number of transactions) 

 

    HOST\_RANK 

    HOSTED\_COLLECTIVES\_COUNT 

    RANK 

    BALANCE 

    MEMBER\_COUNT 

    TOTAL\_CONTRIBUTED 

    NAME 

    STARTS\_AT 

 Order by start date 

 

    ENDS\_AT 

 Order by end date 

 

   

---

 **Previous**   [Order](/types/Order) **Next**  [OrderByInput](/types/OrderByInput)

---


# OrderByInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/OrderByInput

# OrderByInput  Input Object

  Input to order collection 

 ## Fields

 ## [#](#fields)

     direction   [OrderDirection](/../types/OrderDirection) !  Non-null

 Ordering direction. 

 

    field   [OrderByFieldType](/../types/OrderByFieldType) !  Non-null

 Field to order by. 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *orderBy* of field *memberOf*
 from type [Host](/../types/Host)

 * Argument *orderBy* of field *childrenAccounts*
 from type [Host](/../types/Host)

 * Argument *orderBy* of field *hostedAccounts*
 from type [Host](/../types/Host)

   Show more (20)   

---

 **Previous**   [OrderByFieldType](/types/OrderByFieldType) **Next**  [OrderCollection](/types/OrderCollection)

---


# OrderCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/OrderCollection

# OrderCollection  Object

  A collection of "Orders" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Order](/../types/Order) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *orders* from [Tier](/../types/Tier)

 * Field *orders* from [Host](/../types/Host)

 * Field *orders* from [PaymentMethod](/../types/PaymentMethod)

   Show more (13)   

---

 **Previous**   [OrderByInput](/types/OrderByInput) **Next**  [OrderContextInput](/types/OrderContextInput)

---


# OrderContextInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/OrderContextInput

# OrderContextInput  Input Object

  Some context about how an order was created 

 ## Fields

 ## [#](#fields)

     isEmbed   [Boolean](/../types/Boolean)  

 Whether this order was created using the embedded contribution flow 

 

    isNewPlatformTipFlow   [Boolean](/../types/Boolean)  

 Whether this order was created using the new platform tip flow 

 

   

---

 **Previous**   [OrderCollection](/types/OrderCollection) **Next**  [OrderCreateInput](/types/OrderCreateInput)

---


# OrderCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/OrderCreateInput

# OrderCreateInput  Input Object

  Input to create a new order 

 ## Fields

 ## [#](#fields)

     amount   [AmountInput](/../types/AmountInput) !  Non-null

 The contribution amount for 1 quantity, without platform contribution and taxes 

 

    context   [OrderContextInput](/../types/OrderContextInput)  

 Some context about how this order was created 

 

    customData   [JSON](/../types/JSON)  

 If the tier has some "customFields", use this field to set their values 

 

    data   [JSON](/../types/JSON)  

 Data related to this order 

 

    frequency   [ContributionFrequency](/../types/ContributionFrequency) !  Non-null

    fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

 The profile making the order. Can be null for guest contributions. 

 

    fromAccountInfo   [OrderFromAccountInfo](/../types/OrderFromAccountInfo)  

 Additional information about the contributing profile 

 

    guestInfo   [GuestInfoInput](/../types/GuestInfoInput)  

 Use this when fromAccount is null to pass the guest info 

 

    isBalanceTransfer   [Boolean](/../types/Boolean)  

 Whether this is transferring the remaining balance from a project/event/collective 

 

    paymentMethod   [PaymentMethodInput](/../types/PaymentMethodInput)  

 The payment method used for this order 

 

    platformTipAmount   [AmountInput](/../types/AmountInput)  

 Platform tip attached to this order 

 

    quantity   [Int](/../types/Int) !  Non-null

 Default: 1    tags  [ [String](/../types/String) ] 

 Tags associated to the order 

 

    tax   [TaxInput](/../types/TaxInput)  

 The tax to apply to the order 

 

    tier   [TierReferenceInput](/../types/TierReferenceInput)  

 The tier you are contributing to 

 

    toAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null

 The profile you want to contribute to 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *order* of field *createOrder*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [OrderContextInput](/types/OrderContextInput) **Next**  [OrderDirection](/types/OrderDirection)

---


# OrderDirectionEnum

Source: https://graphql-docs-v2.opencollective.com/types/OrderDirection

# OrderDirection  Enum

  Possible directions in which to order a list of items 

 ## Possible Values

 ## [#](#possible-values)

     ASC 

    DESC 

   

---

 **Previous**   [OrderCreateInput](/types/OrderCreateInput) **Next**  [OrderFromAccountInfo](/types/OrderFromAccountInfo)

---


# OrderFromAccountInfoInput Object

Source: https://graphql-docs-v2.opencollective.com/types/OrderFromAccountInfo

# OrderFromAccountInfo  Input Object

  Some context about how an order was created 

 ## Fields

 ## [#](#fields)

     email   [String](/../types/String)  

    legalName   [String](/../types/String)  

    location   [LocationInput](/../types/LocationInput)  

 The location of the contributor. Account location will be updated with this address if different from the existing one. 

 

    name   [String](/../types/String)  

   

---

 **Previous**   [OrderDirection](/types/OrderDirection) **Next**  [OrderPausedBy](/types/OrderPausedBy)

---


# OrderPausedByEnum

Source: https://graphql-docs-v2.opencollective.com/types/OrderPausedBy

# OrderPausedBy  Enum

  The user or system that paused the order 

 ## Possible Values

 ## [#](#possible-values)

     USER 

 Individual who administers the account for this contribution 

 

    HOST 

 The host of the collective 

 

    PLATFORM 

 The platform 

 

    COLLECTIVE 

 The collective 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *pausedBy* of field *orders*
 from type [Host](/../types/Host)

 * Argument *pausedBy* of field *orders*
 from type [PaymentMethod](/../types/PaymentMethod)

 * Argument *pausedBy* of field *orders*
 from type [Bot](/../types/Bot)

   Show more (11)   

---

 **Previous**   [OrderFromAccountInfo](/types/OrderFromAccountInfo) **Next**  [OrderPermissions](/types/OrderPermissions)

---


# OrderPermissionsObject

Source: https://graphql-docs-v2.opencollective.com/types/OrderPermissions

# OrderPermissions  Object

  Fields for the user permissions on an order 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   canMarkAsExpired   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can mark this order as expired 

   canMarkAsPaid   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can mark this order as unpaid 

   canEdit   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can edit this pending order 

   canComment   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can comment on this order 

   canSeePrivateActivities   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can see private activities for this order 

   canSetTags   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can set tags on this order 

   canUpdateAccountingCategory   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can update the accounting category of this order 

   canResume   [Boolean](/../types/Boolean) !  Non-null 

 If paused, whether the current user can resume this order 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *permissions* from [Order](/../types/Order)

 

---

 **Previous**   [OrderPausedBy](/types/OrderPausedBy) **Next**  [OrderReferenceInput](/types/OrderReferenceInput)

---


# OrderReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/OrderReferenceInput

# OrderReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the order (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The legacy public id identifying the order (ie: 4242) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *order* of field *transactions*
 from type [Host](/../types/Host)

 * Argument *order* of field *transactions*
 from type [Bot](/../types/Bot)

 * Argument *order* of field *transactions*
 from type [Collective](/../types/Collective)

   Show more (19)   

---

 **Previous**   [OrderPermissions](/types/OrderPermissions) **Next**  [OrderStatus](/types/OrderStatus)

---


# OrderStatusEnum

Source: https://graphql-docs-v2.opencollective.com/types/OrderStatus

# OrderStatus  Enum

  All order statuses 

 ## Possible Values

 ## [#](#possible-values)

     NEW 

    REQUIRE\_CLIENT\_CONFIRMATION 

    PAID 

    ERROR 

    PROCESSING 

    REJECTED 

    ACTIVE 

    CANCELLED 

    PENDING 

    EXPIRED 

    DISPUTED 

    REFUNDED 

    PAUSED 

    IN\_REVIEW 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *status* of field *orders*
 from type [Tier](/../types/Tier)

 * Field *status* from [Order](/../types/Order)

 * Argument *status* of field *orders*
 from type [Host](/../types/Host)

   Show more (13)   

---

 **Previous**   [OrderReferenceInput](/types/OrderReferenceInput) **Next**  [OrderTax](/types/OrderTax)

---


# OrderTaxObject

Source: https://graphql-docs-v2.opencollective.com/types/OrderTax

# OrderTax  Object

  ## Fields

 ## [#](#fields)

     type   [TaxType](/../types/TaxType) !  Non-null 

   percentage   [Int](/../types/Int) !   Deprecated Please use `rate` instead  Non-null 

   rate   [Float](/../types/Float) !  Non-null 

 Percentage applied, between 0-1 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *taxes* from [Order](/../types/Order)

 

---

 **Previous**   [OrderStatus](/types/OrderStatus) **Next**  [OrderTaxInput](/types/OrderTaxInput)

---


# OrderTaxInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/OrderTaxInput

# OrderTaxInput  Input Object

  Input to set taxes for an order 

 ## Fields

 ## [#](#fields)

     amount   [AmountInput](/../types/AmountInput) !  Non-null

    country   [CountryISO](/../types/CountryISO)  

 Country of the account ordering, to know from where to apply the tax 

 

    idNumber   [String](/../types/String)  

 Tax identification number, if any 

 

    type   [TaxType](/../types/TaxType) !  Non-null

   

---

 **Previous**   [OrderTax](/types/OrderTax) **Next**  [OrderUpdateInput](/types/OrderUpdateInput)

---


# OrderUpdateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/OrderUpdateInput

# OrderUpdateInput  Input Object

  ## Fields

 ## [#](#fields)

     amount   [AmountInput](/../types/AmountInput)  

 Amount received by collective, excluding any tips, taxes or fees 

 

    hostFeePercent   [Float](/../types/Float)  

 Host fee percent to be applied to the order 

 

    id   [String](/../types/String)  

 The public id identifying the order (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The legacy public id identifying the order (ie: 4242) 

 

    paymentProcessorFee   [AmountInput](/../types/AmountInput)  

 Amount paid in fees for the payment processor 

 

    platformTip   [AmountInput](/../types/AmountInput)  

 Amount intended as tip for the platform 

 

    processedAt   [DateTime](/../types/DateTime)  

 Date the funds were received 

 

    tax   [TaxInput](/../types/TaxInput)  

 The tax to apply to the order 

 

    transactionsImportRow   [TransactionsImportRowReferenceInput](/../types/TransactionsImportRowReferenceInput)  

 Reference to the transaction import row to link the order to 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *order* of field *processPendingOrder*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [OrderTaxInput](/types/OrderTaxInput) **Next**  [OrderWithPayment](/types/OrderWithPayment)

---


# OrderWithPaymentObject

Source: https://graphql-docs-v2.opencollective.com/types/OrderWithPayment

# OrderWithPayment  Object

  ## Fields

 ## [#](#fields)

     order   [Order](/../types/Order) !  Non-null 

 The order created 

   guestToken   [String](/../types/String)  

 If donating as a guest, this will contain your guest token to confirm your order 

   stripeError   [StripeError](/../types/StripeError)  

 This field will be set if the order was created but there was an error with Stripe during the payment 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *createOrder* from [Mutation](/../types/Mutation)

 * Field *confirmOrder* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [OrderUpdateInput](/types/OrderUpdateInput) **Next**  [Organization](/types/Organization)

---


# OrganizationObject

Source: https://graphql-docs-v2.opencollective.com/types/Organization

# Organization  Object

  This represents an Organization account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id identifying the account (ie: 5v08jk63-w4g9nbpz-j7qmyder-p7ozax5g) 

   legacyId   [Int](/../types/Int) !  Non-null 

 The internal database identifier of the collective (ie: 580) 

   slug   [String](/../types/String) !  Non-null 

 The slug identifying the account (ie: babel) 

   type   [AccountType](/../types/AccountType) !  Non-null 

 The type of the account (BOT/COLLECTIVE/EVENT/ORGANIZATION/INDIVIDUAL/VENDOR) 

   name   [String](/../types/String)  

 Public name 

   legalName   [String](/../types/String)  

 Private, legal name. Used for expense receipts, taxes, etc. Scope: "account". 

   description   [String](/../types/String)  

   longDescription   [String](/../types/String)  

   tags  [ [String](/../types/String) ] 

   website   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   twitterHandle   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   githubHandle   [String](/../types/String)    Deprecated 2022-06-03: Please use repositoryUrl 

   repositoryUrl   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   socialLinks  [ [SocialLink](/../types/SocialLink) !]!  Non-null 

   currency   [Currency](/../types/Currency) !  Non-null 

 The currency of the account 

   expensePolicy   [String](/../types/String)    Deprecated 2024-11-04: Please use policies.EXPENSE\_POLICIES 

   isIncognito   [Boolean](/../types/Boolean) !  Non-null 

 Defines if the contributors wants to be incognito (name not displayed) 

   imageUrl   [String](/../types/String)  

   Show arguments (2)    backgroundImageUrl   [String](/../types/String)  

   Show arguments (2)    createdAt   [DateTime](/../types/DateTime)  

 The time of creation 

   updatedAt   [DateTime](/../types/DateTime)  

 The time of last update 

   unhostedAt   [DateTime](/../types/DateTime)  

 Date of unhosting by a given Fiscal Host. 

   Show arguments (1)    isArchived   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether this account is archived 

   isFrozen   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account is frozen 

   isActive   [Boolean](/../types/Boolean)  

 Returns whether the account accepts financial contributions. 

   isHost   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether the account is setup to Host collectives. 

   isAdmin   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user is an admin of this account 

   parentAccount   [Account](/../types/Account)    Deprecated 2022-12-16: use parent on AccountWithParent instead 

   members   [MemberCollection](/../types/MemberCollection) !  Non-null 

 Get all members (admins, members, backers, followers) 

   Show arguments (7)    memberInvitations  [ [MemberInvitation](/../types/MemberInvitation) ] 

 [AUTHENTICATED] Returns the pending invitations 

   Show arguments (3)    legalDocuments  [ [LegalDocument](/../types/LegalDocument) ] 

 The legal documents associated with this account 

   Show arguments (1)    memberOf   [MemberOfCollection](/../types/MemberOfCollection) !  Non-null 

   Show arguments (13)    emails  [ [EmailAddress](/../types/EmailAddress) !] 

 Returns the emails of the account. Individuals only have one, but organizations can have multiple emails. 

   transactions   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   Show arguments (34)    orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

   Show arguments (28)    expenses   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   Show arguments (26)    settings   [JSON](/../types/JSON) !  Non-null 

   conversations   [ConversationCollection](/../types/ConversationCollection) !  Non-null 

   Show arguments (3)    conversationsTags  [ [TagStat](/../types/TagStat) ] 

 Returns conversation's tags for collective sorted by popularity 

   Show arguments (1)    expensesTags  [ [TagStat](/../types/TagStat) ] 

 Returns expense tags for collective sorted by popularity 

   Show arguments (1)    supportedExpenseTypes  [ [ExpenseType](/../types/ExpenseType) !]!  Non-null 

 The list of expense types supported by this account 

   transferwise   [TransferWise](/../types/TransferWise)  

   payoutMethods  [ [PayoutMethod](/../types/PayoutMethod) ] 

 The list of payout methods that this collective can use to get paid. In most cases, admin only and scope: "expenses". 

   Show arguments (1)    paymentMethods  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods that this collective can use to pay for Orders. Admin or Host only. Scope: "orders". 

   Show arguments (3)    paymentMethodsWithPendingConfirmation  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods for this account that are pending a client confirmation (3D Secure / SCA) 

   connectedAccounts  [ [ConnectedAccount](/../types/ConnectedAccount) ] 

 The list of connected accounts (Stripe, PayPal, etc ...). Admin only. Scope: "connectedAccounts". 

   oAuthApplications   [OAuthApplicationCollection](/../types/OAuthApplicationCollection)  

 The list of applications created by this account. Admin only. Scope: "applications". 

   Show arguments (2)    location   [Location](/../types/Location)  

```
    
  
```
    categories  [ [String](/../types/String) ]!  Non-null 

 Categories set by Open Collective to help moderation. 

   stats   [AccountStats](/../types/AccountStats)  

   canHaveChangelogUpdates   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account can have changelog updates 

   updates   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

 Updates published by the account. To see unpublished updates, you need to be an admin and have the scope "updates". 

   Show arguments (7)    features   [CollectiveFeatures](/../types/CollectiveFeatures) !  Non-null 

 Describes the features enabled and available for this account 

   virtualCards   [VirtualCardCollection](/../types/VirtualCardCollection)  

 Virtual Cards attached to the account. Admin only. Scope: "virtualCards". 

   Show arguments (7)    virtualCardMerchants   [AccountCollection](/../types/AccountCollection)  

 Virtual Cards Merchants used by the account. Admin only. Scope: "virtualCards". 

   Show arguments (2)    childrenAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (6)    policies   [Policies](/../types/Policies) !  Non-null 

 Policies for the account. To see non-public policies you need to be admin and have the scope: "account". 

   activitySubscriptions  [ [ActivitySubscription](/../types/ActivitySubscription) ] 

 List of activities that the logged-in user is subscribed for this collective 

   Show arguments (1)    permissions   [AccountPermissions](/../types/AccountPermissions) !  Non-null 

 Logged-in user permissions on an account 

   hostApplicationRequests   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

 Host application requests 

   Show arguments (4)    feed  [ [Activity](/../types/Activity) ] 

   Show arguments (3)    duplicatedFromAccount   [Account](/../types/Account)  

 If created by duplication, the account from which this one was duplicated 

   duplicatedAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

 If this account was duplicated, the accounts that were created from it 

   Show arguments (2)    transactionGroups   [TransactionGroupCollection](/../types/TransactionGroupCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (6)    transactionReports   [TransactionReports](/../types/TransactionReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)    webhooks   [WebhookCollection](/../types/WebhookCollection) !  Non-null 

   Show arguments (3)    totalFinancialContributors   [Int](/../types/Int) !  Non-null 

 Number of unique financial contributors. 

   Show arguments (1)    tiers   [TierCollection](/../types/TierCollection) !  Non-null 

   Show arguments (2)    contributors   [ContributorCollection](/../types/ContributorCollection) !  Non-null 

 All the persons and entities that contribute to this account 

   Show arguments (3)    activeContributors   [AccountCollection](/../types/AccountCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (5)    platformFeePercent   [Float](/../types/Float) !  Non-null 

 How much platform fees are charged for this account 

   platformContributionAvailable   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if a custom contribution to Open Collective can be submitted for contributions made to this account 

   contributionPolicy   [String](/../types/String)  

   canStartResumeContributionsProcess   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user can start the process to resume contributions for account 

   hasResumeContributionsProcessStarted   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the account has started the process to resume contributions 

   email   [String](/../types/String)    Deprecated 2022-07-18: This field is deprecated and will return null 

   host   [Host](/../types/Host)  

 If the organization is a host account, this will return the matching Host object 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Account](/../types/Account) , [AccountWithContributions](/../types/AccountWithContributions) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *organization* from [Query](/../types/Query)

 * Field *createOrganization* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [OrderWithPayment](/types/OrderWithPayment) **Next**  [OrganizationCreateInput](/types/OrganizationCreateInput)

---


# OrganizationCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/OrganizationCreateInput

# OrganizationCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     backgroundImage   [Upload](/../types/Upload)  

 The profile background image, for the banner and social media sharing 

 

    description   [String](/../types/String) !  Non-null

    image   [Upload](/../types/Upload)  

 The profile avatar image 

 

    legalName   [String](/../types/String)  

    name   [String](/../types/String) !  Non-null

    settings   [JSON](/../types/JSON)  

    slug   [String](/../types/String) !  Non-null

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *organization* of field *createOrganization*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Organization](/types/Organization) **Next**  [ParseUploadedFileResult](/types/ParseUploadedFileResult)

---


# ParseUploadedFileResultObject

Source: https://graphql-docs-v2.opencollective.com/types/ParseUploadedFileResult

# ParseUploadedFileResult  Object

  ## Fields

 ## [#](#fields)

     success   [Boolean](/../types/Boolean) !  Non-null 

 Whether the parsing was successful 

   message   [String](/../types/String)  

 A message describing the parsing result, usually an error message (if parsing failed) or some warnings 

   expense   [ExpenseParsedFileInfo](/../types/ExpenseParsedFileInfo)  

 The parsed expense information 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *parsingResult* from [UploadFileResult](/../types/UploadFileResult)

 

---

 **Previous**   [OrganizationCreateInput](/types/OrganizationCreateInput) **Next**  [PaymentIntent](/types/PaymentIntent)

---


# PaymentIntentObject

Source: https://graphql-docs-v2.opencollective.com/types/PaymentIntent

# PaymentIntent  Object

  A Stripe payment intent 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   paymentIntentClientSecret   [String](/../types/String) !  Non-null 

   stripeAccount   [String](/../types/String) !  Non-null 

   stripeAccountPublishableSecret   [String](/../types/String) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *createPaymentIntent* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [ParseUploadedFileResult](/types/ParseUploadedFileResult) **Next**  [PaymentIntentInput](/types/PaymentIntentInput)

---


# PaymentIntentInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PaymentIntentInput

# PaymentIntentInput  Input Object

  Input to create a Stripe payment intent 

 ## Fields

 ## [#](#fields)

     amount   [AmountInput](/../types/AmountInput) !  Non-null

    frequency   [ContributionFrequency](/../types/ContributionFrequency)  

    fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

    toAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *paymentIntent* of field *createPaymentIntent*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [PaymentIntent](/types/PaymentIntent) **Next**  [PaymentMethod](/types/PaymentMethod)

---


# PaymentMethodObject

Source: https://graphql-docs-v2.opencollective.com/types/PaymentMethod

# PaymentMethod  Object

  PaymentMethod model 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

   legacyId   [Int](/../types/Int)  

   name   [String](/../types/String)  

   service   [PaymentMethodService](/../types/PaymentMethodService)  

   type   [PaymentMethodType](/../types/PaymentMethodType)  

   providerType   [PaymentMethodLegacyType](/../types/PaymentMethodLegacyType)    Deprecated 2021-03-02: Please use service + type 

 Defines the type of the payment method. Meant to be moved to "type" in the future. 

   balance   [Amount](/../types/Amount) !  Non-null 

 Returns the balance amount and the currency of this paymentMethod 

   account   [Account](/../types/Account)  

   sourcePaymentMethod   [PaymentMethod](/../types/PaymentMethod)  

 For gift cards, this field will return to the source payment method 

   data   [JSON](/../types/JSON)  

   limitedToHosts  [ [Host](/../types/Host) ] 

   expiryDate   [DateTime](/../types/DateTime)  

   createdAt   [DateTime](/../types/DateTime)  

   monthlyLimit   [Amount](/../types/Amount)  

 For monthly gift cards, this field will return the monthly limit 

   orders   [OrderCollection](/../types/OrderCollection)  

 Get all the orders associated with this payment method 

   Show arguments (27)    ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *paymentMethod* from [Order](/../types/Order)

 * Field *paymentMethod* from [Expense](/../types/Expense)

 * Field *paymentMethods* from [Host](/../types/Host)

   Show more (27)   

---

 **Previous**   [PaymentIntentInput](/types/PaymentIntentInput) **Next**  [PaymentMethodInput](/types/PaymentMethodInput)

---


# PaymentMethodInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PaymentMethodInput

# PaymentMethodInput  Input Object

  An input to use for creating or retrieving payment methods 

 ## Fields

 ## [#](#fields)

     creditCardInfo   [CreditCardCreateInput](/../types/CreditCardCreateInput)  

 When creating a credit card, use this field to set its info 

 

    id   [String](/../types/String)  

 The id assigned to the payment method 

 

    isSavedForLater   [Boolean](/../types/Boolean)  

 Whether this payment method should be saved for future payments 

 

    name   [String](/../types/String)  

 Name of this payment method 

 

    paymentIntentId   [String](/../types/String)  

 The Payment Intent ID used in this checkout 

 

    paypalInfo   [PaypalPaymentInput](/../types/PaypalPaymentInput)  

 To pass when type is PAYPAL 

 

    service   [PaymentMethodService](/../types/PaymentMethodService)  

 Service of this payment method 

 

    type   [PaymentMethodType](/../types/PaymentMethodType)  

 Type of this payment method 

 

   

---

 **Previous**   [PaymentMethod](/types/PaymentMethod) **Next**  [PaymentMethodLegacyType](/types/PaymentMethodLegacyType)

---


# PaymentMethodLegacyTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/PaymentMethodLegacyType

# PaymentMethodLegacyType  Enum

  ## Possible Values

 ## [#](#possible-values)

     ALIPAY 

    CREDIT\_CARD 

    GIFT\_CARD 

    PREPAID\_BUDGET 

    ACCOUNT\_BALANCE 

    PAYPAL 

    BANK\_TRANSFER 

    ADDED\_FUNDS 

    CRYPTO 

    PAYMENT\_INTENT 

    US\_BANK\_ACCOUNT 

    SEPA\_DEBIT 

    BACS\_DEBIT 

    BANCONTACT 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *supportedPaymentMethods* from [Host](/../types/Host)

 * Field *providerType* from [PaymentMethod](/../types/PaymentMethod)

 

---

 **Previous**   [PaymentMethodInput](/types/PaymentMethodInput) **Next**  [PaymentMethodReferenceInput](/types/PaymentMethodReferenceInput)

---


# PaymentMethodReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PaymentMethodReferenceInput

# PaymentMethodReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The id assigned to the payment method 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *paymentMethod* of field *transactions*
 from type [Host](/../types/Host)

 * Argument *paymentMethod* of field *orders*
 from type [Host](/../types/Host)

 * Argument *paymentMethod* of field *transactions*
 from type [Bot](/../types/Bot)

   Show more (23)   

---

 **Previous**   [PaymentMethodLegacyType](/types/PaymentMethodLegacyType) **Next**  [PaymentMethodService](/types/PaymentMethodService)

---


# PaymentMethodServiceEnum

Source: https://graphql-docs-v2.opencollective.com/types/PaymentMethodService

# PaymentMethodService  Enum

  ## Possible Values

 ## [#](#possible-values)

     PAYPAL 

    STRIPE 

    OPENCOLLECTIVE 

    THEGIVINGBLOCK 

    WISE 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *paymentMethodService* of field *transactions*
 from type [Host](/../types/Host)

 * Argument *paymentMethodService* of field *orders*
 from type [Host](/../types/Host)

 * Argument *service* of field *paymentMethods*
 from type [Host](/../types/Host)

   Show more (35)   

---

 **Previous**   [PaymentMethodReferenceInput](/types/PaymentMethodReferenceInput) **Next**  [PaymentMethodType](/types/PaymentMethodType)

---


# PaymentMethodTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/PaymentMethodType

# PaymentMethodType  Enum

  ## Possible Values

 ## [#](#possible-values)

     default   Deprecated Please use uppercase values

    alipay   Deprecated Please use uppercase values

    creditcard   Deprecated Please use uppercase values

    prepaid   Deprecated Please use uppercase values

    payment   Deprecated Please use uppercase values

    subscription   Deprecated Please use uppercase values

    collective   Deprecated Please use uppercase values

    host   Deprecated Please use uppercase values

    adaptive   Deprecated Please use uppercase values

    giftcard   Deprecated Please use uppercase values

    manual   Deprecated Please use uppercase values

    crypto   Deprecated Please use uppercase values

    paymentintent   Deprecated Please use uppercase values

    us\_bank\_account   Deprecated Please use uppercase values

    sepa\_debit   Deprecated Please use uppercase values

    bacs\_debit   Deprecated Please use uppercase values

    bancontact   Deprecated Please use uppercase values

    link   Deprecated Please use uppercase values

    bank\_transfer   Deprecated Please use uppercase values

    payout   Deprecated Please use uppercase values

    virtual\_card   Deprecated Please use uppercase values

    swish   Deprecated Please use uppercase values

    DEFAULT 

    ALIPAY 

    CREDITCARD 

    PREPAID 

    PAYMENT 

    SUBSCRIPTION 

    COLLECTIVE 

    HOST 

    ADAPTIVE 

    GIFTCARD 

    MANUAL 

    CRYPTO 

    PAYMENT\_INTENT 

    US\_BANK\_ACCOUNT 

    SEPA\_DEBIT 

    BACS\_DEBIT 

    BANCONTACT 

    LINK 

    BANK\_TRANSFER 

    PAYOUT 

    VIRTUAL\_CARD 

    SWISH 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *paymentMethodType* of field *transactions*
 from type [Host](/../types/Host)

 * Argument *paymentMethodType* of field *orders*
 from type [Host](/../types/Host)

 * Argument *type* of field *paymentMethods*
 from type [Host](/../types/Host)

   Show more (36)   

---

 **Previous**   [PaymentMethodService](/types/PaymentMethodService) **Next**  [PayoutMethod](/types/PayoutMethod)

---


# PayoutMethodObject

Source: https://graphql-docs-v2.opencollective.com/types/PayoutMethod

# PayoutMethod  Object

  A payout method 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for this payout method 

   type   [PayoutMethodType](/../types/PayoutMethodType)  

 The type of this payout method (usually the payment provider) 

   name   [String](/../types/String)  

 A friendly name for users to easily find their payout methods 

   isSaved   [Boolean](/../types/Boolean)  

 Whether this payout method has been saved to be used for future payouts 

   data   [JSON](/../types/JSON)  

 The actual data for this payout method. Content depends on the type. 

   canBeEditedOrDeleted   [Boolean](/../types/Boolean)  

 Whether this payout method can be edit or deleted 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *payoutMethod* from [Expense](/../types/Expense)

 * Field *payoutMethods* from [Host](/../types/Host)

 * Field *bankAccount* from [Host](/../types/Host)

   Show more (17)   

---

 **Previous**   [PaymentMethodType](/types/PaymentMethodType) **Next**  [PayoutMethodInput](/types/PayoutMethodInput)

---


# PayoutMethodInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PayoutMethodInput

# PayoutMethodInput  Input Object

  ## Fields

 ## [#](#fields)

     data   [JSON](/../types/JSON)  

 Additional data specific to the payout method type. For custom payout methods (type=OTHER), must contain only `content`  (string) and `currency`  fields. For other types, may contain type-specific details (e.g., bank account details, PayPal email) 

 

    id   [String](/../types/String)  

 The unique identifier of the payout method 

 

    isSaved   [Boolean](/../types/Boolean)  

 Whether this payout method should be saved for future use 

 

    legacyId   [Int](/../types/Int)  

 The legacy identifier used in older systems 

 

    name   [String](/../types/String)  

 A human-readable name for the payout method 

 

    type   [PayoutMethodType](/../types/PayoutMethodType)  

 The type of payout method (e.g., PayPal, bank transfer) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *payoutMethod* of field *createPayoutMethod*
 from type [Mutation](/../types/Mutation)

 * Argument *payoutMethod* of field *editPayoutMethod*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [PayoutMethod](/types/PayoutMethod) **Next**  [PayoutMethodReferenceInput](/types/PayoutMethodReferenceInput)

---


# PayoutMethodReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PayoutMethodReferenceInput

# PayoutMethodReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The id assigned to the payout method 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *payoutMethod* of field *transactions*
 from type [Host](/../types/Host)

 * Argument *payoutMethod* of field *expenses*
 from type [Host](/../types/Host)

 * Argument *payoutMethod* of field *transactions*
 from type [Bot](/../types/Bot)

   Show more (21)   

---

 **Previous**   [PayoutMethodInput](/types/PayoutMethodInput) **Next**  [PayoutMethodType](/types/PayoutMethodType)

---


# PayoutMethodTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/PayoutMethodType

# PayoutMethodType  Enum

  ## Possible Values

 ## [#](#possible-values)

     OTHER 

    PAYPAL 

    BANK\_ACCOUNT 

    ACCOUNT\_BALANCE 

    CREDIT\_CARD 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *payoutMethodType* of field *expenses*
 from type [Host](/../types/Host)

 * Field *supportedPayoutMethods* from [Host](/../types/Host)

 * Field *type* from [PayoutMethod](/../types/PayoutMethod)

   Show more (12)   

---

 **Previous**   [PayoutMethodReferenceInput](/types/PayoutMethodReferenceInput) **Next**  [PaypalPaymentInput](/types/PaypalPaymentInput)

---


# PaypalPaymentInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PaypalPaymentInput

# PaypalPaymentInput  Input Object

  ## Fields

 ## [#](#fields)

     data   [JSON](/../types/JSON)  

    orderId   [String](/../types/String)  

    subscriptionId   [String](/../types/String)  

    token   [String](/../types/String)  

   

---

 **Previous**   [PayoutMethodType](/types/PayoutMethodType) **Next**  [PaypalPlan](/types/PaypalPlan)

---


# PaypalPlanObject

Source: https://graphql-docs-v2.opencollective.com/types/PaypalPlan

# PaypalPlan  Object

  A PayPal plan to associate with a contribution 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *paypalPlan* from [Query](/../types/Query)

 

---

 **Previous**   [PaypalPaymentInput](/types/PaypalPaymentInput) **Next**  [PendingOrderCreateInput](/types/PendingOrderCreateInput)

---


# PendingOrderCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PendingOrderCreateInput

# PendingOrderCreateInput  Input Object

  Input to create a new pending order 

 ## Fields

 ## [#](#fields)

     accountingCategory   [AccountingCategoryReferenceInput](/../types/AccountingCategoryReferenceInput)  

 The accounting category of this order 

 

    amount   [AmountInput](/../types/AmountInput) !  Non-null

 The contribution amount, without platform contribution and taxes 

 

    description   [String](/../types/String)  

 Public order description 

 

    expectedAt   [DateTime](/../types/DateTime)  

 When is the money expected? 

 

    fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null

 The profile making the contribution. 

 

    fromAccountInfo   [OrderFromAccountInfo](/../types/OrderFromAccountInfo)  

 Additional information about the contributing profile 

 

    hostFeePercent   [Float](/../types/Float)  

 Custom Host fee percent for this order 

 

    memo   [String](/../types/String)  

 Private memo for the host 

 

    paymentMethod   [String](/../types/String)  

 Payment method expected for this order 

 

    ponumber   [String](/../types/String)  

 External identifier for the order 

 

    tax   [TaxInput](/../types/TaxInput)  

 The tax to apply to the order 

 

    tier   [TierReferenceInput](/../types/TierReferenceInput)  

 The tier you are contributing to 

 

    toAccount   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null

 The collective you want to contribute to 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *order* of field *createPendingOrder*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [PaypalPlan](/types/PaypalPlan) **Next**  [PendingOrderData](/types/PendingOrderData)

---


# PendingOrderDataObject

Source: https://graphql-docs-v2.opencollective.com/types/PendingOrderData

# PendingOrderData  Object

  ## Fields

 ## [#](#fields)

     expectedAt   [DateTime](/../types/DateTime)  

   paymentMethod   [String](/../types/String)  

   ponumber   [String](/../types/String)  

   memo   [String](/../types/String)  

   fromAccountInfo   [PendingOrderFromAccountInfo](/../types/PendingOrderFromAccountInfo)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *pendingContributionData* from [Order](/../types/Order)

 

---

 **Previous**   [PendingOrderCreateInput](/types/PendingOrderCreateInput) **Next**  [PendingOrderEditInput](/types/PendingOrderEditInput)

---


# PendingOrderEditInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PendingOrderEditInput

# PendingOrderEditInput  Input Object

  Input to edit an existing pending order 

 ## Fields

 ## [#](#fields)

     accountingCategory   [AccountingCategoryReferenceInput](/../types/AccountingCategoryReferenceInput)  

 The accounting category of this order 

 

    amount   [AmountInput](/../types/AmountInput) !  Non-null

 The contribution amount, without platform contribution and taxes 

 

    description   [String](/../types/String)  

 Public order description 

 

    expectedAt   [DateTime](/../types/DateTime)  

 When is the money expected? 

 

    fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

 The profile making the contribution. 

 

    fromAccountInfo   [OrderFromAccountInfo](/../types/OrderFromAccountInfo)  

 Additional information about the contributing profile 

 

    hostFeePercent   [Float](/../types/Float)  

 Custom Host fee percent for this order 

 

    id   [String](/../types/String)  

 The public id identifying the order (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The legacy public id identifying the order (ie: 4242) 

 

    memo   [String](/../types/String)  

 Private memo for the host 

 

    paymentMethod   [String](/../types/String)  

 Payment method expected for this order 

 

    platformTipAmount   [AmountInput](/../types/AmountInput)  

 Platform tip attached to this order 

 

    ponumber   [String](/../types/String)  

 External identifier for the order 

 

    tax   [TaxInput](/../types/TaxInput)  

 The tax to apply to the order 

 

    tier   [TierReferenceInput](/../types/TierReferenceInput)  

 The tier you are contributing to 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *order* of field *editPendingOrder*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [PendingOrderData](/types/PendingOrderData) **Next**  [PendingOrderFromAccountInfo](/types/PendingOrderFromAccountInfo)

---


# PendingOrderFromAccountInfoObject

Source: https://graphql-docs-v2.opencollective.com/types/PendingOrderFromAccountInfo

# PendingOrderFromAccountInfo  Object

  ## Fields

 ## [#](#fields)

     name   [String](/../types/String)  

   email   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *fromAccountInfo* from [PendingOrderData](/../types/PendingOrderData)

 

---

 **Previous**   [PendingOrderEditInput](/types/PendingOrderEditInput) **Next**  [Permission](/types/Permission)

---


# PermissionObject

Source: https://graphql-docs-v2.opencollective.com/types/Permission

# Permission  Object

  ## Fields

 ## [#](#fields)

     allowed   [Boolean](/../types/Boolean) !  Non-null 

   reason   [String](/../types/String)  

   reasonDetails   [JSON](/../types/JSON)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *addFunds* from [AccountPermissions](/../types/AccountPermissions)

 * Field *contact* from [AccountPermissions](/../types/AccountPermissions)

 * Field *canDownloadPaymentReceipts* from [AccountPermissions](/../types/AccountPermissions)

   Show more (20)   

---

 **Previous**   [PendingOrderFromAccountInfo](/types/PendingOrderFromAccountInfo) **Next**  [PersonalToken](/types/PersonalToken)

---


# PersonalTokenObject

Source: https://graphql-docs-v2.opencollective.com/types/PersonalToken

# PersonalToken  Object

  A personal token 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for this personal token 

   name   [String](/../types/String)  

 A friendly name for users to easily find their personal tokens 

   token   [String](/../types/String)  

 The personal token 

   expiresAt   [DateTime](/../types/DateTime)  

 The date on which the personal token expires 

   scope  [ [OAuthScope](/../types/OAuthScope) ] 

 The scopes of the personal token 

   account   [Individual](/../types/Individual) !  Non-null 

 The account that owns this personal token 

   createdAt   [DateTime](/../types/DateTime)  

 The date on which the personal token was created 

   updatedAt   [DateTime](/../types/DateTime)  

 The date on which the personal token was last updated 

   preAuthorize2FA   [Boolean](/../types/Boolean) !  Non-null 

 Whether this token is allowed to directly use operations that would normally require 2FA 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [PersonalTokenCollection](/../types/PersonalTokenCollection)

 * Field *personalToken* from [Query](/../types/Query)

 * Field *createPersonalToken* from [Mutation](/../types/Mutation)

   Show more (5)   

---

 **Previous**   [Permission](/types/Permission) **Next**  [PersonalTokenCollection](/types/PersonalTokenCollection)

---


# PersonalTokenCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/PersonalTokenCollection

# PersonalTokenCollection  Object

  A collection of "PersonalToken" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [PersonalToken](/../types/PersonalToken) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *personalTokens* from [Individual](/../types/Individual)

 

---

 **Previous**   [PersonalToken](/types/PersonalToken) **Next**  [PersonalTokenCreateInput](/types/PersonalTokenCreateInput)

---


# PersonalTokenCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PersonalTokenCreateInput

# PersonalTokenCreateInput  Input Object

  Input type for PersonalToken 

 ## Fields

 ## [#](#fields)

     account   [AccountReferenceInput](/../types/AccountReferenceInput)  

 The account to use as the owner of the application. Defaults to currently logged in user. 

 

    expiresAt   [String](/../types/String)  

    name   [String](/../types/String)  

    preAuthorize2FA   [Boolean](/../types/Boolean)  

 Whether this token is allowed to directly use operations that would normally require 2FA 

 

    scope  [ [OAuthScope](/../types/OAuthScope) ] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *personalToken* of field *createPersonalToken*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [PersonalTokenCollection](/types/PersonalTokenCollection) **Next**  [PersonalTokenReferenceInput](/types/PersonalTokenReferenceInput)

---


# PersonalTokenReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PersonalTokenReferenceInput

# PersonalTokenReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the personal-token (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The legacy public id identifying the personal-token (ie: 4242) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *personalToken* of field *deletePersonalToken*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [PersonalTokenCreateInput](/types/PersonalTokenCreateInput) **Next**  [PersonalTokenUpdateInput](/types/PersonalTokenUpdateInput)

---


# PersonalTokenUpdateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PersonalTokenUpdateInput

# PersonalTokenUpdateInput  Input Object

  Input type for PersonalToken 

 ## Fields

 ## [#](#fields)

     expiresAt   [String](/../types/String)  

    id   [String](/../types/String)  

 The public id identifying the personal-token (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The legacy public id identifying the personal-token (ie: 4242) 

 

    name   [String](/../types/String)  

    preAuthorize2FA   [Boolean](/../types/Boolean)  

 Whether this token is allowed to directly use operations that would normally require 2FA 

 

    scope  [ [OAuthScope](/../types/OAuthScope) ] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *personalToken* of field *updatePersonalToken*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [PersonalTokenReferenceInput](/types/PersonalTokenReferenceInput) **Next**  [PlaidAccount](/types/PlaidAccount)

---


# PlaidAccountObject

Source: https://graphql-docs-v2.opencollective.com/types/PlaidAccount

# PlaidAccount  Object

  ## Fields

 ## [#](#fields)

     accountId   [String](/../types/String) !  Non-null 

   mask   [String](/../types/String) !  Non-null 

   name   [String](/../types/String) !  Non-null 

   officialName   [String](/../types/String) !  Non-null 

   subtype   [String](/../types/String) !  Non-null 

   type   [PlaidAccountType](/../types/PlaidAccountType) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *plaidAccounts* from [TransactionsImport](/../types/TransactionsImport)

 

---

 **Previous**   [PersonalTokenUpdateInput](/types/PersonalTokenUpdateInput) **Next**  [PlaidAccountType](/types/PlaidAccountType)

---


# PlaidAccountTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/PlaidAccountType

# PlaidAccountType  Enum

  ## Possible Values

 ## [#](#possible-values)

     investment 

 Investment 

 

    credit 

 Credit 

 

    depository 

 Depository 

 

    loan 

 Loan 

 

    brokerage 

 Brokerage 

 

    other 

 Other 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *type* from [PlaidAccount](/../types/PlaidAccount)

 

---

 **Previous**   [PlaidAccount](/types/PlaidAccount) **Next**  [PlaidConnectAccountResponse](/types/PlaidConnectAccountResponse)

---


# PlaidConnectAccountResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/PlaidConnectAccountResponse

# PlaidConnectAccountResponse  Object

  ## Fields

 ## [#](#fields)

     connectedAccount   [ConnectedAccount](/../types/ConnectedAccount) !  Non-null 

 The connected account that was created 

   transactionsImport   [TransactionsImport](/../types/TransactionsImport) !  Non-null 

 The transactions import that was created 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *connectPlaidAccount* from [Mutation](/../types/Mutation)

 * Field *refreshPlaidAccount* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [PlaidAccountType](/types/PlaidAccountType) **Next**  [PlaidLinkTokenCreateResponse](/types/PlaidLinkTokenCreateResponse)

---


# PlaidLinkTokenCreateResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/PlaidLinkTokenCreateResponse

# PlaidLinkTokenCreateResponse  Object

  ## Fields

 ## [#](#fields)

     linkToken   [String](/../types/String) !  Non-null 

 The link token that will be used to initialize the Plaid Link flow. 

   expiration   [String](/../types/String) !  Non-null 

 The expiration date for the link token in ISO 8601 format. 

   requestId   [String](/../types/String) !  Non-null 

 A unique identifier for the request, which can be used for troubleshooting. 

   hostedLinkUrl   [String](/../types/String)  

 A URL of a Plaid-hosted Link flow that will use the Link token returned by this request. Only present if the client is enabled for Host 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *generatePlaidLinkToken* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [PlaidConnectAccountResponse](/types/PlaidConnectAccountResponse) **Next**  [Policies](/types/Policies)

---


# PoliciesObject

Source: https://graphql-docs-v2.opencollective.com/types/Policies

# Policies  Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

   EXPENSE\_POLICIES   [EXPENSE\_POLICIES](/../types/EXPENSE_POLICIES)  

   EXPENSE\_AUTHOR\_CANNOT\_APPROVE   [EXPENSE\_AUTHOR\_CANNOT\_APPROVE](/../types/EXPENSE_AUTHOR_CANNOT_APPROVE)  

   REQUIRE\_2FA\_FOR\_ADMINS   [Boolean](/../types/Boolean)  

   COLLECTIVE\_ADMINS\_CAN\_REFUND   [Boolean](/../types/Boolean)  

   COLLECTIVE\_MINIMUM\_ADMINS   [COLLECTIVE\_MINIMUM\_ADMINS](/../types/COLLECTIVE_MINIMUM_ADMINS)  

   MAXIMUM\_VIRTUAL\_CARD\_LIMIT\_AMOUNT\_FOR\_INTERVAL   [MAXIMUM\_VIRTUAL\_CARD\_LIMIT\_AMOUNT\_FOR\_INTERVAL](/../types/MAXIMUM_VIRTUAL_CARD_LIMIT_AMOUNT_FOR_INTERVAL)  

   EXPENSE\_CATEGORIZATION   [EXPENSE\_CATEGORIZATION](/../types/EXPENSE_CATEGORIZATION)  

   EXPENSE\_PUBLIC\_VENDORS   [Boolean](/../types/Boolean)  

   COLLECTIVE\_ADMINS\_CAN\_SEE\_PAYOUT\_METHODS   [Boolean](/../types/Boolean)  

   CONTRIBUTOR\_INFO\_THRESHOLDS   [CONTRIBUTOR\_INFO\_THRESHOLDS](/../types/CONTRIBUTOR_INFO_THRESHOLDS)  

 Contribution threshold to enforce contributor info. This resolver can be called from the collective or the host, when resolved through the collective the thresholds are returned in the collective currency 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *policies* from [Host](/../types/Host)

 * Field *policies* from [Bot](/../types/Bot)

 * Field *policies* from [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [PlaidLinkTokenCreateResponse](/types/PlaidLinkTokenCreateResponse) **Next**  [PoliciesCollectiveExpenseAuthorCannotApprove](/types/PoliciesCollectiveExpenseAuthorCannotApprove)

---


# PoliciesCollectiveExpenseAuthorCannotApproveInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PoliciesCollectiveExpenseAuthorCannotApprove

# PoliciesCollectiveExpenseAuthorCannotApprove  Input Object

  ## Fields

 ## [#](#fields)

     amountInCents   [Int](/../types/Int)  

    appliesToHostedCollectives   [Boolean](/../types/Boolean)  

    appliesToSingleAdminCollectives   [Boolean](/../types/Boolean)  

    enabled   [Boolean](/../types/Boolean)  

   

---

 **Previous**   [Policies](/types/Policies) **Next**  [PoliciesCollectiveMinimumAdminsInput](/types/PoliciesCollectiveMinimumAdminsInput)

---


# PoliciesCollectiveMinimumAdminsInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PoliciesCollectiveMinimumAdminsInput

# PoliciesCollectiveMinimumAdminsInput  Input Object

  ## Fields

 ## [#](#fields)

     applies   [PolicyApplication](/../types/PolicyApplication)  

    freeze   [Boolean](/../types/Boolean)  

    numberOfAdmins   [Int](/../types/Int)  

   

---

 **Previous**   [PoliciesCollectiveExpenseAuthorCannotApprove](/types/PoliciesCollectiveExpenseAuthorCannotApprove) **Next**  [PoliciesContributorInfoThresholdsInput](/types/PoliciesContributorInfoThresholdsInput)

---


# PoliciesContributorInfoThresholdsInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PoliciesContributorInfoThresholdsInput

# PoliciesContributorInfoThresholdsInput  Input Object

  ## Fields

 ## [#](#fields)

     address   [Int](/../types/Int)  

    legalName   [Int](/../types/Int)  

   

---

 **Previous**   [PoliciesCollectiveMinimumAdminsInput](/types/PoliciesCollectiveMinimumAdminsInput) **Next**  [PoliciesExpenseCategorizationInput](/types/PoliciesExpenseCategorizationInput)

---


# PoliciesExpenseCategorizationInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PoliciesExpenseCategorizationInput

# PoliciesExpenseCategorizationInput  Input Object

  ## Fields

 ## [#](#fields)

     requiredForCollectiveAdmins   [Boolean](/../types/Boolean)  

    requiredForExpenseSubmitters   [Boolean](/../types/Boolean)  

   

---

 **Previous**   [PoliciesContributorInfoThresholdsInput](/types/PoliciesContributorInfoThresholdsInput) **Next**  [PoliciesExpensePolicies](/types/PoliciesExpensePolicies)

---


# PoliciesExpensePoliciesInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PoliciesExpensePolicies

# PoliciesExpensePolicies  Input Object

  ## Fields

 ## [#](#fields)

     invoicePolicy   [String](/../types/String)  

    receiptPolicy   [String](/../types/String)  

    titlePolicy   [String](/../types/String)  

   

---

 **Previous**   [PoliciesExpenseCategorizationInput](/types/PoliciesExpenseCategorizationInput) **Next**  [PoliciesInput](/types/PoliciesInput)

---


# PoliciesInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/PoliciesInput

# PoliciesInput  Input Object

  ## Fields

 ## [#](#fields)

     COLLECTIVE\_ADMINS\_CAN\_REFUND   [Boolean](/../types/Boolean)  

    COLLECTIVE\_ADMINS\_CAN\_SEE\_PAYOUT\_METHODS   [Boolean](/../types/Boolean)  

    COLLECTIVE\_MINIMUM\_ADMINS   [PoliciesCollectiveMinimumAdminsInput](/../types/PoliciesCollectiveMinimumAdminsInput)  

    CONTRIBUTOR\_INFO\_THRESHOLDS   [PoliciesContributorInfoThresholdsInput](/../types/PoliciesContributorInfoThresholdsInput)  

    EXPENSE\_AUTHOR\_CANNOT\_APPROVE   [PoliciesCollectiveExpenseAuthorCannotApprove](/../types/PoliciesCollectiveExpenseAuthorCannotApprove)  

    EXPENSE\_CATEGORIZATION   [PoliciesExpenseCategorizationInput](/../types/PoliciesExpenseCategorizationInput)  

    EXPENSE\_POLICIES   [PoliciesExpensePolicies](/../types/PoliciesExpensePolicies)  

    EXPENSE\_PUBLIC\_VENDORS   [Boolean](/../types/Boolean)  

    REQUIRE\_2FA\_FOR\_ADMINS   [Boolean](/../types/Boolean)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *policies* of field *setPolicies*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [PoliciesExpensePolicies](/types/PoliciesExpensePolicies) **Next**  [PolicyApplication](/types/PolicyApplication)

---


# PolicyApplicationEnum

Source: https://graphql-docs-v2.opencollective.com/types/PolicyApplication

# PolicyApplication  Enum

  Defines how the policy is applied 

 ## Possible Values

 ## [#](#possible-values)

     ALL\_COLLECTIVES 

    NEW\_COLLECTIVES 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *applies* from [COLLECTIVE\_MINIMUM\_ADMINS](/../types/COLLECTIVE_MINIMUM_ADMINS)

 

---

 **Previous**   [PoliciesInput](/types/PoliciesInput) **Next**  [ProcessExpensePaymentParams](/types/ProcessExpensePaymentParams)

---


# ProcessExpensePaymentParamsInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ProcessExpensePaymentParams

# ProcessExpensePaymentParams  Input Object

  Parameters for paying an expense 

 ## Fields

 ## [#](#fields)

     clearedAt   [DateTime](/../types/DateTime)  

 Date funds were cleared on the fiscal host bank, Wise, PayPal, Stripe or any other external account holding these funds. 

 

    feesPayer   [FeesPayer](/../types/FeesPayer)  

 Who is responsible for paying any due fees. 

 

 Default: "COLLECTIVE"    forceManual   [Boolean](/../types/Boolean)  

 Bypass automatic integrations (ie. PayPal, Transferwise) to process the expense manually 

 

    markAsUnPaidStatus   [MarkAsUnPaidExpenseStatus](/../types/MarkAsUnPaidExpenseStatus)  

 New expense status when triggering MARK\_AS\_UNPAID 

 

 Default: "APPROVED"    paymentMethodService   [PaymentMethodService](/../types/PaymentMethodService)  

 Payment method using for paying the expense 

 

    paymentProcessorFeeInHostCurrency   [Int](/../types/Int)  

 The fee charged by payment processor in host currency 

 

    shouldRefundPaymentProcessorFee   [Boolean](/../types/Boolean)  

 Whether the payment processor fees should be refunded when triggering MARK\_AS\_UNPAID 

 

    totalAmountPaidInHostCurrency   [Int](/../types/Int)  

 The total amount paid in host currency 

 

    transfer   [ProcessExpenseTransferParams](/../types/ProcessExpenseTransferParams)  

 Transfer details for fulfilling the expense 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *paymentParams* of field *processExpense*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [PolicyApplication](/types/PolicyApplication) **Next**  [ProcessExpenseTransferParams](/types/ProcessExpenseTransferParams)

---


# ProcessExpenseTransferParamsInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ProcessExpenseTransferParams

# ProcessExpenseTransferParams  Input Object

  ## Fields

 ## [#](#fields)

     details   [WiseTransferDetails](/../types/WiseTransferDetails)  

 Wise transfer details 

 

   

---

 **Previous**   [ProcessExpensePaymentParams](/types/ProcessExpensePaymentParams) **Next**  [ProcessHostApplicationAction](/types/ProcessHostApplicationAction)

---


# ProcessHostApplicationActionEnum

Source: https://graphql-docs-v2.opencollective.com/types/ProcessHostApplicationAction

# ProcessHostApplicationAction  Enum

  Action taken for an account application to the host 

 ## Possible Values

 ## [#](#possible-values)

     APPROVE 

 Approve the account request to be hosted 

 

    REJECT 

 Rejects the account request to be hosted 

 

    SEND\_PRIVATE\_MESSAGE 

 Sends a private message to the admins of the account 

 

    SEND\_PUBLIC\_MESSAGE 

 Creates a public conversation 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *action* of field *processHostApplication*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ProcessExpenseTransferParams](/types/ProcessExpenseTransferParams) **Next**  [ProcessHostApplicationResponse](/types/ProcessHostApplicationResponse)

---


# ProcessHostApplicationResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/ProcessHostApplicationResponse

# ProcessHostApplicationResponse  Object

  ## Fields

 ## [#](#fields)

     account   [Account](/../types/Account) !  Non-null 

 The account that applied to the host 

   conversation   [Conversation](/../types/Conversation)  

 When sending a public message, this field will have the info about the conversation created 

   hostApplication   [HostApplication](/../types/HostApplication)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *processHostApplication* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [ProcessHostApplicationAction](/types/ProcessHostApplicationAction) **Next**  [ProcessOrderAction](/types/ProcessOrderAction)

---


# ProcessOrderActionEnum

Source: https://graphql-docs-v2.opencollective.com/types/ProcessOrderAction

# ProcessOrderAction  Enum

  Action to apply on the order 

 ## Possible Values

 ## [#](#possible-values)

     MARK\_AS\_EXPIRED 

 To mark the order as expired 

 

    MARK\_AS\_PAID 

 To mark the order as paid 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *action* of field *processPendingOrder*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [ProcessHostApplicationResponse](/types/ProcessHostApplicationResponse) **Next**  [Project](/types/Project)

---


# ProjectObject

Source: https://graphql-docs-v2.opencollective.com/types/Project

# Project  Object

  This represents an Project account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id identifying the account (ie: 5v08jk63-w4g9nbpz-j7qmyder-p7ozax5g) 

   legacyId   [Int](/../types/Int) !  Non-null 

 The internal database identifier of the collective (ie: 580) 

   slug   [String](/../types/String) !  Non-null 

 The slug identifying the account (ie: babel) 

   type   [AccountType](/../types/AccountType) !  Non-null 

 The type of the account (BOT/COLLECTIVE/EVENT/ORGANIZATION/INDIVIDUAL/VENDOR) 

   name   [String](/../types/String)  

 Public name 

   legalName   [String](/../types/String)  

 Private, legal name. Used for expense receipts, taxes, etc. Scope: "account". 

   description   [String](/../types/String)  

   longDescription   [String](/../types/String)  

   tags  [ [String](/../types/String) ] 

   website   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   twitterHandle   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   githubHandle   [String](/../types/String)    Deprecated 2022-06-03: Please use repositoryUrl 

   repositoryUrl   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   socialLinks  [ [SocialLink](/../types/SocialLink) !]!  Non-null 

   currency   [Currency](/../types/Currency) !  Non-null 

 The currency of the account 

   expensePolicy   [String](/../types/String)    Deprecated 2024-11-04: Please use policies.EXPENSE\_POLICIES 

   isIncognito   [Boolean](/../types/Boolean) !  Non-null 

 Defines if the contributors wants to be incognito (name not displayed) 

   imageUrl   [String](/../types/String)  

   Show arguments (2)    backgroundImageUrl   [String](/../types/String)  

   Show arguments (2)    createdAt   [DateTime](/../types/DateTime)  

 The time of creation 

   updatedAt   [DateTime](/../types/DateTime)  

 The time of last update 

   unhostedAt   [DateTime](/../types/DateTime)  

 Date of unhosting by a given Fiscal Host. 

   Show arguments (1)    isArchived   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether this account is archived 

   isFrozen   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account is frozen 

   isActive   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether it's active: can accept financial contributions and pay expenses. 

   isHost   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether the account is setup to Host collectives. 

   isAdmin   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user is an admin of this account 

   parentAccount   [Account](/../types/Account)    Deprecated 2022-12-16: use parent on AccountWithParent instead 

   members   [MemberCollection](/../types/MemberCollection) !  Non-null 

 Get all members (admins, members, backers, followers) 

   Show arguments (7)    memberInvitations  [ [MemberInvitation](/../types/MemberInvitation) ] 

 [AUTHENTICATED] Returns the pending invitations 

   Show arguments (3)    legalDocuments  [ [LegalDocument](/../types/LegalDocument) ] 

 The legal documents associated with this account 

   Show arguments (1)    memberOf   [MemberOfCollection](/../types/MemberOfCollection) !  Non-null 

   Show arguments (13)    emails  [ [EmailAddress](/../types/EmailAddress) !] 

 Returns the emails of the account. Individuals only have one, but organizations can have multiple emails. 

   transactions   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   Show arguments (34)    orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

   Show arguments (28)    expenses   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   Show arguments (26)    settings   [JSON](/../types/JSON) !  Non-null 

   conversations   [ConversationCollection](/../types/ConversationCollection) !  Non-null 

   Show arguments (3)    conversationsTags  [ [TagStat](/../types/TagStat) ] 

 Returns conversation's tags for collective sorted by popularity 

   Show arguments (1)    expensesTags  [ [TagStat](/../types/TagStat) ] 

 Returns expense tags for collective sorted by popularity 

   Show arguments (1)    supportedExpenseTypes  [ [ExpenseType](/../types/ExpenseType) !]!  Non-null 

 The list of expense types supported by this account 

   transferwise   [TransferWise](/../types/TransferWise)  

   payoutMethods  [ [PayoutMethod](/../types/PayoutMethod) ] 

 The list of payout methods that this collective can use to get paid. In most cases, admin only and scope: "expenses". 

   Show arguments (1)    paymentMethods  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods that this collective can use to pay for Orders. Admin or Host only. Scope: "orders". 

   Show arguments (3)    paymentMethodsWithPendingConfirmation  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods for this account that are pending a client confirmation (3D Secure / SCA) 

   connectedAccounts  [ [ConnectedAccount](/../types/ConnectedAccount) ] 

 The list of connected accounts (Stripe, PayPal, etc ...). Admin only. Scope: "connectedAccounts". 

   oAuthApplications   [OAuthApplicationCollection](/../types/OAuthApplicationCollection)  

 The list of applications created by this account. Admin only. Scope: "applications". 

   Show arguments (2)    location   [Location](/../types/Location)  

 The address associated to this account. This field is always public for collectives and events. 

   categories  [ [String](/../types/String) ]!  Non-null 

 Categories set by Open Collective to help moderation. 

   stats   [AccountStats](/../types/AccountStats)  

   canHaveChangelogUpdates   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account can have changelog updates 

   updates   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

 Updates published by the account. To see unpublished updates, you need to be an admin and have the scope "updates". 

   Show arguments (7)    features   [CollectiveFeatures](/../types/CollectiveFeatures) !  Non-null 

 Describes the features enabled and available for this account 

   virtualCards   [VirtualCardCollection](/../types/VirtualCardCollection)  

 Virtual Cards attached to the account. Admin only. Scope: "virtualCards". 

   Show arguments (7)    virtualCardMerchants   [AccountCollection](/../types/AccountCollection)  

 Virtual Cards Merchants used by the account. Admin only. Scope: "virtualCards". 

   Show arguments (2)    childrenAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (6)    policies   [Policies](/../types/Policies) !  Non-null 

 Policies for the account. To see non-public policies you need to be admin and have the scope: "account". 

   activitySubscriptions  [ [ActivitySubscription](/../types/ActivitySubscription) ] 

 List of activities that the logged-in user is subscribed for this collective 

   Show arguments (1)    permissions   [AccountPermissions](/../types/AccountPermissions) !  Non-null 

 Logged-in user permissions on an account 

   hostApplicationRequests   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

 Host application requests 

   Show arguments (4)    feed  [ [Activity](/../types/Activity) ] 

   Show arguments (3)    duplicatedFromAccount   [Account](/../types/Account)  

 If created by duplication, the account from which this one was duplicated 

   duplicatedAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

 If this account was duplicated, the accounts that were created from it 

   Show arguments (2)    transactionGroups   [TransactionGroupCollection](/../types/TransactionGroupCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (6)    transactionReports   [TransactionReports](/../types/TransactionReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)    webhooks   [WebhookCollection](/../types/WebhookCollection) !  Non-null 

   Show arguments (3)    host   [Host](/../types/Host)  

 Returns the Fiscal Host 

   hostFeesStructure   [HostFeeStructure](/../types/HostFeeStructure)  

 Describe how the host charges the collective 

   hostFeePercent   [Float](/../types/Float)  

 Fees percentage that the host takes for this collective 

   Show arguments (2)    hostApplication   [HostApplication](/../types/HostApplication)  

 Returns the Fiscal Host application 

   platformFeePercent   [Float](/../types/Float) !  Non-null 

 How much platform fees are charged for this account 

   approvedAt   [DateTime](/../types/DateTime)  

 Date of approval by the Fiscal Host. 

   unfrozenAt   [DateTime](/../types/DateTime)  

 Date when the collective was last unfrozen by current Fiscal Host 

   isApproved   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether it's approved by the Fiscal Host 

   hostAgreements   [AgreementCollection](/../types/AgreementCollection)  

 Returns agreements this account has with its host, or null if not enough permissions. 

   Show arguments (2)    summary   [HostedAccountSummary](/../types/HostedAccountSummary)  

   Show arguments (2)    totalFinancialContributors   [Int](/../types/Int) !  Non-null 

 Number of unique financial contributors. 

   Show arguments (1)    tiers   [TierCollection](/../types/TierCollection) !  Non-null 

   Show arguments (2)    contributors   [ContributorCollection](/../types/ContributorCollection) !  Non-null 

 All the persons and entities that contribute to this account 

   Show arguments (3)    activeContributors   [AccountCollection](/../types/AccountCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (5)    platformContributionAvailable   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if a custom contribution to Open Collective can be submitted for contributions made to this account 

   contributionPolicy   [String](/../types/String)  

   canStartResumeContributionsProcess   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user can start the process to resume contributions for account 

   hasResumeContributionsProcessStarted   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the account has started the process to resume contributions 

   parent   [Account](/../types/Account)  

 The Account parenting this account 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Account](/../types/Account) , [AccountWithHost](/../types/AccountWithHost) , [AccountWithContributions](/../types/AccountWithContributions) , [AccountWithParent](/../types/AccountWithParent) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *project* from [Query](/../types/Query)

 * Field *createProject* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [ProcessOrderAction](/types/ProcessOrderAction) **Next**  [ProjectCreateInput](/types/ProjectCreateInput)

---


# ProjectCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/ProjectCreateInput

# ProjectCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     backgroundImage   [Upload](/../types/Upload)  

 The profile background image, for the banner and social media sharing 

 

    description   [String](/../types/String) !  Non-null

    image   [Upload](/../types/Upload)  

 The profile avatar image 

 

    name   [String](/../types/String) !  Non-null

    settings   [JSON](/../types/JSON)  

    slug   [String](/../types/String) !  Non-null

    socialLinks  [ [SocialLinkInput](/../types/SocialLinkInput) !] 

 The social links in order of preference 

 

    tags  [ [String](/../types/String) ] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *project* of field *createProject*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Project](/types/Project) **Next**  [Query](/types/Query)

---


# QueryObject

Source: https://graphql-docs-v2.opencollective.com/types/Query

# Query  Object

  This is the root query 

 ## Fields

 ## [#](#fields)

     account   [Account](/../types/Account)  

   Show arguments (4)    accounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (18)    activities   [ActivityCollection](/../types/ActivityCollection) !  Non-null 

   Show arguments (10)    application   [Application](/../types/Application)  

   Show arguments (3)    collective   [Collective](/../types/Collective)  

   Show arguments (4)    conversation   [Conversation](/../types/Conversation)  

   Show arguments (1)    currencyExchangeRate  [ [CurrencyExchangeRate](/../types/CurrencyExchangeRate) !]!  Non-null 

 Get exchange rates from Open Collective 

   Show arguments (1)    event   [Event](/../types/Event)  

   Show arguments (4)    expense   [Expense](/../types/Expense)  

   Show arguments (2)    expenses   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   Show arguments (25)    expenseTagStats   [TagStatsCollection](/../types/TagStatsCollection) !  Non-null 

   Show arguments (5)    fund   [Fund](/../types/Fund)  

   Show arguments (4)    host   [Host](/../types/Host)  

   Show arguments (4)    hosts   [HostCollection](/../types/HostCollection)  

   Show arguments (11)    individual   [Individual](/../types/Individual)  

   Show arguments (4)    memberInvitations  [ [MemberInvitation](/../types/MemberInvitation) ] 

 [AUTHENTICATED] Returns the pending invitations 

   Show arguments (3)    order   [Order](/../types/Order)  

   Show arguments (1)    orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

   Show arguments (29)    organization   [Organization](/../types/Organization)  

   Show arguments (4)    project   [Project](/../types/Project)  

   Show arguments (4)    search   [SearchResponse](/../types/SearchResponse) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (5)    tagStats   [TagStatsCollection](/../types/TagStatsCollection) !  Non-null 

   Show arguments (5)    tier   [Tier](/../types/Tier)  

   Show arguments (2)    transaction   [Transaction](/../types/Transaction)  

 Fetch a single transaction 

   Show arguments (1)    transactions   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   Show arguments (35)    transactionGroup   [TransactionGroup](/../types/TransactionGroup)  

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (2)    transactionGroups   [TransactionGroupCollection](/../types/TransactionGroupCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (7)    transactionsImport   [TransactionsImport](/../types/TransactionsImport)  

 Fetch a transactions import 

   Show arguments (1)    update   [Update](/../types/Update)  

   Show arguments (3)    updates   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

 This query currently returns only published updates 

   Show arguments (7)    paypalPlan   [PaypalPlan](/../types/PaypalPlan) !  Non-null 

   Show arguments (5)    personalToken   [PersonalToken](/../types/PersonalToken)  

 Get a personal token by reference 

   Show arguments (2)    virtualCard   [VirtualCard](/../types/VirtualCard)  

   Show arguments (2)    virtualCardRequest   [VirtualCardRequest](/../types/VirtualCardRequest)  

   Show arguments (2)    virtualCardRequests   [VirtualCardRequestCollection](/../types/VirtualCardRequestCollection) !  Non-null 

   Show arguments (5)    hostApplication   [HostApplication](/../types/HostApplication)  

   Show arguments (1)    loggedInAccount   [Individual](/../types/Individual)  

   me   [Individual](/../types/Individual)  

   

---

 **Previous**   [ProjectCreateInput](/types/ProjectCreateInput) **Next**  [RecurringExpense](/types/RecurringExpense)

---


# RecurringExpenseObject

Source: https://graphql-docs-v2.opencollective.com/types/RecurringExpense

# RecurringExpense  Object

  A recurring expense object 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for this recurring expense 

   interval   [RecurringExpenseInterval](/../types/RecurringExpenseInterval) !  Non-null 

 The interval in which this recurring expense is created 

   account   [Account](/../types/Account) !  Non-null 

   fromAccount   [Account](/../types/Account) !  Non-null 

   lastDraftedAt   [DateTime](/../types/DateTime) !  Non-null 

 The last time this recurring expense was paid for 

   endsAt   [DateTime](/../types/DateTime)  

 The time this expense will cease to be recurring 

   lastExpenseCreated   [Expense](/../types/Expense)  

 The last expense created by this recurring expense record paid for 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *recurringExpense* from [Expense](/../types/Expense)

 

---

 **Previous**   [Query](/types/Query) **Next**  [RecurringExpenseInput](/types/RecurringExpenseInput)

---


# RecurringExpenseInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/RecurringExpenseInput

# RecurringExpenseInput  Input Object

  ## Fields

 ## [#](#fields)

     endsAt   [DateTime](/../types/DateTime)  

 The date when this recurring expense should cease 

 

    interval   [RecurringExpenseInterval](/../types/RecurringExpenseInterval) !  Non-null

 The interval in which this recurring expense is created 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *recurring* of field *createExpense*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [RecurringExpense](/types/RecurringExpense) **Next**  [RecurringExpenseInterval](/types/RecurringExpenseInterval)

---


# RecurringExpenseIntervalEnum

Source: https://graphql-docs-v2.opencollective.com/types/RecurringExpenseInterval

# RecurringExpenseInterval  Enum

  All supported intervals for recurring expenses 

 ## Possible Values

 ## [#](#possible-values)

     day 

    week 

    month 

    quarter 

    year 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *interval* from [RecurringExpense](/../types/RecurringExpense)

 

---

 **Previous**   [RecurringExpenseInput](/types/RecurringExpenseInput) **Next**  [SearchResponse](/types/SearchResponse)

---


# SearchResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/SearchResponse

# SearchResponse  Object

  ## Fields

 ## [#](#fields)

     results   [SearchResults](/../types/SearchResults) !  Non-null 

 Search results 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *search* from [Query](/../types/Query)

 

---

 **Previous**   [RecurringExpenseInterval](/types/RecurringExpenseInterval) **Next**  [SearchResults](/types/SearchResults)

---


# SearchResultsObject

Source: https://graphql-docs-v2.opencollective.com/types/SearchResults

# SearchResults  Object

  Search results for all types 

 ## Fields

 ## [#](#fields)

     accounts   [SearchResultsAccounts](/../types/SearchResultsAccounts)  

 Search results for Accounts 

   Show arguments (3)    comments   [SearchResultsComments](/../types/SearchResultsComments)  

 Search results for Comments 

   expenses   [SearchResultsExpenses](/../types/SearchResultsExpenses)  

 Search results for Expenses 

   hostApplications   [SearchResultsHostApplications](/../types/SearchResultsHostApplications)  

 Search results for HostApplications 

   orders   [SearchResultsOrders](/../types/SearchResultsOrders)  

 Search results for Orders 

   tiers   [SearchResultsTiers](/../types/SearchResultsTiers)  

 Search results for Tiers 

   transactions   [SearchResultsTransactions](/../types/SearchResultsTransactions)  

 Search results for Transactions 

   updates   [SearchResultsUpdates](/../types/SearchResultsUpdates)  

 Search results for Updates 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *results* from [SearchResponse](/../types/SearchResponse)

 

---

 **Previous**   [SearchResponse](/types/SearchResponse) **Next**  [SearchResultsAccounts](/types/SearchResultsAccounts)

---


# SearchResultsAccountsObject

Source: https://graphql-docs-v2.opencollective.com/types/SearchResultsAccounts

# SearchResultsAccounts  Object

  ## Fields

 ## [#](#fields)

     collection   [AccountCollection](/../types/AccountCollection) !  Non-null 

   maxScore   [Float](/../types/Float) !  Non-null 

   highlights   [JSONObject](/../types/JSONObject)  

 Details about the matches typed as: { [id]: { score: number, fields: { [field]: [highlight] } } } 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *accounts* from [SearchResults](/../types/SearchResults)

 

---

 **Previous**   [SearchResults](/types/SearchResults) **Next**  [SearchResultsComments](/types/SearchResultsComments)

---


# SearchResultsCommentsObject

Source: https://graphql-docs-v2.opencollective.com/types/SearchResultsComments

# SearchResultsComments  Object

  ## Fields

 ## [#](#fields)

     collection   [CommentCollection](/../types/CommentCollection) !  Non-null 

   maxScore   [Float](/../types/Float) !  Non-null 

   highlights   [JSONObject](/../types/JSONObject)  

 Details about the matches typed as: { [id]: { score: number, fields: { [field]: [highlight] } } } 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *comments* from [SearchResults](/../types/SearchResults)

 

---

 **Previous**   [SearchResultsAccounts](/types/SearchResultsAccounts) **Next**  [SearchResultsExpenses](/types/SearchResultsExpenses)

---


# SearchResultsExpensesObject

Source: https://graphql-docs-v2.opencollective.com/types/SearchResultsExpenses

# SearchResultsExpenses  Object

  ## Fields

 ## [#](#fields)

     collection   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   maxScore   [Float](/../types/Float) !  Non-null 

   highlights   [JSONObject](/../types/JSONObject)  

 Details about the matches typed as: { [id]: { score: number, fields: { [field]: [highlight] } } } 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *expenses* from [SearchResults](/../types/SearchResults)

 

---

 **Previous**   [SearchResultsComments](/types/SearchResultsComments) **Next**  [SearchResultsHostApplications](/types/SearchResultsHostApplications)

---


# SearchResultsHostApplicationsObject

Source: https://graphql-docs-v2.opencollective.com/types/SearchResultsHostApplications

# SearchResultsHostApplications  Object

  ## Fields

 ## [#](#fields)

     collection   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

   maxScore   [Float](/../types/Float) !  Non-null 

   highlights   [JSONObject](/../types/JSONObject)  

 Details about the matches typed as: { [id]: { score: number, fields: { [field]: [highlight] } } } 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hostApplications* from [SearchResults](/../types/SearchResults)

 

---

 **Previous**   [SearchResultsExpenses](/types/SearchResultsExpenses) **Next**  [SearchResultsOrders](/types/SearchResultsOrders)

---


# SearchResultsOrdersObject

Source: https://graphql-docs-v2.opencollective.com/types/SearchResultsOrders

# SearchResultsOrders  Object

  ## Fields

 ## [#](#fields)

     collection   [OrderCollection](/../types/OrderCollection) !  Non-null 

   maxScore   [Float](/../types/Float) !  Non-null 

   highlights   [JSONObject](/../types/JSONObject)  

 Details about the matches typed as: { [id]: { score: number, fields: { [field]: [highlight] } } } 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *orders* from [SearchResults](/../types/SearchResults)

 

---

 **Previous**   [SearchResultsHostApplications](/types/SearchResultsHostApplications) **Next**  [SearchResultsTiers](/types/SearchResultsTiers)

---


# SearchResultsTiersObject

Source: https://graphql-docs-v2.opencollective.com/types/SearchResultsTiers

# SearchResultsTiers  Object

  ## Fields

 ## [#](#fields)

     collection   [TierCollection](/../types/TierCollection) !  Non-null 

   maxScore   [Float](/../types/Float) !  Non-null 

   highlights   [JSONObject](/../types/JSONObject)  

 Details about the matches typed as: { [id]: { score: number, fields: { [field]: [highlight] } } } 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *tiers* from [SearchResults](/../types/SearchResults)

 

---

 **Previous**   [SearchResultsOrders](/types/SearchResultsOrders) **Next**  [SearchResultsTransactions](/types/SearchResultsTransactions)

---


# SearchResultsTransactionsObject

Source: https://graphql-docs-v2.opencollective.com/types/SearchResultsTransactions

# SearchResultsTransactions  Object

  ## Fields

 ## [#](#fields)

     collection   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   maxScore   [Float](/../types/Float) !  Non-null 

   highlights   [JSONObject](/../types/JSONObject)  

 Details about the matches typed as: { [id]: { score: number, fields: { [field]: [highlight] } } } 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *transactions* from [SearchResults](/../types/SearchResults)

 

---

 **Previous**   [SearchResultsTiers](/types/SearchResultsTiers) **Next**  [SearchResultsUpdates](/types/SearchResultsUpdates)

---


# SearchResultsUpdatesObject

Source: https://graphql-docs-v2.opencollective.com/types/SearchResultsUpdates

# SearchResultsUpdates  Object

  ## Fields

 ## [#](#fields)

     collection   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

   maxScore   [Float](/../types/Float) !  Non-null 

   highlights   [JSONObject](/../types/JSONObject)  

 Details about the matches typed as: { [id]: { score: number, fields: { [field]: [highlight] } } } 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *updates* from [SearchResults](/../types/SearchResults)

 

---

 **Previous**   [SearchResultsTransactions](/types/SearchResultsTransactions) **Next**  [SecurityCheck](/types/SecurityCheck)

---


# SecurityCheckObject

Source: https://graphql-docs-v2.opencollective.com/types/SecurityCheck

# SecurityCheck  Object

  ## Fields

 ## [#](#fields)

     scope   [SecurityCheckScope](/../types/SecurityCheckScope) !  Non-null 

 The SecurityCheck scope 

   level   [SecurityCheckLevel](/../types/SecurityCheckLevel) !  Non-null 

 The SecurityCheck level 

   message   [String](/../types/String) !  Non-null 

 SecurityCheck description message 

   details   [String](/../types/String)  

 SecurityCheck details 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *securityChecks* from [Expense](/../types/Expense)

 

---

 **Previous**   [SearchResultsUpdates](/types/SearchResultsUpdates) **Next**  [SecurityCheckLevel](/types/SecurityCheckLevel)

---


# SecurityCheckLevelEnum

Source: https://graphql-docs-v2.opencollective.com/types/SecurityCheckLevel

# SecurityCheckLevel  Enum

  All supported SecurityCheck levels 

 ## Possible Values

 ## [#](#possible-values)

     PASS 

    LOW 

    MEDIUM 

    HIGH 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *level* from [SecurityCheck](/../types/SecurityCheck)

 

---

 **Previous**   [SecurityCheck](/types/SecurityCheck) **Next**  [SecurityCheckScope](/types/SecurityCheckScope)

---


# SecurityCheckScopeEnum

Source: https://graphql-docs-v2.opencollective.com/types/SecurityCheckScope

# SecurityCheckScope  Enum

  All supported SecurityCheck scopes 

 ## Possible Values

 ## [#](#possible-values)

     USER 

    COLLECTIVE 

    PAYEE 

    PAYOUT\_METHOD 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *scope* from [SecurityCheck](/../types/SecurityCheck)

 

---

 **Previous**   [SecurityCheckLevel](/types/SecurityCheckLevel) **Next**  [SendMessageResult](/types/SendMessageResult)

---


# SendMessageResultObject

Source: https://graphql-docs-v2.opencollective.com/types/SendMessageResult

# SendMessageResult  Object

  ## Fields

 ## [#](#fields)

     success   [Boolean](/../types/Boolean)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *sendMessage* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [SecurityCheckScope](/types/SecurityCheckScope) **Next**  [SetPasswordResponse](/types/SetPasswordResponse)

---


# SetPasswordResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/SetPasswordResponse

# SetPasswordResponse  Object

  ## Fields

 ## [#](#fields)

     individual   [Individual](/../types/Individual) !  Non-null 

   token   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *setPassword* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [SendMessageResult](/types/SendMessageResult) **Next**  [SetupIntent](/types/SetupIntent)

---


# SetupIntentObject

Source: https://graphql-docs-v2.opencollective.com/types/SetupIntent

# SetupIntent  Object

  A Stripe setup intent 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   setupIntentClientSecret   [String](/../types/String) !  Non-null 

   stripeAccount   [String](/../types/String) !  Non-null 

   stripeAccountPublishableSecret   [String](/../types/String) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *createSetupIntent* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [SetPasswordResponse](/types/SetPasswordResponse) **Next**  [SetupIntentInput](/types/SetupIntentInput)

---


# SetupIntentInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/SetupIntentInput

# SetupIntentInput  Input Object

  A Stripe setup intent 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null

    stripeAccount   [String](/../types/String) !  Non-null

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *setupIntent* of field *addStripePaymentMethodFromSetupIntent*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [SetupIntent](/types/SetupIntent) **Next**  [SocialLink](/types/SocialLink)

---


# SocialLinkObject

Source: https://graphql-docs-v2.opencollective.com/types/SocialLink

# SocialLink  Object

  A social link 

 ## Fields

 ## [#](#fields)

     type   [SocialLinkType](/../types/SocialLinkType) !  Non-null 

   url   [URL](/../types/URL) !  Non-null 

   createdAt   [DateTime](/../types/DateTime)  

   updatedAt   [DateTime](/../types/DateTime)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *socialLinks* from [Host](/../types/Host)

 * Field *socialLinks* from [Bot](/../types/Bot)

 * Field *socialLinks* from [Collective](/../types/Collective)

   Show more (10)   

---

 **Previous**   [SetupIntentInput](/types/SetupIntentInput) **Next**  [SocialLinkInput](/types/SocialLinkInput)

---


# SocialLinkInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/SocialLinkInput

# SocialLinkInput  Input Object

  ## Fields

 ## [#](#fields)

     type   [SocialLinkType](/../types/SocialLinkType) !  Non-null

    url   [URL](/../types/URL) !  Non-null

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *socialLinks* of field *updateSocialLinks*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [SocialLink](/types/SocialLink) **Next**  [SocialLinkType](/types/SocialLinkType)

---


# SocialLinkTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/SocialLinkType

# SocialLinkType  Enum

  The type of social link 

 ## Possible Values

 ## [#](#possible-values)

     BLUESKY 

    DISCORD 

    DISCOURSE 

    FACEBOOK 

    GHOST 

    GIT 

    GITHUB 

    GITLAB 

    INSTAGRAM 

    LINKEDIN 

    MASTODON 

    MATTERMOST 

    MEETUP 

    PEERTUBE 

    PIXELFED 

    SLACK 

    THREADS 

    TIKTOK 

    TUMBLR 

    TWITCH 

    TWITTER 

    WEBSITE 

    YOUTUBE 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *type* from [SocialLink](/../types/SocialLink)

 

---

 **Previous**   [SocialLinkInput](/types/SocialLinkInput) **Next**  [StrictPercentage](/types/StrictPercentage)

---


# StrictPercentageScalar

Source: https://graphql-docs-v2.opencollective.com/types/StrictPercentage

# StrictPercentage  Scalar

  A positive float value between 0 and 100 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *confidence* from [ExpenseParsedFileInfo](/../types/ExpenseParsedFileInfo)

 

---

 **Previous**   [SocialLinkType](/types/SocialLinkType) **Next**  [String](/types/String)

---


# StringScalar

Source: https://graphql-docs-v2.opencollective.com/types/String

# String  Scalar

  The `String`  scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *id* from [Application](/../types/Application)

 * Field *name* from [Application](/../types/Application)

 * Field *description* from [Application](/../types/Application)

   Show more (600)   

---

 **Previous**   [StrictPercentage](/types/StrictPercentage) **Next**  [StripeConnectedAccount](/types/StripeConnectedAccount)

---


# StripeConnectedAccountObject

Source: https://graphql-docs-v2.opencollective.com/types/StripeConnectedAccount

# StripeConnectedAccount  Object

  Stripe connected account properties 

 ## Fields

 ## [#](#fields)

     username   [String](/../types/String)  

   issuingBalance   [Amount](/../types/Amount)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *stripe* from [Host](/../types/Host)

 

---

 **Previous**   [String](/types/String) **Next**  [StripeError](/types/StripeError)

---


# StripeErrorObject

Source: https://graphql-docs-v2.opencollective.com/types/StripeError

# StripeError  Object

  ## Fields

 ## [#](#fields)

     message   [String](/../types/String)  

   account   [String](/../types/String)  

   response   [JSON](/../types/JSON)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *stripeError* from [OrderWithPayment](/../types/OrderWithPayment)

 * Field *stripeError* from [CreditCardWithStripeError](/../types/CreditCardWithStripeError)

 

---

 **Previous**   [StripeConnectedAccount](/types/StripeConnectedAccount) **Next**  [TagResponse](/types/TagResponse)

---


# TagResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/TagResponse

# TagResponse  Object

  ## Fields

 ## [#](#fields)

     order   [Order](/../types/Order)  

   expense   [Expense](/../types/Expense)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *setTags* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [StripeError](/types/StripeError) **Next**  [TagSearchOperator](/types/TagSearchOperator)

---


# TagSearchOperatorEnum

Source: https://graphql-docs-v2.opencollective.com/types/TagSearchOperator

# TagSearchOperator  Enum

  The operator to use when searching with tags 

 ## Possible Values

 ## [#](#possible-values)

     AND 

    OR 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *tagSearchOperator* of field *accounts*
 from type [Query](/../types/Query)

 * Argument *tagSearchOperator* of field *hosts*
 from type [Query](/../types/Query)

 

---

 **Previous**   [TagResponse](/types/TagResponse) **Next**  [TagStat](/types/TagStat)

---


# TagStatObject

Source: https://graphql-docs-v2.opencollective.com/types/TagStat

# TagStat  Object

  Statistics for a given tag 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 An unique identifier for this tag 

   tag   [String](/../types/String) !  Non-null 

 Name/Label of the tag 

   count   [Int](/../types/Int) !  Non-null 

 Number of entries for this tag 

   amount   [Amount](/../types/Amount)  

 Total amount for this tag 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *conversationsTags* from [Host](/../types/Host)

 * Field *expensesTags* from [Host](/../types/Host)

 * Field *conversationsTags* from [Bot](/../types/Bot)

   Show more (19)   

---

 **Previous**   [TagSearchOperator](/types/TagSearchOperator) **Next**  [TagStatsCollection](/types/TagStatsCollection)

---


# TagStatsCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/TagStatsCollection

# TagStatsCollection  Object

  A collection of "Tags" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [TagStat](/../types/TagStat) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *expenseTagStats* from [Query](/../types/Query)

 * Field *tagStats* from [Query](/../types/Query)

 

---

 **Previous**   [TagStat](/types/TagStat) **Next**  [TaxInfo](/types/TaxInfo)

---


# TaxInfoObject

Source: https://graphql-docs-v2.opencollective.com/types/TaxInfo

# TaxInfo  Object

  Information about a tax 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 An unique identifier for this tax (GST, VAT, etc) 

   type   [TaxType](/../types/TaxType) !  Non-null 

 Identifier for this tax (GST, VAT, etc) 

   percentage   [Int](/../types/Int) !   Deprecated Please use `rate` instead  Non-null 

 Percentage applied, between 0-100 

   rate   [Float](/../types/Float) !  Non-null 

 Percentage applied, between 0-1 

   idNumber   [String](/../types/String)  

 Tax ID number of the 3rd party receiving/paying the tax 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *tax* from [Order](/../types/Order)

 * Field *taxes* from [Expense](/../types/Expense)

 * Field *taxInfo* from [Credit](/../types/Credit)

   Show more (4)   

---

 **Previous**   [TagStatsCollection](/types/TagStatsCollection) **Next**  [TaxInput](/types/TaxInput)

---


# TaxInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/TaxInput

# TaxInput  Input Object

  Input to set taxes for an expense 

 ## Fields

 ## [#](#fields)

     amount   [AmountInput](/../types/AmountInput)  

 An optional tax amount to make sure the tax displayed in your frontend matches the one calculated by the API 

 

    country   [CountryISO](/../types/CountryISO)  

 Country ISO code of the entity paying the tax 

 

    idNumber   [String](/../types/String)  

 Tax identification number, if any 

 

    rate   [Float](/../types/Float) !  Non-null

 Tax rate as a float number between 0 and 1 

 

    type   [TaxType](/../types/TaxType) !  Non-null

 Tax type 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *tax* of field *addFunds*
 from type [Mutation](/../types/Mutation)

 * Argument *tax* of field *editAddedFunds*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TaxInfo](/types/TaxInfo) **Next**  [TaxType](/types/TaxType)

---


# TaxTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/TaxType

# TaxType  Enum

  The type of a tax like GST, VAT, etc 

 ## Possible Values

 ## [#](#possible-values)

     VAT 

 European Value Added Tax 

 

    GST 

 New Zealand Good and Services Tax 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *type* from [TaxInfo](/../types/TaxInfo)

 * Field *type* from [OrderTax](/../types/OrderTax)

 

---

 **Previous**   [TaxInput](/types/TaxInput) **Next**  [Tier](/types/Tier)

---


# TierObject

Source: https://graphql-docs-v2.opencollective.com/types/Tier

# Tier  Object

  Tier model 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   legacyId   [Int](/../types/Int) !  Non-null 

   slug   [String](/../types/String)  

   name   [String](/../types/String)  

   description   [String](/../types/String)  

   longDescription   [String](/../types/String)  

 A long, html-formatted description. 

   videoUrl   [String](/../types/String)  

 Link to a video (YouTube, Vimeo). 

   orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

 Get all orders 

   Show arguments (3)    amount   [Amount](/../types/Amount) !  Non-null 

   currency   [String](/../types/String)  

   button   [String](/../types/String)  

   goal   [Amount](/../types/Amount) !  Non-null 

   type   [TierType](/../types/TierType) !  Non-null 

   interval   [TierInterval](/../types/TierInterval)    Deprecated 2020-08-24: Please use "frequency" 

   frequency   [TierFrequency](/../types/TierFrequency) !  Non-null 

   presets  [ [Int](/../types/Int) ] 

   maxQuantity   [Int](/../types/Int)  

   availableQuantity   [Int](/../types/Int)  

 Number of tickets available. Returns null if there is no limit. 

   customFields   [JSON](/../types/JSON)  

   amountType   [TierAmountType](/../types/TierAmountType) !  Non-null 

   minimumAmount   [Amount](/../types/Amount) !  Non-null 

   endsAt   [DateTime](/../types/DateTime)  

   invoiceTemplate   [String](/../types/String)  

   useStandalonePage   [Boolean](/../types/Boolean)  

   singleTicket   [Boolean](/../types/Boolean)  

   requireAddress   [Boolean](/../types/Boolean) !  Non-null 

   contributors   [ContributorCollection](/../types/ContributorCollection) !  Non-null 

 Returns a list of all the contributors for this tier 

   Show arguments (2)    stats   [TierStats](/../types/TierStats)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *tier* from [MemberInvitation](/../types/MemberInvitation)

 * Field *tier* from [Order](/../types/Order)

 * Field *nodes* from [TierCollection](/../types/TierCollection)

   Show more (9)   

---

 **Previous**   [TaxType](/types/TaxType) **Next**  [TierAmountType](/types/TierAmountType)

---


# TierAmountTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/TierAmountType

# TierAmountType  Enum

  ## Possible Values

 ## [#](#possible-values)

     FIXED 

    FLEXIBLE 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *amountType* from [Tier](/../types/Tier)

 

---

 **Previous**   [Tier](/types/Tier) **Next**  [TierCollection](/types/TierCollection)

---


# TierCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/TierCollection

# TierCollection  Object

  A collection of "Tiers" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Tier](/../types/Tier) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *tiers* from [Host](/../types/Host)

 * Field *tiers* from [Collective](/../types/Collective)

 * Field *tiers* from [Event](/../types/Event)

   Show more (8)   

---

 **Previous**   [TierAmountType](/types/TierAmountType) **Next**  [TierCreateInput](/types/TierCreateInput)

---


# TierCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/TierCreateInput

# TierCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     amount   [AmountInput](/../types/AmountInput)  

    amountType   [TierAmountType](/../types/TierAmountType) !  Non-null

    button   [String](/../types/String)  

    description   [String](/../types/String)  

    frequency   [TierFrequency](/../types/TierFrequency) !  Non-null

    goal   [AmountInput](/../types/AmountInput)  

    invoiceTemplate   [String](/../types/String)  

    maxQuantity   [Int](/../types/Int)  

    minimumAmount   [AmountInput](/../types/AmountInput)  

    name   [NonEmptyString](/../types/NonEmptyString) !  Non-null

    presets  [ [Int](/../types/Int) !] 

    singleTicket   [Boolean](/../types/Boolean)  

    type   [TierType](/../types/TierType) !  Non-null

    useStandalonePage   [Boolean](/../types/Boolean)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *tier* of field *createTier*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TierCollection](/types/TierCollection) **Next**  [TierFrequency](/types/TierFrequency)

---


# TierFrequencyEnum

Source: https://graphql-docs-v2.opencollective.com/types/TierFrequency

# TierFrequency  Enum

  ## Possible Values

 ## [#](#possible-values)

     MONTHLY 

    YEARLY 

    ONETIME 

    FLEXIBLE 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *frequency* from [Tier](/../types/Tier)

 

---

 **Previous**   [TierCreateInput](/types/TierCreateInput) **Next**  [TierInterval](/types/TierInterval)

---


# TierIntervalEnum

Source: https://graphql-docs-v2.opencollective.com/types/TierInterval

# TierInterval  Enum

  ## Possible Values

 ## [#](#possible-values)

     month 

    year 

    flexible 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *interval* from [Tier](/../types/Tier)

 

---

 **Previous**   [TierFrequency](/types/TierFrequency) **Next**  [TierReferenceInput](/types/TierReferenceInput)

---


# TierReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/TierReferenceInput

# TierReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The id assigned to the Tier 

 

    isCustom   [Boolean](/../types/Boolean)  

 Pass this flag to reference the custom tier (/donate) 

 

    legacyId   [Int](/../types/Int)  

 The DB id assigned to the Tier 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *tier* of field *orders*
 from type [Host](/../types/Host)

 * Argument *tier* of field *orders*
 from type [PaymentMethod](/../types/PaymentMethod)

 * Argument *tier* of field *orders*
 from type [Bot](/../types/Bot)

   Show more (18)   

---

 **Previous**   [TierInterval](/types/TierInterval) **Next**  [TierStats](/types/TierStats)

---


# TierStatsObject

Source: https://graphql-docs-v2.opencollective.com/types/TierStats

# TierStats  Object

  Stats about a tier 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   totalAmountReceived   [Amount](/../types/Amount) !  Non-null 

 Total amount donated for this tier, in cents. 

   recurringAmount   [Amount](/../types/Amount) !  Non-null 

 How much money is given for this tier for each tier.interval (monthly/yearly). For flexible tiers, this amount is a monthly average of contributions amount, taking into account both yearly and monthly subscriptions. 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *stats* from [Tier](/../types/Tier)

 

---

 **Previous**   [TierReferenceInput](/types/TierReferenceInput) **Next**  [TierType](/types/TierType)

---


# TierTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/TierType

# TierType  Enum

  ## Possible Values

 ## [#](#possible-values)

     TIER 

    MEMBERSHIP 

    DONATION 

    TICKET 

    SERVICE 

    PRODUCT 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *type* from [Tier](/../types/Tier)

 

---

 **Previous**   [TierStats](/types/TierStats) **Next**  [TierUpdateInput](/types/TierUpdateInput)

---


# TierUpdateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/TierUpdateInput

# TierUpdateInput  Input Object

  ## Fields

 ## [#](#fields)

     amount   [AmountInput](/../types/AmountInput)  

    amountType   [TierAmountType](/../types/TierAmountType)  

    button   [String](/../types/String)  

    description   [String](/../types/String)  

    frequency   [TierFrequency](/../types/TierFrequency)  

    goal   [AmountInput](/../types/AmountInput)  

    id   [String](/../types/String) !  Non-null

 The public id identifying the tier (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    invoiceTemplate   [String](/../types/String)  

    longDescription   [String](/../types/String)  

    maxQuantity   [Int](/../types/Int)  

    minimumAmount   [AmountInput](/../types/AmountInput)  

    name   [NonEmptyString](/../types/NonEmptyString)  

    presets  [ [Int](/../types/Int) !] 

    singleTicket   [Boolean](/../types/Boolean)  

    type   [TierType](/../types/TierType)  

    useStandalonePage   [Boolean](/../types/Boolean)  

    videoUrl   [URL](/../types/URL)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *tier* of field *editTier*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TierType](/types/TierType) **Next**  [TimeSeries](/types/TimeSeries)

---


# TimeSeriesInterface

Source: https://graphql-docs-v2.opencollective.com/types/TimeSeries

# TimeSeries  Interface

  ## Fields

 ## [#](#fields)

     dateFrom   [DateTime](/../types/DateTime)  

 The start date of the time series 

   dateTo   [DateTime](/../types/DateTime)  

 The end date of the time series 

   timeUnit   [TimeUnit](/../types/TimeUnit) !  Non-null 

 The interval between two data points 

  ## Implementations

 ## [#](#implementations)

 
 Implemented by [TimeSeriesAmount](/../types/TimeSeriesAmount) , [TimeSeriesAmountWithSettlement](/../types/TimeSeriesAmountWithSettlement) , [TimeSeriesAmountWithKind](/../types/TimeSeriesAmountWithKind) .  

---

 **Previous**   [TierUpdateInput](/types/TierUpdateInput) **Next**  [TimeSeriesAmount](/types/TimeSeriesAmount)

---


# TimeSeriesAmountObject

Source: https://graphql-docs-v2.opencollective.com/types/TimeSeriesAmount

# TimeSeriesAmount  Object

  Amount time series 

 ## Fields

 ## [#](#fields)

     dateFrom   [DateTime](/../types/DateTime)  

 The start date of the time series 

   dateTo   [DateTime](/../types/DateTime)  

 The end date of the time series 

   timeUnit   [TimeUnit](/../types/TimeUnit) !  Non-null 

 The interval between two data points 

   nodes  [ [TimeSeriesAmountNode](/../types/TimeSeriesAmountNode) !]!  Non-null 

 Time series data points 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [TimeSeries](/../types/TimeSeries) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *amountPledgedTimeSeries* from [AccountStats](/../types/AccountStats)

 * Field *totalAmountReceivedTimeSeries* from [AccountStats](/../types/AccountStats)

 * Field *balanceTimeSeries* from [AccountStats](/../types/AccountStats)

   Show more (9)   

---

 **Previous**   [TimeSeries](/types/TimeSeries) **Next**  [TimeSeriesAmountNode](/types/TimeSeriesAmountNode)

---


# TimeSeriesAmountNodeObject

Source: https://graphql-docs-v2.opencollective.com/types/TimeSeriesAmountNode

# TimeSeriesAmountNode  Object

  ## Fields

 ## [#](#fields)

     date   [DateTime](/../types/DateTime) !  Non-null 

   amount   [Amount](/../types/Amount) !  Non-null 

   count   [Int](/../types/Int)  

   label   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [TimeSeriesAmount](/../types/TimeSeriesAmount)

 

---

 **Previous**   [TimeSeriesAmount](/types/TimeSeriesAmount) **Next**  [TimeSeriesAmountWithKind](/types/TimeSeriesAmountWithKind)

---


# TimeSeriesAmountWithKindObject

Source: https://graphql-docs-v2.opencollective.com/types/TimeSeriesAmountWithKind

# TimeSeriesAmountWithKind  Object

  Amounts with settlements time series 

 ## Fields

 ## [#](#fields)

     dateFrom   [DateTime](/../types/DateTime)  

 The start date of the time series 

   dateTo   [DateTime](/../types/DateTime)  

 The end date of the time series 

   timeUnit   [TimeUnit](/../types/TimeUnit) !  Non-null 

 The interval between two data points 

   nodes  [ [TimeSeriesAmountWithKindNode](/../types/TimeSeriesAmountWithKindNode) !]!  Non-null 

 Time series data points 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [TimeSeries](/../types/TimeSeries) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *totalReceived* from [HostMetricsTimeSeries](/../types/HostMetricsTimeSeries)

 * Field *totalSpent* from [HostMetricsTimeSeries](/../types/HostMetricsTimeSeries)

 

---

 **Previous**   [TimeSeriesAmountNode](/types/TimeSeriesAmountNode) **Next**  [TimeSeriesAmountWithKindNode](/types/TimeSeriesAmountWithKindNode)

---


# TimeSeriesAmountWithKindNodeObject

Source: https://graphql-docs-v2.opencollective.com/types/TimeSeriesAmountWithKindNode

# TimeSeriesAmountWithKindNode  Object

  ## Fields

 ## [#](#fields)

     date   [DateTime](/../types/DateTime) !  Non-null 

   amount   [Amount](/../types/Amount) !  Non-null 

   kind   [TransactionKind](/../types/TransactionKind) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [TimeSeriesAmountWithKind](/../types/TimeSeriesAmountWithKind)

 

---

 **Previous**   [TimeSeriesAmountWithKind](/types/TimeSeriesAmountWithKind) **Next**  [TimeSeriesAmountWithSettlement](/types/TimeSeriesAmountWithSettlement)

---


# TimeSeriesAmountWithSettlementObject

Source: https://graphql-docs-v2.opencollective.com/types/TimeSeriesAmountWithSettlement

# TimeSeriesAmountWithSettlement  Object

  Amounts with settlements time series 

 ## Fields

 ## [#](#fields)

     dateFrom   [DateTime](/../types/DateTime)  

 The start date of the time series 

   dateTo   [DateTime](/../types/DateTime)  

 The end date of the time series 

   timeUnit   [TimeUnit](/../types/TimeUnit) !  Non-null 

 The interval between two data points 

   nodes  [ [TimeSeriesAmountWithSettlementNode](/../types/TimeSeriesAmountWithSettlementNode) !]!  Non-null 

 Time series data points 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [TimeSeries](/../types/TimeSeries) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *hostFeeShare* from [HostMetricsTimeSeries](/../types/HostMetricsTimeSeries)

 

---

 **Previous**   [TimeSeriesAmountWithKindNode](/types/TimeSeriesAmountWithKindNode) **Next**  [TimeSeriesAmountWithSettlementNode](/types/TimeSeriesAmountWithSettlementNode)

---


# TimeSeriesAmountWithSettlementNodeObject

Source: https://graphql-docs-v2.opencollective.com/types/TimeSeriesAmountWithSettlementNode

# TimeSeriesAmountWithSettlementNode  Object

  ## Fields

 ## [#](#fields)

     date   [DateTime](/../types/DateTime) !  Non-null 

   amount   [Amount](/../types/Amount) !  Non-null 

   settlementStatus   [TransactionSettlementStatus](/../types/TransactionSettlementStatus) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [TimeSeriesAmountWithSettlement](/../types/TimeSeriesAmountWithSettlement)

 

---

 **Previous**   [TimeSeriesAmountWithSettlement](/types/TimeSeriesAmountWithSettlement) **Next**  [TimeUnit](/types/TimeUnit)

---


# TimeUnitEnum

Source: https://graphql-docs-v2.opencollective.com/types/TimeUnit

# TimeUnit  Enum

  ## Possible Values

 ## [#](#possible-values)

     SECOND 

    MINUTE 

    HOUR 

    DAY 

    WEEK 

    MONTH 

    QUARTER 

    YEAR 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *timeUnit* of field *transactionReports*
 from type [Host](/../types/Host)

 * Argument *timeUnit* of field *hostTransactionsReports*
 from type [Host](/../types/Host)

 * Argument *timeUnit* of field *hostMetricsTimeSeries*
 from type [Host](/../types/Host)

   Show more (27)   

---

 **Previous**   [TimeSeriesAmountWithSettlementNode](/types/TimeSeriesAmountWithSettlementNode) **Next**  [Transaction](/types/Transaction)

---


# TransactionInterface

Source: https://graphql-docs-v2.opencollective.com/types/Transaction

# Transaction  Interface

  Transaction interface shared by all kind of transactions (Debit, Credit) 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   legacyId   [Int](/../types/Int) !  Non-null 

   uuid   [String](/../types/String) !   Deprecated 2021-08-15: Use id instead.  Non-null 

   group   [String](/../types/String) !  Non-null 

   type   [TransactionType](/../types/TransactionType) !  Non-null 

   kind   [TransactionKind](/../types/TransactionKind)  

   description   [String](/../types/String)  

   Show arguments (2)    amount   [Amount](/../types/Amount) !  Non-null 

   amountInHostCurrency   [Amount](/../types/Amount) !  Non-null 

   hostCurrencyFxRate   [Float](/../types/Float)  

 Exchange rate between the currency of the transaction and the currency of the host (transaction.amount \* transaction.hostCurrencyFxRate = transaction.amountInHostCurrency) 

   netAmount   [Amount](/../types/Amount) !  Non-null 

   Show arguments (3)    netAmountInHostCurrency   [Amount](/../types/Amount) !  Non-null 

   Show arguments (3)    taxAmount   [Amount](/../types/Amount) !  Non-null 

   Show arguments (1)    taxInfo   [TaxInfo](/../types/TaxInfo)  

 If a tax is set, this field will contain more info about the tax 

   platformFee   [Amount](/../types/Amount) !  Non-null 

   hostFee   [Amount](/../types/Amount)  

   Show arguments (1)    paymentProcessorFee   [Amount](/../types/Amount)  

   Show arguments (1)    paymentProcessorUrl   [String](/../types/String)  

   host   [Account](/../types/Account)  

   account   [Account](/../types/Account)  

   oppositeAccount   [Account](/../types/Account)  

   fromAccount   [Account](/../types/Account)  

 The sender of a transaction (on CREDIT = oppositeAccount, DEBIT = account) 

   toAccount   [Account](/../types/Account)  

 The recipient of a transaction (on CREDIT = account, DEBIT = oppositeAccount) 

   giftCardEmitterAccount   [Account](/../types/Account)  

   createdAt   [DateTime](/../types/DateTime)  

   updatedAt   [DateTime](/../types/DateTime)  

   clearedAt   [DateTime](/../types/DateTime)  

   expense   [Expense](/../types/Expense)  

   order   [Order](/../types/Order)  

   isRefunded   [Boolean](/../types/Boolean)  

   isRefund   [Boolean](/../types/Boolean)  

   isDisputed   [Boolean](/../types/Boolean)  

   isInReview   [Boolean](/../types/Boolean)  

   paymentMethod   [PaymentMethod](/../types/PaymentMethod)  

   payoutMethod   [PayoutMethod](/../types/PayoutMethod)  

   permissions   [TransactionPermissions](/../types/TransactionPermissions)  

   isOrderRejected   [Boolean](/../types/Boolean) !  Non-null 

   refundTransaction   [Transaction](/../types/Transaction)  

   oppositeTransaction   [Transaction](/../types/Transaction)  

 The opposite transaction (CREDIT -> DEBIT, DEBIT -> CREDIT) 

   relatedTransactions  [ [Transaction](/../types/Transaction) ]!  Non-null 

   Show arguments (1)    merchantId   [String](/../types/String)  

 Merchant id related to the Transaction (Stripe, PayPal, Wise, Privacy) 

   balanceInHostCurrency   [Amount](/../types/Amount)  

 The balance after the Transaction has run. Only for financially active accounts. 

   invoiceTemplate   [String](/../types/String)  

  ## Implementations

 ## [#](#implementations)

 
 Implemented by [Credit](/../types/Credit) , [Debit](/../types/Debit) .  ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *transactions* from [Order](/../types/Order)

 * Field *nodes* from [TransactionCollection](/../types/TransactionCollection)

 * Field *transaction* from [Activity](/../types/Activity)

   Show more (14)   

---

 **Previous**   [TimeUnit](/types/TimeUnit) **Next**  [TransactionCollection](/types/TransactionCollection)

---


# TransactionCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionCollection

# TransactionCollection  Object

  A collection of Transactions (Debit or Credit) 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Transaction](/../types/Transaction) ] 

   kinds  [ [TransactionKind](/../types/TransactionKind) ] 

   paymentMethodTypes  [ [PaymentMethodType](/../types/PaymentMethodType) ]!  Non-null 

 The types of payment methods used in this collection, regardless of the pagination 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *transactions* from [Host](/../types/Host)

 * Field *transactions* from [Bot](/../types/Bot)

 * Field *transactions* from [Collective](/../types/Collective)

   Show more (11)   

---

 **Previous**   [Transaction](/types/Transaction) **Next**  [TransactionGroup](/types/TransactionGroup)

---


# TransactionGroupObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionGroup

# TransactionGroup  Object

  Transaction group 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   totalAmount   [Amount](/../types/Amount) !  Non-null 

   host   [Account](/../types/Account)  

   account   [Account](/../types/Account)  

 The account on the main side of the transaction (CREDIT -> recipient, DEBIT -> sender) 

   primaryTransaction   [Transaction](/../types/Transaction)  

 The primary transaction in the group 

   transactions  [ [Transaction](/../types/Transaction) ] 

 The transactions in the group 

   createdAt   [DateTime](/../types/DateTime)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [TransactionGroupCollection](/../types/TransactionGroupCollection)

 * Field *transactionGroup* from [Query](/../types/Query)

 

---

 **Previous**   [TransactionCollection](/types/TransactionCollection) **Next**  [TransactionGroupCollection](/types/TransactionGroupCollection)

---


# TransactionGroupCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionGroupCollection

# TransactionGroupCollection  Object

  A collection of Transactions groups 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [TransactionGroup](/../types/TransactionGroup) !]!  Non-null 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *transactionGroups* from [Host](/../types/Host)

 * Field *transactionGroups* from [Bot](/../types/Bot)

 * Field *transactionGroups* from [Collective](/../types/Collective)

   Show more (10)   

---

 **Previous**   [TransactionGroup](/types/TransactionGroup) **Next**  [TransactionKind](/types/TransactionKind)

---


# TransactionKindEnum

Source: https://graphql-docs-v2.opencollective.com/types/TransactionKind

# TransactionKind  Enum

  ## Possible Values

 ## [#](#possible-values)

     ADDED\_FUNDS 

    BALANCE\_TRANSFER 

    CONTRIBUTION 

    EXPENSE 

    HOST\_FEE 

    HOST\_FEE\_SHARE 

    HOST\_FEE\_SHARE\_DEBT 

    PAYMENT\_PROCESSOR\_COVER 

    PAYMENT\_PROCESSOR\_DISPUTE\_FEE 

    PAYMENT\_PROCESSOR\_FEE 

    PLATFORM\_FEE 

    PLATFORM\_TIP 

    PLATFORM\_TIP\_DEBT 

    PREPAID\_PAYMENT\_METHOD 

    TAX 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *kind* of field *transactions*
 from type [Host](/../types/Host)

 * Argument *kind* of field *transactionGroups*
 from type [Host](/../types/Host)

 * Field *kinds* from [TransactionCollection](/../types/TransactionCollection)

   Show more (35)   

---

 **Previous**   [TransactionGroupCollection](/types/TransactionGroupCollection) **Next**  [TransactionPermissions](/types/TransactionPermissions)

---


# TransactionPermissionsObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionPermissions

# TransactionPermissions  Object

  Fields for the user permissions on an transaction 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   canRefund   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can edit the transaction 

   canDownloadInvoice   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can download this transaction's invoice 

   canReject   [Boolean](/../types/Boolean) !  Non-null 

 Whether the current user can reject the transaction 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *permissions* from [Credit](/../types/Credit)

 * Field *permissions* from [Debit](/../types/Debit)

 

---

 **Previous**   [TransactionKind](/types/TransactionKind) **Next**  [TransactionReferenceInput](/types/TransactionReferenceInput)

---


# TransactionReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/TransactionReferenceInput

# TransactionReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the transaction (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The internal id of the transaction (ie: 580) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *transaction* of field *transaction*
 from type [Query](/../types/Query)

 * Argument *transaction* of field *refundTransaction*
 from type [Mutation](/../types/Mutation)

 * Argument *transaction* of field *rejectTransaction*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TransactionPermissions](/types/TransactionPermissions) **Next**  [TransactionReport](/types/TransactionReport)

---


# TransactionReportObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionReport

# TransactionReport  Object

  EXPERIMENTAL (this may change or be deleted) 

 ## Fields

 ## [#](#fields)

     date   [DateTime](/../types/DateTime)  

   startingBalance   [Amount](/../types/Amount) !  Non-null 

   endingBalance   [Amount](/../types/Amount) !  Non-null 

   totalChange   [Amount](/../types/Amount) !  Non-null 

   groups  [ [TransactionsAmountGroup](/../types/TransactionsAmountGroup) ]!  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [TransactionReports](/../types/TransactionReports)

 * Field *managedFunds* from [HostTransactionReportNode](/../types/HostTransactionReportNode)

 * Field *operationalFunds* from [HostTransactionReportNode](/../types/HostTransactionReportNode)

 

---

 **Previous**   [TransactionReferenceInput](/types/TransactionReferenceInput) **Next**  [TransactionReports](/types/TransactionReports)

---


# TransactionReportsObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionReports

# TransactionReports  Object

  EXPERIMENTAL (this may change or be deleted): Host transaction report 

 ## Fields

 ## [#](#fields)

     dateFrom   [DateTime](/../types/DateTime)  

 The start date of the time series 

   dateTo   [DateTime](/../types/DateTime)  

 The end date of the time series 

   timeUnit   [TimeUnit](/../types/TimeUnit) !  Non-null 

 The interval between two data points 

   nodes  [ [TransactionReport](/../types/TransactionReport) !] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *transactionReports* from [Host](/../types/Host)

 * Field *transactionReports* from [Bot](/../types/Bot)

 * Field *transactionReports* from [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [TransactionReport](/types/TransactionReport) **Next**  [TransactionSettlementStatus](/types/TransactionSettlementStatus)

---


# TransactionSettlementStatusEnum

Source: https://graphql-docs-v2.opencollective.com/types/TransactionSettlementStatus

# TransactionSettlementStatus  Enum

  ## Possible Values

 ## [#](#possible-values)

     OWED 

    INVOICED 

    SETTLED 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *settlementStatus* from [TimeSeriesAmountWithSettlementNode](/../types/TimeSeriesAmountWithSettlementNode)

 

---

 **Previous**   [TransactionReports](/types/TransactionReports) **Next**  [TransactionType](/types/TransactionType)

---


# TransactionTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/TransactionType

# TransactionType  Enum

  All transaction types 

 ## Possible Values

 ## [#](#possible-values)

     DEBIT 

    CREDIT 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *type* of field *transactions*
 from type [Host](/../types/Host)

 * Argument *type* of field *transactionGroups*
 from type [Host](/../types/Host)

 * Field *type* from [TransactionsAmountGroup](/../types/TransactionsAmountGroup)

   Show more (23)   

---

 **Previous**   [TransactionSettlementStatus](/types/TransactionSettlementStatus) **Next**  [TransactionsAmountGroup](/types/TransactionsAmountGroup)

---


# TransactionsAmountGroupObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsAmountGroup

# TransactionsAmountGroup  Object

  EXPERIMENTAL (this may change or be deleted): Transaction amounts grouped by type, kind, isRefund, isHost, expenseType 

 ## Fields

 ## [#](#fields)

     netAmount   [Amount](/../types/Amount)  

   amount   [Amount](/../types/Amount)  

   platformFee   [Amount](/../types/Amount)  

   paymentProcessorFee   [Amount](/../types/Amount)  

   hostFee   [Amount](/../types/Amount)  

   taxAmount   [Amount](/../types/Amount)  

   type   [TransactionType](/../types/TransactionType)  

   kind   [TransactionKind](/../types/TransactionKind)  

   isRefund   [Boolean](/../types/Boolean)  

   isHost   [Boolean](/../types/Boolean)  

   expenseType   [ExpenseType](/../types/ExpenseType)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *groups* from [TransactionReport](/../types/TransactionReport)

 

---

 **Previous**   [TransactionType](/types/TransactionType) **Next**  [TransactionsImport](/types/TransactionsImport)

---


# TransactionsImportObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImport

# TransactionsImport  Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id of the import 

   account   [Account](/../types/Account) !  Non-null 

 Account that holds the import 

   file   [FileInfo](/../types/FileInfo)  

 URL of the import (e.g. link to the CSV file) 

   source   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 Source of the import (e.g. "Bank of America", "Eventbrite", etc...) 

   name   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 Name of the import (e.g. "Contributions May 2021", "Tickets for Mautic Conference 2024") 

   type   [TransactionsImportType](/../types/TransactionsImportType) !  Non-null 

 Type of the import 

   csvConfig   [JSON](/../types/JSON)  

 Configuration for the CSV import 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

 When the import was created 

   updatedAt   [DateTime](/../types/DateTime) !  Non-null 

 When the import was last updated 

   lastSyncAt   [DateTime](/../types/DateTime)  

 When the import was last synced 

   isSyncing   [Boolean](/../types/Boolean) !  Non-null 

 Whether the import is currently syncing 

   lastSyncCursor   [String](/../types/String)  

 Cursor that defines where the last sync left off. Useful to know if there is new data to sync 

   plaidAccounts  [ [PlaidAccount](/../types/PlaidAccount) ] 

 List of available accounts for the import 

   assignments  [ [TransactionsImportAssignment](/../types/TransactionsImportAssignment) !]!  Non-null 

 Assignments for the import, as a map of account id to legacy collective IDs. The `__default__`  key can be use to set the default assignment. 

   connectedAccount   [ConnectedAccount](/../types/ConnectedAccount)  

 Connected account linked to the import 

   rows   [TransactionsImportRowCollection](/../types/TransactionsImportRowCollection) !  Non-null 

 List of rows in the import 

   Show arguments (5)    stats   [TransactionsImportStats](/../types/TransactionsImportStats)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [TransactionsImportsCollection](/../types/TransactionsImportsCollection)

 * Field *transactionsImport* from [Query](/../types/Query)

 * Field *syncPlaidAccount* from [Mutation](/../types/Mutation)

   Show more (8)   

---

 **Previous**   [TransactionsAmountGroup](/types/TransactionsAmountGroup) **Next**  [TransactionsImportAssignment](/types/TransactionsImportAssignment)

---


# TransactionsImportAssignmentObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportAssignment

# TransactionsImportAssignment  Object

  ## Fields

 ## [#](#fields)

     importedAccountId   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

   accounts  [ [Account](/../types/Account) !]!  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *assignments* from [TransactionsImport](/../types/TransactionsImport)

 

---

 **Previous**   [TransactionsImport](/types/TransactionsImport) **Next**  [TransactionsImportAssignmentInput](/types/TransactionsImportAssignmentInput)

---


# TransactionsImportAssignmentInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportAssignmentInput

# TransactionsImportAssignmentInput  Input Object

  ## Fields

 ## [#](#fields)

     accounts  [ [AccountReferenceInput](/../types/AccountReferenceInput) !]!  Non-null

 The accounts to assign the transactions to 

 

    importedAccountId   [NonEmptyString](/../types/NonEmptyString) !  Non-null

 The ID of the account to assign the transactions to 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *assignments* of field *editTransactionsImport*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TransactionsImportAssignment](/types/TransactionsImportAssignment) **Next**  [TransactionsImportEditResponse](/types/TransactionsImportEditResponse)

---


# TransactionsImportEditResponseObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportEditResponse

# TransactionsImportEditResponse  Object

  ## Fields

 ## [#](#fields)

     import   [TransactionsImport](/../types/TransactionsImport) !  Non-null 

 Updated import 

   rows  [ [TransactionsImportRow](/../types/TransactionsImportRow) ]!  Non-null 

 The rows updated by the mutation 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *updateTransactionsImportRows* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [TransactionsImportAssignmentInput](/types/TransactionsImportAssignmentInput) **Next**  [TransactionsImportReferenceInput](/types/TransactionsImportReferenceInput)

---


# TransactionsImportReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportReferenceInput

# TransactionsImportReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [NonEmptyString](/../types/NonEmptyString) !  Non-null

 The id of the row 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *transactionImport* of field *generatePlaidLinkToken*
 from type [Mutation](/../types/Mutation)

 * Argument *transactionImport* of field *refreshPlaidAccount*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TransactionsImportEditResponse](/types/TransactionsImportEditResponse) **Next**  [TransactionsImportRow](/types/TransactionsImportRow)

---


# TransactionsImportRowObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportRow

# TransactionsImportRow  Object

  A row in a transactions import 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id of the imported row 

   sourceId   [NonEmptyString](/../types/NonEmptyString) !  Non-null 

 The source id of the row 

   status   [TransactionsImportRowStatus](/../types/TransactionsImportRowStatus) !  Non-null 

 The status of the row 

   description   [String](/../types/String) !  Non-null 

 The description of the row 

   date   [DateTime](/../types/DateTime) !  Non-null 

 The date of the row 

   amount   [Amount](/../types/Amount) !  Non-null 

 The amount of the row 

   note   [String](/../types/String)  

 Optional note for the row 

   expense   [Expense](/../types/Expense)  

 The expense associated with the row 

   accountId   [String](/../types/String)  

 If an account ID is available in the imported row, it will be stored here. Returns the default account ID otherwise. 

   rawValue   [JSONObject](/../types/JSONObject)  

 The raw data of the row 

   order   [Order](/../types/Order)  

 The order associated with the row 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *transactionImportRow* from [Order](/../types/Order)

 * Field *transactionImportRow* from [Expense](/../types/Expense)

 * Field *nodes* from [TransactionsImportRowCollection](/../types/TransactionsImportRowCollection)

   Show more (4)   

---

 **Previous**   [TransactionsImportReferenceInput](/types/TransactionsImportReferenceInput) **Next**  [TransactionsImportRowAction](/types/TransactionsImportRowAction)

---


# TransactionsImportRowActionEnum

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportRowAction

# TransactionsImportRowAction  Enum

  Action to perform on transactions import rows 

 ## Possible Values

 ## [#](#possible-values)

     DISMISS\_ALL 

    RESTORE\_ALL 

    PUT\_ON\_HOLD\_ALL 

    UPDATE\_ROWS 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *action* of field *updateTransactionsImportRows*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TransactionsImportRow](/types/TransactionsImportRow) **Next**  [TransactionsImportRowCollection](/types/TransactionsImportRowCollection)

---


# TransactionsImportRowCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportRowCollection

# TransactionsImportRowCollection  Object

  A collection of "TransactionsImportRow" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [TransactionsImportRow](/../types/TransactionsImportRow) !] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *rows* from [TransactionsImport](/../types/TransactionsImport)

 

---

 **Previous**   [TransactionsImportRowAction](/types/TransactionsImportRowAction) **Next**  [TransactionsImportRowCreateInput](/types/TransactionsImportRowCreateInput)

---


# TransactionsImportRowCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportRowCreateInput

# TransactionsImportRowCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     amount   [AmountInput](/../types/AmountInput) !  Non-null

 The amount of the row 

 

    date   [DateTime](/../types/DateTime) !  Non-null

 The date of the row 

 

    description   [String](/../types/String)  

 The description of the row 

 

    rawValue   [JSONObject](/../types/JSONObject)  

 The raw value of the row 

 

    sourceId   [NonEmptyString](/../types/NonEmptyString) !  Non-null

 The source id of the row 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *data* of field *importTransactions*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TransactionsImportRowCollection](/types/TransactionsImportRowCollection) **Next**  [TransactionsImportRowReferenceInput](/types/TransactionsImportRowReferenceInput)

---


# TransactionsImportRowReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportRowReferenceInput

# TransactionsImportRowReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [NonEmptyString](/../types/NonEmptyString) !  Non-null

 The id of the row 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *transactionsImportRow* of field *addFunds*
 from type [Mutation](/../types/Mutation)

 * Argument *transactionsImportRow* of field *createExpense*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TransactionsImportRowCreateInput](/types/TransactionsImportRowCreateInput) **Next**  [TransactionsImportRowStatus](/types/TransactionsImportRowStatus)

---


# TransactionsImportRowStatusEnum

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportRowStatus

# TransactionsImportRowStatus  Enum

  The status of a row in a transactions import 

 ## Possible Values

 ## [#](#possible-values)

     PENDING 

 The row has not been processed yet 

 

    LINKED 

 The row has been linked to an existing expense or order 

 

    IGNORED 

 The row has been ignored 

 

    ON\_HOLD 

 The row is on hold 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *status* of field *rows*
 from type [TransactionsImport](/../types/TransactionsImport)

 * Field *status* from [TransactionsImportRow](/../types/TransactionsImportRow)

 

---

 **Previous**   [TransactionsImportRowReferenceInput](/types/TransactionsImportRowReferenceInput) **Next**  [TransactionsImportRowUpdateInput](/types/TransactionsImportRowUpdateInput)

---


# TransactionsImportRowUpdateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportRowUpdateInput

# TransactionsImportRowUpdateInput  Input Object

  ## Fields

 ## [#](#fields)

     amount   [AmountInput](/../types/AmountInput)  

 The amount of the row 

 

    date   [DateTime](/../types/DateTime)  

 The date of the row 

 

    description   [String](/../types/String)  

 The description of the row 

 

    expense   [ExpenseReferenceInput](/../types/ExpenseReferenceInput)  

 The expense associated with the row 

 

    id   [NonEmptyString](/../types/NonEmptyString) !  Non-null

 The id of the row 

 

    note   [String](/../types/String)  

 Optional note for the row 

 

    order   [OrderReferenceInput](/../types/OrderReferenceInput)  

 The order associated with the row 

 

    sourceId   [NonEmptyString](/../types/NonEmptyString)  

 The source id of the row 

 

    status   [TransactionsImportRowStatus](/../types/TransactionsImportRowStatus)  

 To update the status of the row. Will be ignored if the status is not applicable (e.g. trying to ignore a row that is already linked) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *rows* of field *updateTransactionsImportRows*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TransactionsImportRowStatus](/types/TransactionsImportRowStatus) **Next**  [TransactionsImportStats](/types/TransactionsImportStats)

---


# TransactionsImportStatsObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportStats

# TransactionsImportStats  Object

  ## Fields

 ## [#](#fields)

     total   [Int](/../types/Int) !  Non-null 

 Total number of rows in the import 

   ignored   [Int](/../types/Int) !  Non-null 

 Number of rows that have been ignored 

   expenses   [Int](/../types/Int) !  Non-null 

 Number of rows that have been converted to expenses 

   orders   [Int](/../types/Int) !  Non-null 

 Number of rows that have been converted to orders 

   processed   [Int](/../types/Int) !  Non-null 

 Number of rows that have been processed (either dismissed or converted to expenses or orders) 

   onHold   [Int](/../types/Int) !  Non-null 

 Number of rows that are on hold 

   pending   [Int](/../types/Int) !  Non-null 

 Number of rows that are pending 

   invalid   [Int](/../types/Int) !  Non-null 

 Number of rows that are invalid (e.g. linked but without an expense or order) 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *stats* from [TransactionsImport](/../types/TransactionsImport)

 

---

 **Previous**   [TransactionsImportRowUpdateInput](/types/TransactionsImportRowUpdateInput) **Next**  [TransactionsImportType](/types/TransactionsImportType)

---


# TransactionsImportTypeEnum

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportType

# TransactionsImportType  Enum

  Type of the import 

 ## Possible Values

 ## [#](#possible-values)

     CSV 

    MANUAL 

    PLAID 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *type* from [TransactionsImport](/../types/TransactionsImport)

 * Argument *type* of field *createTransactionsImport*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TransactionsImportStats](/types/TransactionsImportStats) **Next**  [TransactionsImportsCollection](/types/TransactionsImportsCollection)

---


# TransactionsImportsCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/TransactionsImportsCollection

# TransactionsImportsCollection  Object

  A collection of "TransactionsImports" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [TransactionsImport](/../types/TransactionsImport) !] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *transactionsImports* from [Host](/../types/Host)

 

---

 **Previous**   [TransactionsImportType](/types/TransactionsImportType) **Next**  [TransferWise](/types/TransferWise)

---


# TransferWiseObject

Source: https://graphql-docs-v2.opencollective.com/types/TransferWise

# TransferWise  Object

  TransferWise related properties for bank transfer. 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 Unique identifier for this Wise object 

   requiredFields  [ [TransferWiseRequiredField](/../types/TransferWiseRequiredField) ] 

   Show arguments (2)    availableCurrencies  [ [JSONObject](/../types/JSONObject) ] 

   Show arguments (1)    balances  [ [Amount](/../types/Amount) ] 

 Transferwise balances. Returns null if Transferwise account is not connected. 

   amountBatched   [Amount](/../types/Amount)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *transferwise* from [Host](/../types/Host)

 * Field *transferwise* from [Bot](/../types/Bot)

 * Field *transferwise* from [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [TransactionsImportsCollection](/types/TransactionsImportsCollection) **Next**  [TransferWiseField](/types/TransferWiseField)

---


# TransferWiseFieldObject

Source: https://graphql-docs-v2.opencollective.com/types/TransferWiseField

# TransferWiseField  Object

  ## Fields

 ## [#](#fields)

     name   [String](/../types/String)  

   group  [ [TransferWiseFieldGroup](/../types/TransferWiseFieldGroup) ] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *fields* from [TransferWiseRequiredField](/../types/TransferWiseRequiredField)

 

---

 **Previous**   [TransferWise](/types/TransferWise) **Next**  [TransferWiseFieldGroup](/types/TransferWiseFieldGroup)

---


# TransferWiseFieldGroupObject

Source: https://graphql-docs-v2.opencollective.com/types/TransferWiseFieldGroup

# TransferWiseFieldGroup  Object

  ## Fields

 ## [#](#fields)

     key   [String](/../types/String)  

   name   [String](/../types/String)  

   type   [String](/../types/String)  

   required   [Boolean](/../types/Boolean)  

   refreshRequirementsOnChange   [Boolean](/../types/Boolean)  

   displayFormat   [String](/../types/String)  

   example   [String](/../types/String)  

   minLength   [Int](/../types/Int)  

   maxLength   [Int](/../types/Int)  

   validationRegexp   [String](/../types/String)  

   validationAsync   [String](/../types/String)  

   valuesAllowed  [ [TransferWiseFieldVatvkluesAllowed](/../types/TransferWiseFieldVatvkluesAllowed) ] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *group* from [TransferWiseField](/../types/TransferWiseField)

 

---

 **Previous**   [TransferWiseField](/types/TransferWiseField) **Next**  [TransferWiseFieldVatvkluesAllowed](/types/TransferWiseFieldVatvkluesAllowed)

---


# TransferWiseFieldVatvkluesAllowedObject

Source: https://graphql-docs-v2.opencollective.com/types/TransferWiseFieldVatvkluesAllowed

# TransferWiseFieldVatvkluesAllowed  Object

  ## Fields

 ## [#](#fields)

     key   [String](/../types/String)  

   name   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *valuesAllowed* from [TransferWiseFieldGroup](/../types/TransferWiseFieldGroup)

 

---

 **Previous**   [TransferWiseFieldGroup](/types/TransferWiseFieldGroup) **Next**  [TransferWiseRequiredField](/types/TransferWiseRequiredField)

---


# TransferWiseRequiredFieldObject

Source: https://graphql-docs-v2.opencollective.com/types/TransferWiseRequiredField

# TransferWiseRequiredField  Object

  ## Fields

 ## [#](#fields)

     type   [String](/../types/String)  

   title   [String](/../types/String)  

   fields  [ [TransferWiseField](/../types/TransferWiseField) ] 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *validateTransferRequirements* from [Expense](/../types/Expense)

 * Field *requiredFields* from [TransferWise](/../types/TransferWise)

 

---

 **Previous**   [TransferWiseFieldVatvkluesAllowed](/types/TransferWiseFieldVatvkluesAllowed) **Next**  [TwoFactorMethod](/types/TwoFactorMethod)

---


# TwoFactorMethodEnum

Source: https://graphql-docs-v2.opencollective.com/types/TwoFactorMethod

# TwoFactorMethod  Enum

  A two factor authentication method 

 ## Possible Values

 ## [#](#possible-values)

     TOTP 

    YUBIKEY\_OTP 

    WEBAUTHN 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *method* from [UserTwoFactorMethod](/../types/UserTwoFactorMethod)

 * Argument *type* of field *addTwoFactorAuthTokenToIndividual*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [TransferWiseRequiredField](/types/TransferWiseRequiredField) **Next**  [URL](/types/URL)

---


# URLScalar

Source: https://graphql-docs-v2.opencollective.com/types/URL

# URL  Scalar

  A field whose value conforms to the standard URL format as specified in RFC3986: <https://www.ietf.org/rfc/rfc3986.txt>. 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *redirectUri* from [Application](/../types/Application)

 * Field *url* from [SocialLink](/../types/SocialLink)

 * Field *termsUrl* from [Host](/../types/Host)

   Show more (9)   

---

 **Previous**   [TwoFactorMethod](/types/TwoFactorMethod) **Next**  [UnfollowAccountResult](/types/UnfollowAccountResult)

---


# UnfollowAccountResultObject

Source: https://graphql-docs-v2.opencollective.com/types/UnfollowAccountResult

# UnfollowAccountResult  Object

  ## Fields

 ## [#](#fields)

     individual   [Individual](/../types/Individual) !  Non-null 

   member   [Member](/../types/Member)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *unfollowAccount* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [URL](/types/URL) **Next**  [Update](/types/Update)

---


# UpdateObject

Source: https://graphql-docs-v2.opencollective.com/types/Update

# Update  Object

  This represents an Update 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   legacyId   [Int](/../types/Int)  

   slug   [String](/../types/String) !  Non-null 

   userCanSeeUpdate   [Boolean](/../types/Boolean) !  Non-null 

 Indicates whether or not the user is allowed to see the content of this update 

   userCanPublishUpdate   [Boolean](/../types/Boolean) !  Non-null 

 Indicates whether or not the user is allowed to publish this update 

   isPrivate   [Boolean](/../types/Boolean) !  Non-null 

   isChangelog   [Boolean](/../types/Boolean) !  Non-null 

   title   [String](/../types/String) !  Non-null 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

   updatedAt   [DateTime](/../types/DateTime) !  Non-null 

   publishedAt   [DateTime](/../types/DateTime)  

   notificationAudience   [UpdateAudience](/../types/UpdateAudience)  

   audienceStats   [UpdateAudienceStats](/../types/UpdateAudienceStats)  

 Some stats about the target audience. Will be null if the update is already published or if you don't have enough permissions so see this information. Not backed by a loader, avoid using this field in lists. 

   Show arguments (1)    makePublicOn   [DateTime](/../types/DateTime)  

   summary   [String](/../types/String)  

   html   [String](/../types/String)  

   tags  [ [String](/../types/String) ] 

   fromAccount   [Account](/../types/Account)  

   account   [Account](/../types/Account)  

   reactions   [JSON](/../types/JSON)  

 Returns a map of reactions counts for this update 

   userReactions  [ [String](/../types/String) ] 

 Returns the list of reactions added to this update by logged in user 

   comments   [CommentCollection](/../types/CommentCollection)  

 List the comments for this update. Not backed by a loader, don't use this in lists. 

   Show arguments (2)    ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *update* from [Comment](/../types/Comment)

 * Field *nodes* from [UpdateCollection](/../types/UpdateCollection)

 * Field *update* from [Activity](/../types/Activity)

   Show more (10)   

---

 **Previous**   [UnfollowAccountResult](/types/UnfollowAccountResult) **Next**  [UpdateAudience](/types/UpdateAudience)

---


# UpdateAudienceEnum

Source: https://graphql-docs-v2.opencollective.com/types/UpdateAudience

# UpdateAudience  Enum

  Defines targets for an update 

 ## Possible Values

 ## [#](#possible-values)

     ALL 

 Will be sent to collective admins and financial contributors 

 

    COLLECTIVE\_ADMINS 

 Will be sent to collective admins 

 

    FINANCIAL\_CONTRIBUTORS 

 Will be sent to financial contributors 

 

    NO\_ONE 

 Will be sent to no one 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *notificationAudience* from [Update](/../types/Update)

 * Argument *audience* of field *audienceStats*
 from type [Update](/../types/Update)

 * Argument *notificationAudience* of field *publishUpdate*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Update](/types/Update) **Next**  [UpdateAudienceStats](/types/UpdateAudienceStats)

---


# UpdateAudienceStatsObject

Source: https://graphql-docs-v2.opencollective.com/types/UpdateAudienceStats

# UpdateAudienceStats  Object

  Stats about the potential audience of an update 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   coreContributors   [Int](/../types/Int) !  Non-null 

   individuals   [Int](/../types/Int) !  Non-null 

   organizations   [Int](/../types/Int) !  Non-null 

   collectives   [Int](/../types/Int) !  Non-null 

   hosted   [Int](/../types/Int) !  Non-null 

   total   [Int](/../types/Int) !  Non-null 

 The total number of emails to send 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *audienceStats* from [Update](/../types/Update)

 

---

 **Previous**   [UpdateAudience](/types/UpdateAudience) **Next**  [UpdateChronologicalOrderInput](/types/UpdateChronologicalOrderInput)

---


# UpdateChronologicalOrderInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/UpdateChronologicalOrderInput

# UpdateChronologicalOrderInput  Input Object

  Input to order updates chronologically 

 ## Fields

 ## [#](#fields)

     direction   [OrderDirection](/../types/OrderDirection) !  Non-null

 Ordering direction. 

 

 Default: "DESC"    field   [UpdateDateTimeField](/../types/UpdateDateTimeField) !  Non-null

 Field to chronologically order by. 

 

 Default: "CREATED\_AT"   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *orderBy* of field *updates*
 from type [Host](/../types/Host)

 * Argument *orderBy* of field *updates*
 from type [Bot](/../types/Bot)

 * Argument *orderBy* of field *updates*
 from type [Collective](/../types/Collective)

   Show more (10)   

---

 **Previous**   [UpdateAudienceStats](/types/UpdateAudienceStats) **Next**  [UpdateCollection](/types/UpdateCollection)

---


# UpdateCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/UpdateCollection

# UpdateCollection  Object

  A collection of "Updates" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Update](/../types/Update) !] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *updates* from [Host](/../types/Host)

 * Field *updates* from [Bot](/../types/Bot)

 * Field *updates* from [Collective](/../types/Collective)

   Show more (11)   

---

 **Previous**   [UpdateChronologicalOrderInput](/types/UpdateChronologicalOrderInput) **Next**  [UpdateCreateInput](/types/UpdateCreateInput)

---


# UpdateCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/UpdateCreateInput

# UpdateCreateInput  Input Object

  Input type for UpdateType 

 ## Fields

 ## [#](#fields)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null

    fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

    html   [String](/../types/String) !  Non-null

    isChangelog   [Boolean](/../types/Boolean)  

    isPrivate   [Boolean](/../types/Boolean)  

    makePublicOn   [DateTime](/../types/DateTime)  

    notificationAudience   [UpdateAudience](/../types/UpdateAudience)  

    title   [String](/../types/String) !  Non-null

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *update* of field *createUpdate*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [UpdateCollection](/types/UpdateCollection) **Next**  [UpdateDateTimeField](/types/UpdateDateTimeField)

---


# UpdateDateTimeFieldEnum

Source: https://graphql-docs-v2.opencollective.com/types/UpdateDateTimeField

# UpdateDateTimeField  Enum

  All possible DateTime fields for an update 

 ## Possible Values

 ## [#](#possible-values)

     CREATED\_AT 

 The creation time 

 

    PUBLISHED\_AT 

 The creation time 

 

   

---

 **Previous**   [UpdateCreateInput](/types/UpdateCreateInput) **Next**  [UpdateReferenceInput](/types/UpdateReferenceInput)

---


# UpdateReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/UpdateReferenceInput

# UpdateReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the update 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *update* of field *addEmojiReaction*
 from type [Mutation](/../types/Mutation)

 * Argument *update* of field *removeEmojiReaction*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [UpdateDateTimeField](/types/UpdateDateTimeField) **Next**  [UpdateUpdateInput](/types/UpdateUpdateInput)

---


# UpdateUpdateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/UpdateUpdateInput

# UpdateUpdateInput  Input Object

  Input type for UpdateType 

 ## Fields

 ## [#](#fields)

     fromAccount   [AccountReferenceInput](/../types/AccountReferenceInput)  

    html   [String](/../types/String)  

    id   [String](/../types/String) !  Non-null

    isChangelog   [Boolean](/../types/Boolean)  

    isPrivate   [Boolean](/../types/Boolean)  

    makePublicOn   [DateTime](/../types/DateTime)  

    notificationAudience   [UpdateAudience](/../types/UpdateAudience)  

    slug   [String](/../types/String)  

    title   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *update* of field *editUpdate*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [UpdateReferenceInput](/types/UpdateReferenceInput) **Next**  [Upload](/types/Upload)

---


# UploadScalar

Source: https://graphql-docs-v2.opencollective.com/types/Upload

# Upload  Scalar

  The `Upload`  scalar type represents a file upload. 

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *file* of field *editLegalDocumentStatus*
 from type [Mutation](/../types/Mutation)

 * Argument *file* of field *importTransactions*
 from type [Mutation](/../types/Mutation)

 * Argument *attachment* of field *addAgreement*
 from type [Mutation](/../types/Mutation)

   Show more (4)   

---

 **Previous**   [UpdateUpdateInput](/types/UpdateUpdateInput) **Next**  [UploadFileInput](/types/UploadFileInput)

---


# UploadFileInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/UploadFileInput

# UploadFileInput  Input Object

  ## Fields

 ## [#](#fields)

     file   [Upload](/../types/Upload) !  Non-null

 The file to upload 

 

    kind   [UploadedFileKind](/../types/UploadedFileKind) !  Non-null

 The kind of file to uploaded 

 

    parseDocument   [Boolean](/../types/Boolean) !  Non-null

 Whether to run OCR on the document. Note that this feature is only available to selected accounts. 

 

    parsingOptions   [OCRParsingOptionsInput](/../types/OCRParsingOptionsInput)  

 If `parseDocument`  is true, you can use this field to pass options to the OCR parser. 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *files* of field *uploadFile*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [Upload](/types/Upload) **Next**  [UploadFileResult](/types/UploadFileResult)

---


# UploadFileResultObject

Source: https://graphql-docs-v2.opencollective.com/types/UploadFileResult

# UploadFileResult  Object

  ## Fields

 ## [#](#fields)

     file   [FileInfo](/../types/FileInfo) !  Non-null 

   parsingResult   [ParseUploadedFileResult](/../types/ParseUploadedFileResult)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *uploadFile* from [Mutation](/../types/Mutation)

 

---

 **Previous**   [UploadFileInput](/types/UploadFileInput) **Next**  [UploadedFileKind](/types/UploadedFileKind)

---


# UploadedFileKindEnum

Source: https://graphql-docs-v2.opencollective.com/types/UploadedFileKind

# UploadedFileKind  Enum

  The kind of file that was uploaded 

 ## Possible Values

 ## [#](#possible-values)

     ACCOUNT\_AVATAR 

    ACCOUNT\_BANNER 

    EXPENSE\_ATTACHED\_FILE 

    EXPENSE\_ITEM 

    TRANSACTIONS\_IMPORT 

    ACCOUNT\_LONG\_DESCRIPTION 

    UPDATE 

    COMMENT 

    TIER\_LONG\_DESCRIPTION 

    ACCOUNT\_CUSTOM\_EMAIL 

    AGREEMENT\_ATTACHMENT 

    EXPENSE\_INVOICE 

   

---

 **Previous**   [UploadFileResult](/types/UploadFileResult) **Next**  [UserTwoFactorMethod](/types/UserTwoFactorMethod)

---


# UserTwoFactorMethodObject

Source: https://graphql-docs-v2.opencollective.com/types/UserTwoFactorMethod

# UserTwoFactorMethod  Object

  User two factor authentication method 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   method   [TwoFactorMethod](/../types/TwoFactorMethod) !  Non-null 

   name   [String](/../types/String) !  Non-null 

   createdAt   [DateTime](/../types/DateTime) !  Non-null 

   description   [String](/../types/String)  

   icon   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *twoFactorMethods* from [Individual](/../types/Individual)

 

---

 **Previous**   [UploadedFileKind](/types/UploadedFileKind) **Next**  [UserTwoFactorMethodReferenceInput](/types/UserTwoFactorMethodReferenceInput)

---


# UserTwoFactorMethodReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/UserTwoFactorMethodReferenceInput

# UserTwoFactorMethodReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

    legacyId   [Int](/../types/Int)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *userTwoFactorMethod* of field *removeTwoFactorAuthTokenFromIndividual*
 from type [Mutation](/../types/Mutation)

 * Argument *userTwoFactorMethod* of field *editTwoFactorAuthenticationMethod*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [UserTwoFactorMethod](/types/UserTwoFactorMethod) **Next**  [Vendor](/types/Vendor)

---


# VendorObject

Source: https://graphql-docs-v2.opencollective.com/types/Vendor

# Vendor  Object

  This represents a Vendor account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

 The public id identifying the account (ie: 5v08jk63-w4g9nbpz-j7qmyder-p7ozax5g) 

   legacyId   [Int](/../types/Int) !  Non-null 

 The internal database identifier of the collective (ie: 580) 

   slug   [String](/../types/String) !  Non-null 

 The slug identifying the account (ie: babel) 

   type   [AccountType](/../types/AccountType) !  Non-null 

 The type of the account (BOT/COLLECTIVE/EVENT/ORGANIZATION/INDIVIDUAL/VENDOR) 

   name   [String](/../types/String)  

 Public name 

   legalName   [String](/../types/String)  

 Private, legal name. Used for expense receipts, taxes, etc. Scope: "account". 

   description   [String](/../types/String)  

   longDescription   [String](/../types/String)  

   tags  [ [String](/../types/String) ] 

   website   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   twitterHandle   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   githubHandle   [String](/../types/String)    Deprecated 2022-06-03: Please use repositoryUrl 

   repositoryUrl   [String](/../types/String)    Deprecated 2023-01-16: Please use socialLinks 

   socialLinks  [ [SocialLink](/../types/SocialLink) !]!  Non-null 

   currency   [Currency](/../types/Currency) !  Non-null 

 The currency of the account 

   expensePolicy   [String](/../types/String)    Deprecated 2024-11-04: Please use policies.EXPENSE\_POLICIES 

   isIncognito   [Boolean](/../types/Boolean) !  Non-null 

 Defines if the contributors wants to be incognito (name not displayed) 

   imageUrl   [String](/../types/String)  

   Show arguments (2)    backgroundImageUrl   [String](/../types/String)  

   Show arguments (2)    createdAt   [DateTime](/../types/DateTime)  

 The time of creation 

   updatedAt   [DateTime](/../types/DateTime)  

 The time of last update 

   unhostedAt   [DateTime](/../types/DateTime)  

 Date of unhosting by a given Fiscal Host. 

   Show arguments (1)    isArchived   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether this account is archived 

   isFrozen   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account is frozen 

   isActive   [Boolean](/../types/Boolean)  

 Returns whether the account accepts financial contributions. 

   isHost   [Boolean](/../types/Boolean) !  Non-null 

 Returns whether the account is setup to Host collectives. 

   isAdmin   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user is an admin of this account 

   parentAccount   [Account](/../types/Account)    Deprecated 2022-12-16: use parent on AccountWithParent instead 

   members   [MemberCollection](/../types/MemberCollection) !  Non-null 

 Get all members (admins, members, backers, followers) 

   Show arguments (7)    memberInvitations  [ [MemberInvitation](/../types/MemberInvitation) ] 

 [AUTHENTICATED] Returns the pending invitations 

   Show arguments (3)    legalDocuments  [ [LegalDocument](/../types/LegalDocument) ] 

 The legal documents associated with this account 

   Show arguments (1)    memberOf   [MemberOfCollection](/../types/MemberOfCollection) !  Non-null 

   Show arguments (13)    emails  [ [EmailAddress](/../types/EmailAddress) !] 

 Returns the emails of the account. Individuals only have one, but organizations can have multiple emails. 

   transactions   [TransactionCollection](/../types/TransactionCollection) !  Non-null 

   Show arguments (34)    orders   [OrderCollection](/../types/OrderCollection) !  Non-null 

   Show arguments (28)    expenses   [ExpenseCollection](/../types/ExpenseCollection) !  Non-null 

   Show arguments (26)    settings   [JSON](/../types/JSON) !  Non-null 

   conversations   [ConversationCollection](/../types/ConversationCollection) !  Non-null 

   Show arguments (3)    conversationsTags  [ [TagStat](/../types/TagStat) ] 

 Returns conversation's tags for collective sorted by popularity 

   Show arguments (1)    expensesTags  [ [TagStat](/../types/TagStat) ] 

 Returns expense tags for collective sorted by popularity 

   Show arguments (1)    supportedExpenseTypes  [ [ExpenseType](/../types/ExpenseType) !]!  Non-null 

 The list of expense types supported by this account 

   transferwise   [TransferWise](/../types/TransferWise)  

   payoutMethods  [ [PayoutMethod](/../types/PayoutMethod) ] 

 The list of payout methods that this collective can use to get paid. In most cases, admin only and scope: "expenses". 

   Show arguments (1)    paymentMethods  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods that this collective can use to pay for Orders. Admin or Host only. Scope: "orders". 

   Show arguments (3)    paymentMethodsWithPendingConfirmation  [ [PaymentMethod](/../types/PaymentMethod) ] 

 The list of payment methods for this account that are pending a client confirmation (3D Secure / SCA) 

   connectedAccounts  [ [ConnectedAccount](/../types/ConnectedAccount) ] 

 The list of connected accounts (Stripe, PayPal, etc ...). Admin only. Scope: "connectedAccounts". 

   oAuthApplications   [OAuthApplicationCollection](/../types/OAuthApplicationCollection)  

 The list of applications created by this account. Admin only. Scope: "applications". 

   Show arguments (2)    location   [Location](/../types/Location)  

 The address associated to this account. This field is always public for collectives and events. 

   categories  [ [String](/../types/String) ]!  Non-null 

 Categories set by Open Collective to help moderation. 

   stats   [AccountStats](/../types/AccountStats)  

   canHaveChangelogUpdates   [Boolean](/../types/Boolean) !  Non-null 

 Whether this account can have changelog updates 

   updates   [UpdateCollection](/../types/UpdateCollection) !  Non-null 

 Updates published by the account. To see unpublished updates, you need to be an admin and have the scope "updates". 

   Show arguments (7)    features   [CollectiveFeatures](/../types/CollectiveFeatures) !  Non-null 

 Describes the features enabled and available for this account 

   virtualCards   [VirtualCardCollection](/../types/VirtualCardCollection)  

 Virtual Cards attached to the account. Admin only. Scope: "virtualCards". 

   Show arguments (7)    virtualCardMerchants   [AccountCollection](/../types/AccountCollection)  

 Virtual Cards Merchants used by the account. Admin only. Scope: "virtualCards". 

   Show arguments (2)    childrenAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

   Show arguments (6)    policies   [Policies](/../types/Policies) !  Non-null 

 Policies for the account. To see non-public policies you need to be admin and have the scope: "account". 

   activitySubscriptions  [ [ActivitySubscription](/../types/ActivitySubscription) ] 

 List of activities that the logged-in user is subscribed for this collective 

   Show arguments (1)    permissions   [AccountPermissions](/../types/AccountPermissions) !  Non-null 

 Logged-in user permissions on an account 

   hostApplicationRequests   [HostApplicationCollection](/../types/HostApplicationCollection) !  Non-null 

 Host application requests 

   Show arguments (4)    feed  [ [Activity](/../types/Activity) ] 

   Show arguments (3)    duplicatedFromAccount   [Account](/../types/Account)  

 If created by duplication, the account from which this one was duplicated 

   duplicatedAccounts   [AccountCollection](/../types/AccountCollection) !  Non-null 

 If this account was duplicated, the accounts that were created from it 

   Show arguments (2)    transactionGroups   [TransactionGroupCollection](/../types/TransactionGroupCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (6)    transactionReports   [TransactionReports](/../types/TransactionReports)  

 EXPERIMENTAL (this may change or be removed) 

   Show arguments (3)    webhooks   [WebhookCollection](/../types/WebhookCollection) !  Non-null 

   Show arguments (3)    totalFinancialContributors   [Int](/../types/Int) !  Non-null 

 Number of unique financial contributors. 

   Show arguments (1)    tiers   [TierCollection](/../types/TierCollection) !  Non-null 

   Show arguments (2)    contributors   [ContributorCollection](/../types/ContributorCollection) !  Non-null 

 All the persons and entities that contribute to this account 

   Show arguments (3)    activeContributors   [AccountCollection](/../types/AccountCollection) !  Non-null 

 [!] Warning: this query is currently in beta and the API might change 

   Show arguments (5)    platformFeePercent   [Float](/../types/Float) !  Non-null 

 How much platform fees are charged for this account 

   platformContributionAvailable   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if a custom contribution to Open Collective can be submitted for contributions made to this account 

   contributionPolicy   [String](/../types/String)  

   canStartResumeContributionsProcess   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the remote user can start the process to resume contributions for account 

   hasResumeContributionsProcessStarted   [Boolean](/../types/Boolean) !  Non-null 

 Returns true if the account has started the process to resume contributions 

   vendorInfo   [VendorInfo](/../types/VendorInfo)  

   hasPayoutMethod   [Boolean](/../types/Boolean)  

 Returns whether this account has any payout methods saved 

   createdByAccount   [Account](/../types/Account)  

 The account who created this order 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Account](/../types/Account) , [AccountWithContributions](/../types/AccountWithContributions) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [VendorCollection](/../types/VendorCollection)

 * Field *createVendor* from [Mutation](/../types/Mutation)

 * Field *editVendor* from [Mutation](/../types/Mutation)

   Show more (4)   

---

 **Previous**   [UserTwoFactorMethodReferenceInput](/types/UserTwoFactorMethodReferenceInput) **Next**  [VendorCollection](/types/VendorCollection)

---


# VendorCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/VendorCollection

# VendorCollection  Object

  A collection of Vendors 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Vendor](/../types/Vendor) !] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *vendors* from [Host](/../types/Host)

 

---

 **Previous**   [Vendor](/types/Vendor) **Next**  [VendorContact](/types/VendorContact)

---


# VendorContactObject

Source: https://graphql-docs-v2.opencollective.com/types/VendorContact

# VendorContact  Object

  Some context about the vendor contact person 

 ## Fields

 ## [#](#fields)

     name   [String](/../types/String)  

   email   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *contact* from [VendorInfo](/../types/VendorInfo)

 

---

 **Previous**   [VendorCollection](/types/VendorCollection) **Next**  [VendorContactInput](/types/VendorContactInput)

---


# VendorContactInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/VendorContactInput

# VendorContactInput  Input Object

  Some context about the vendor contact person 

 ## Fields

 ## [#](#fields)

     email   [String](/../types/String)  

    name   [String](/../types/String)  

   

---

 **Previous**   [VendorContact](/types/VendorContact) **Next**  [VendorCreateInput](/types/VendorCreateInput)

---


# VendorCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/VendorCreateInput

# VendorCreateInput  Input Object

  ## Fields

 ## [#](#fields)

     backgroundImage   [Upload](/../types/Upload)  

 The profile background image, for the banner and social media sharing 

 

    image   [Upload](/../types/Upload)  

 The profile avatar image 

 

    legalName   [String](/../types/String)  

    location   [LocationInput](/../types/LocationInput)  

    name   [NonEmptyString](/../types/NonEmptyString) !  Non-null

    payoutMethod   [PayoutMethodInput](/../types/PayoutMethodInput)  

    tags  [ [NonEmptyString](/../types/NonEmptyString) ] 

    vendorInfo   [VendorInfoInput](/../types/VendorInfoInput)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *vendor* of field *createVendor*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [VendorContactInput](/types/VendorContactInput) **Next**  [VendorEditInput](/types/VendorEditInput)

---


# VendorEditInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/VendorEditInput

# VendorEditInput  Input Object

  ## Fields

 ## [#](#fields)

     backgroundImage   [Upload](/../types/Upload)  

 The profile background image, for the banner and social media sharing 

 

    id   [String](/../types/String)  

 The public id identifying the account (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    image   [Upload](/../types/Upload)  

 The profile avatar image 

 

    legalName   [String](/../types/String)  

    location   [LocationInput](/../types/LocationInput)  

    name   [NonEmptyString](/../types/NonEmptyString)  

    payoutMethod   [PayoutMethodInput](/../types/PayoutMethodInput)  

    slug   [String](/../types/String)  

 The slug identifying the account (ie: babel for <https://opencollective.com/babel>) 

 

    tags  [ [NonEmptyString](/../types/NonEmptyString) ] 

    vendorInfo   [VendorInfoInput](/../types/VendorInfoInput)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *vendor* of field *editVendor*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [VendorCreateInput](/types/VendorCreateInput) **Next**  [VendorInfo](/types/VendorInfo)

---


# VendorInfoObject

Source: https://graphql-docs-v2.opencollective.com/types/VendorInfo

# VendorInfo  Object

  Some context about the vendor 

 ## Fields

 ## [#](#fields)

     contact   [VendorContact](/../types/VendorContact)  

   taxFormUrl   [String](/../types/String)  

   taxFormRequired   [Boolean](/../types/Boolean)  

   taxType   [String](/../types/String)  

   taxId   [String](/../types/String)  

   notes   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *vendorInfo* from [Vendor](/../types/Vendor)

 

---

 **Previous**   [VendorEditInput](/types/VendorEditInput) **Next**  [VendorInfoInput](/types/VendorInfoInput)

---


# VendorInfoInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/VendorInfoInput

# VendorInfoInput  Input Object

  Some context about the vendor 

 ## Fields

 ## [#](#fields)

     contact   [VendorContactInput](/../types/VendorContactInput)  

    notes   [String](/../types/String)  

    taxFormRequired   [Boolean](/../types/Boolean)  

    taxFormUrl   [String](/../types/String)  

    taxId   [String](/../types/String)  

    taxType   [String](/../types/String)  

   

---

 **Previous**   [VendorInfo](/types/VendorInfo) **Next**  [VirtualCard](/types/VirtualCard)

---


# VirtualCardObject

Source: https://graphql-docs-v2.opencollective.com/types/VirtualCard

# VirtualCard  Object

  A Virtual Card used to pay expenses 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

   account   [Account](/../types/Account)  

   host   [Host](/../types/Host)  

   assignee   [Individual](/../types/Individual)  

   name   [String](/../types/String)  

   last4   [String](/../types/String)  

   data   [JSONObject](/../types/JSONObject)  

   status   [VirtualCardStatus](/../types/VirtualCardStatus)  

   privateData   [JSONObject](/../types/JSONObject)  

   provider   [String](/../types/String)  

   spendingLimitAmount   [Int](/../types/Int)  

   spendingLimitInterval   [VirtualCardLimitInterval](/../types/VirtualCardLimitInterval)  

   spendingLimitRenewsOn   [DateTime](/../types/DateTime)  

   remainingLimit   [Int](/../types/Int)  

   currency   [Currency](/../types/Currency)  

   virtualCardRequest   [VirtualCardRequest](/../types/VirtualCardRequest)  

   createdAt   [DateTime](/../types/DateTime)  

   updatedAt   [DateTime](/../types/DateTime)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *virtualCard* from [Expense](/../types/Expense)

 * Field *nodes* from [VirtualCardCollection](/../types/VirtualCardCollection)

 * Field *virtualCard* from [Query](/../types/Query)

   Show more (8)   

---

 **Previous**   [VendorInfoInput](/types/VendorInfoInput) **Next**  [VirtualCardCollection](/types/VirtualCardCollection)

---


# VirtualCardCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/VirtualCardCollection

# VirtualCardCollection  Object

  A collection of Virtual Cards 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [VirtualCard](/../types/VirtualCard) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *virtualCards* from [Host](/../types/Host)

 * Field *hostedVirtualCards* from [Host](/../types/Host)

 * Field *virtualCards* from [Bot](/../types/Bot)

   Show more (10)   

---

 **Previous**   [VirtualCard](/types/VirtualCard) **Next**  [VirtualCardInput](/types/VirtualCardInput)

---


# VirtualCardInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/VirtualCardInput

# VirtualCardInput  Input Object

  ## Fields

 ## [#](#fields)

     data   [JSONObject](/../types/JSONObject)  

    id   [String](/../types/String)  

    last4   [String](/../types/String)  

    name   [String](/../types/String)  

    privateData   [JSONObject](/../types/JSONObject)  

    provider   [VirtualCardProvider](/../types/VirtualCardProvider)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *virtualCard* of field *assignNewVirtualCard*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [VirtualCardCollection](/types/VirtualCardCollection) **Next**  [VirtualCardLimitInterval](/types/VirtualCardLimitInterval)

---


# VirtualCardLimitIntervalEnum

Source: https://graphql-docs-v2.opencollective.com/types/VirtualCardLimitInterval

# VirtualCardLimitInterval  Enum

  ## Possible Values

 ## [#](#possible-values)

     PER\_AUTHORIZATION 

    DAILY 

    WEEKLY 

    MONTHLY 

    YEARLY 

    ALL\_TIME 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *spendingLimitInterval* from [VirtualCard](/../types/VirtualCard)

 * Field *spendingLimitInterval* from [VirtualCardRequest](/../types/VirtualCardRequest)

 * Argument *limitInterval* of field *createVirtualCard*
 from type [Mutation](/../types/Mutation)

   Show more (5)   

---

 **Previous**   [VirtualCardInput](/types/VirtualCardInput) **Next**  [VirtualCardProvider](/types/VirtualCardProvider)

---


# VirtualCardProviderEnum

Source: https://graphql-docs-v2.opencollective.com/types/VirtualCardProvider

# VirtualCardProvider  Enum

  ## Possible Values

 ## [#](#possible-values)

     PRIVACY 

    STRIPE 

   

---

 **Previous**   [VirtualCardLimitInterval](/types/VirtualCardLimitInterval) **Next**  [VirtualCardReferenceInput](/types/VirtualCardReferenceInput)

---


# VirtualCardReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/VirtualCardReferenceInput

# VirtualCardReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *virtualCard* of field *transactions*
 from type [Host](/../types/Host)

 * Argument *virtualCards* of field *expenses*
 from type [Host](/../types/Host)

 * Argument *virtualCard* of field *transactions*
 from type [Bot](/../types/Bot)

   Show more (25)   

---

 **Previous**   [VirtualCardProvider](/types/VirtualCardProvider) **Next**  [VirtualCardRequest](/types/VirtualCardRequest)

---


# VirtualCardRequestObject

Source: https://graphql-docs-v2.opencollective.com/types/VirtualCardRequest

# VirtualCardRequest  Object

  A Virtual Card request 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   legacyId   [Int](/../types/Int)  

   purpose   [String](/../types/String)  

   notes   [String](/../types/String)  

   status   [VirtualCardRequestStatus](/../types/VirtualCardRequestStatus)  

   currency   [Currency](/../types/Currency)  

   spendingLimitAmount   [Amount](/../types/Amount)  

   spendingLimitInterval   [VirtualCardLimitInterval](/../types/VirtualCardLimitInterval)  

   assignee   [Individual](/../types/Individual)  

   host   [Host](/../types/Host)  

   account   [Account](/../types/Account)  

   createdAt   [DateTime](/../types/DateTime)  

   updatedAt   [DateTime](/../types/DateTime)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *virtualCardRequest* from [VirtualCard](/../types/VirtualCard)

 * Field *virtualCardRequest* from [Query](/../types/Query)

 * Field *nodes* from [VirtualCardRequestCollection](/../types/VirtualCardRequestCollection)

   Show more (4)   

---

 **Previous**   [VirtualCardReferenceInput](/types/VirtualCardReferenceInput) **Next**  [VirtualCardRequestCollection](/types/VirtualCardRequestCollection)

---


# VirtualCardRequestCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/VirtualCardRequestCollection

# VirtualCardRequestCollection  Object

  A collection of "VirtualCardRequest" 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [VirtualCardRequest](/../types/VirtualCardRequest) !] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *virtualCardRequests* from [Query](/../types/Query)

 

---

 **Previous**   [VirtualCardRequest](/types/VirtualCardRequest) **Next**  [VirtualCardRequestReferenceInput](/types/VirtualCardRequestReferenceInput)

---


# VirtualCardRequestReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/VirtualCardRequestReferenceInput

# VirtualCardRequestReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

    legacyId   [Int](/../types/Int)  

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *virtualCardRequest* of field *virtualCardRequest*
 from type [Query](/../types/Query)

 * Argument *virtualCardRequest* of field *createVirtualCard*
 from type [Mutation](/../types/Mutation)

 * Argument *virtualCardRequest* of field *rejectVirtualCardRequest*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [VirtualCardRequestCollection](/types/VirtualCardRequestCollection) **Next**  [VirtualCardRequestStatus](/types/VirtualCardRequestStatus)

---


# VirtualCardRequestStatusEnum

Source: https://graphql-docs-v2.opencollective.com/types/VirtualCardRequestStatus

# VirtualCardRequestStatus  Enum

  The status of a virtual card request 

 ## Possible Values

 ## [#](#possible-values)

     APPROVED 

    REJECTED 

    PENDING 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *status* from [VirtualCardRequest](/../types/VirtualCardRequest)

 * Argument *status* of field *virtualCardRequests*
 from type [Query](/../types/Query)

 

---

 **Previous**   [VirtualCardRequestReferenceInput](/types/VirtualCardRequestReferenceInput) **Next**  [VirtualCardStatus](/types/VirtualCardStatus)

---


# VirtualCardStatusEnum

Source: https://graphql-docs-v2.opencollective.com/types/VirtualCardStatus

# VirtualCardStatus  Enum

  The status of a virtual card 

 ## Possible Values

 ## [#](#possible-values)

     ACTIVE 

    INACTIVE 

    CANCELED 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *status* of field *virtualCards*
 from type [Host](/../types/Host)

 * Argument *status* of field *hostedVirtualCards*
 from type [Host](/../types/Host)

 * Argument *status* of field *virtualCards*
 from type [Bot](/../types/Bot)

   Show more (11)   

---

 **Previous**   [VirtualCardRequestStatus](/types/VirtualCardRequestStatus) **Next**  [Webhook](/types/Webhook)

---


# WebhookObject

Source: https://graphql-docs-v2.opencollective.com/types/Webhook

# Webhook  Object

  An webhook attached to an account 

 ## Fields

 ## [#](#fields)

     id   [String](/../types/String) !  Non-null 

   legacyId   [Int](/../types/Int) !  Non-null 

   activityType   [ActivityType](/../types/ActivityType)  

   webhookUrl   [URL](/../types/URL)  

   account   [Account](/../types/Account) !  Non-null 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *nodes* from [WebhookCollection](/../types/WebhookCollection)

 * Field *createWebhook* from [Mutation](/../types/Mutation)

 * Field *updateWebhook* from [Mutation](/../types/Mutation)

   Show more (4)   

---

 **Previous**   [VirtualCardStatus](/types/VirtualCardStatus) **Next**  [WebhookCollection](/types/WebhookCollection)

---


# WebhookCollectionObject

Source: https://graphql-docs-v2.opencollective.com/types/WebhookCollection

# WebhookCollection  Object

  A collection of webhooks 

 ## Fields

 ## [#](#fields)

     offset   [Int](/../types/Int)  

   limit   [Int](/../types/Int)  

   totalCount   [Int](/../types/Int)  

   nodes  [ [Webhook](/../types/Webhook) ] 

  ## Interfaces

 ## [#](#interfaces)

  Also implements [Collection](/../types/Collection) .

 ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Field *webhooks* from [Host](/../types/Host)

 * Field *webhooks* from [Bot](/../types/Bot)

 * Field *webhooks* from [Collective](/../types/Collective)

   Show more (9)   

---

 **Previous**   [Webhook](/types/Webhook) **Next**  [WebhookCreateInput](/types/WebhookCreateInput)

---


# WebhookCreateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/WebhookCreateInput

# WebhookCreateInput  Input Object

  Input type for Webhooks 

 ## Fields

 ## [#](#fields)

     account   [AccountReferenceInput](/../types/AccountReferenceInput) !  Non-null

 The account to attach the Webhook 

 

    activityType   [ActivityType](/../types/ActivityType) !  Non-null

 Default: "ACTIVITY\_ALL"    webhookUrl   [URL](/../types/URL) !  Non-null

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *webhook* of field *createWebhook*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [WebhookCollection](/types/WebhookCollection) **Next**  [WebhookReferenceInput](/types/WebhookReferenceInput)

---


# WebhookReferenceInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/WebhookReferenceInput

# WebhookReferenceInput  Input Object

  ## Fields

 ## [#](#fields)

     id   [String](/../types/String)  

 The public id identifying the webhook (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The legacy public id identifying the webhook (ie: 4242) 

 

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *webhook* of field *deleteWebhook*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [WebhookCreateInput](/types/WebhookCreateInput) **Next**  [WebhookUpdateInput](/types/WebhookUpdateInput)

---


# WebhookUpdateInputInput Object

Source: https://graphql-docs-v2.opencollective.com/types/WebhookUpdateInput

# WebhookUpdateInput  Input Object

  Input type to update a Webhook 

 ## Fields

 ## [#](#fields)

     activityType   [ActivityType](/../types/ActivityType) !  Non-null

 Default: "ACTIVITY\_ALL"    id   [String](/../types/String)  

 The public id identifying the webhook (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) 

 

    legacyId   [Int](/../types/Int)  

 The legacy public id identifying the webhook (ie: 4242) 

 

    webhookUrl   [URL](/../types/URL) !  Non-null

   ## Usages

 ## [#](#usages)

  ## References

 ## [#](#references)

  * Argument *webhook* of field *updateWebhook*
 from type [Mutation](/../types/Mutation)

 

---

 **Previous**   [WebhookReferenceInput](/types/WebhookReferenceInput) **Next**  [WiseTransferDetails](/types/WiseTransferDetails)

---


# WiseTransferDetailsInput Object

Source: https://graphql-docs-v2.opencollective.com/types/WiseTransferDetails

# WiseTransferDetails  Input Object

  ## Fields

 ## [#](#fields)

     reference   [String](/../types/String)  

    sourceOfFunds   [String](/../types/String)  

    transferNature   [String](/../types/String)  

    transferPurpose   [String](/../types/String)  

   

---

 **Previous**   [WebhookUpdateInput](/types/WebhookUpdateInput)

---
