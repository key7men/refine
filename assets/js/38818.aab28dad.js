"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38818],{38818:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/antd/src/index.tsx","description":"`<DeleteButton>` uses Ant Design\'s {@link https://ant.design/components/button/ `<Button>`} and {@link https://ant.design/components/button/ `<Popconfirm>`} components.\\nWhen you try to delete something, a pop-up shows up and asks for confirmation. When confirmed it executes the `useDelete` method provided by your `dataProvider`.","displayName":"DeleteButton","props":{"hideText":{"defaultValue":{"value":"false"},"description":"Whether should hide the text and show only the icon or not.","name":"hideText","required":false,"type":{"name":"boolean"},"tags":{}},"resourceNameOrRouteName":{"defaultValue":{"value":"Reads `:resource` from the URL"},"description":"Resource name for API data interactions","name":"resourceNameOrRouteName","required":false,"type":{"name":"string"},"tags":{"default":"Reads `:resource` from the URL"}},"ignoreAccessControlProvider":{"defaultValue":{"value":"false"},"description":"Whether to skip access control for the resource and the delete action or not","name":"ignoreAccessControlProvider","required":false,"type":{"name":"boolean"},"tags":{"deprecated":"`ignoreAccessControlProvider` deprecated. Use `accessControl.enabled` instead."}},"accessControl":{"defaultValue":{"value":"`{ enabled: true }`"},"description":"Access Control configuration for the button","name":"accessControl","required":false,"type":{"name":"{ enabled?: boolean; hideIfUnauthorized?: boolean; } | undefined"},"tags":{"default":"`{ enabled: true }`"}},"recordItemId":{"defaultValue":{"value":"Reads `:id` from the URL"},"description":"Data item identifier for the actions with the API","name":"recordItemId","required":false,"type":{"name":"[BaseKey](/docs/api-reference/core/interfaceReferences/#basekey)"},"tags":{"default":"Reads `:id` from the URL"}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | (data, values, resource) => OpenNotificationParams"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | (error, values, resource) => OpenNotificationParams"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"resourceName":{"defaultValue":null,"description":"","name":"resourceName","required":false,"type":{"name":"string"},"tags":{"deprecated":"resourceName deprecated. Use resourceNameOrRouteName instead # https://github.com/refinedev/refine/issues/1618"}},"onSuccess":{"defaultValue":null,"description":"Callback function to be called after the delete action is successful","name":"onSuccess","required":false,"type":{"name":"(value: DeleteOneResponse) => void"},"tags":{}},"mutationMode":{"defaultValue":{"value":"`mutationMode` setting from the `Refine` component"},"description":"Mutation mode for the delete action","name":"mutationMode","required":false,"type":{"name":"\\"pessimistic\\" | \\"optimistic\\" | \\"undoable\\"","raw":"MutationMode","value":[{"value":"\\"pessimistic\\""},{"value":"\\"optimistic\\""},{"value":"\\"undoable\\""}]},"tags":{"default":"`mutationMode` setting from the `Refine` component"}},"metaData":{"defaultValue":null,"description":"Additional meta data to pass to the delete mutation from the data provider","name":"metaData","required":false,"type":{"name":"[MetaDataQuery](/docs/api-reference/core/interfaceReferences/#metadataquery)"},"tags":{}},"dataProviderName":{"defaultValue":{"value":"`\\"default\\"`"},"description":"Target data provider name for API call to be made","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{"default":"`\\"default\\"`"}},"confirmTitle":{"defaultValue":{"value":"`\\"Are you sure?\\"` or `\\"buttons.confirm\\"` from the i18n provider"},"description":"Text to be displayed in the confirmation popup","name":"confirmTitle","required":false,"type":{"name":"string"},"tags":{"default":"`\\"Are you sure?\\"` or `\\"buttons.confirm\\"` from the i18n provider"}},"confirmOkText":{"defaultValue":{"value":"`\\"Delete\\"` or `\\"buttons.delete\\"` from the i18n provider"},"description":"Confirmation button text to be displayed in the confirmation popup","name":"confirmOkText","required":false,"type":{"name":"string"},"tags":{"default":"`\\"Delete\\"` or `\\"buttons.delete\\"` from the i18n provider"}},"confirmCancelText":{"defaultValue":{"value":"`\\"Cancel\\"` or `\\"buttons.cancel\\"` from the i18n provider"},"description":"Cancel button text to be displayed in the confirmation popup","name":"confirmCancelText","required":false,"type":{"name":"string"},"tags":{"default":"`\\"Cancel\\"` or `\\"buttons.cancel\\"` from the i18n provider"}},"invalidates":{"defaultValue":{"value":"`[\\"list\\", \\"many\\"]`"},"description":"Query keys to be invalidated after the delete action is successful","name":"invalidates","required":false,"type":{"name":"(keyof IQueryKeys)[]"},"tags":{"default":"`[\\"list\\", \\"many\\"]`"}}},"generatedAt":1673946808942}')}}]);