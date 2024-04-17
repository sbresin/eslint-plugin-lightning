/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

function getSourceCode(context) {
    if ('sourceCode' in context) {
        return context.sourceCode;
    }

    return context.getSourceCode();
}

function getScope(context, node) {
    const sourceCode = getSourceCode(context);

    if (sourceCode && sourceCode.getScope) {
        return sourceCode.getScope(node);
    }

    return context.getScope();
}

module.exports = {
    getSourceCode,
    getScope,
};