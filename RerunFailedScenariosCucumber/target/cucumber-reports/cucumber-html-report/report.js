$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature1.feature");
formatter.feature({
  "line": 2,
  "name": "application login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user login into the application with username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "all The elements are enabled",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition1.user_is_on_lading_page()"
});
formatter.result({
  "duration": 21933897974,
  "error_message": "org.openqa.selenium.WebDriverException: java.io.IOException: unexpected end of stream on Connection{localhost:15250, proxy\u003dDIRECT hostAddress\u003dlocalhost/127.0.0.1:15250 cipherSuite\u003dnone protocol\u003dhttp/1.1}\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LH7U05CG6481HKZ\u0027, ip: \u002710.198.49.6\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat stepDefinitions.stepDefinition1.user_is_on_lading_page(stepDefinition1.java:23)\r\n\tat ✽.Given user is on landing page(feature1.feature:4)\r\nCaused by: java.io.IOException: unexpected end of stream on Connection{localhost:15250, proxy\u003dDIRECT hostAddress\u003dlocalhost/127.0.0.1:15250 cipherSuite\u003dnone protocol\u003dhttp/1.1}\r\n\tat okhttp3.internal.http1.Http1Codec.readResponseHeaders(Http1Codec.java:205)\r\n\tat okhttp3.internal.http.CallServerInterceptor.intercept(CallServerInterceptor.java:88)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:45)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:125)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:105)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat stepDefinitions.stepDefinition1.user_is_on_lading_page(stepDefinition1.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.ExtendedRuntime.runStep(ExtendedRuntime.java:319)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExecutionUnitRunner.run(ExtendedExecutionUnitRunner.java:32)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:99)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:32)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.run(ExtendedCucumber.java:148)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: java.io.EOFException: \\n not found: limit\u003d0 content\u003d…\r\n\tat okio.RealBufferedSource.readUtf8LineStrict(RealBufferedSource.java:227)\r\n\tat okhttp3.internal.http1.Http1Codec.readHeaderLine(Http1Codec.java:212)\r\n\tat okhttp3.internal.http1.Http1Codec.readResponseHeaders(Http1Codec.java:189)\r\n\t... 61 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition1.user_login_into_the_application_with_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.Home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.cards_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.all_rhe_elements_are_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 3,
  "name": "home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user login into the application with username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "all The elements are enabled",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition1.user_is_on_lading_page()"
});
formatter.result({
  "duration": 14397744390,
  "error_message": "org.openqa.selenium.WebDriverException: java.io.IOException: unexpected end of stream on Connection{localhost:36356, proxy\u003dDIRECT hostAddress\u003dlocalhost/127.0.0.1:36356 cipherSuite\u003dnone protocol\u003dhttp/1.1}\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LH7U05CG6481HKZ\u0027, ip: \u002710.198.49.6\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepDefinitions.stepDefinition1.user_is_on_lading_page(stepDefinition1.java:22)\r\n\tat ✽.Given user is on landing page(feature1.feature:4)\r\nCaused by: java.io.IOException: unexpected end of stream on Connection{localhost:36356, proxy\u003dDIRECT hostAddress\u003dlocalhost/127.0.0.1:36356 cipherSuite\u003dnone protocol\u003dhttp/1.1}\r\n\tat okhttp3.internal.http1.Http1Codec.readResponseHeaders(Http1Codec.java:205)\r\n\tat okhttp3.internal.http.CallServerInterceptor.intercept(CallServerInterceptor.java:88)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:45)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:125)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:105)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepDefinitions.stepDefinition1.user_is_on_lading_page(stepDefinition1.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.ExtendedRuntime.runStep(ExtendedRuntime.java:319)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedExecutionUnitRunner.run(ExtendedExecutionUnitRunner.java:32)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.retry(ExtendedFeatureRunner.java:141)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:106)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedFeatureRunner.runChild(ExtendedFeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:108)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.runChild(ExtendedCucumber.java:32)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat com.github.mkolisnyk.cucumber.runner.ExtendedCucumber.run(ExtendedCucumber.java:148)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: java.io.EOFException: \\n not found: limit\u003d0 content\u003d…\r\n\tat okio.RealBufferedSource.readUtf8LineStrict(RealBufferedSource.java:227)\r\n\tat okhttp3.internal.http1.Http1Codec.readHeaderLine(Http1Codec.java:212)\r\n\tat okhttp3.internal.http1.Http1Codec.readResponseHeaders(Http1Codec.java:189)\r\n\t... 60 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition1.user_login_into_the_application_with_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.Home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.cards_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.all_rhe_elements_are_enabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 3,
  "name": "home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user login into the application with username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "all The elements are enabled",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition1.user_is_on_lading_page()"
});
formatter.result({
  "duration": 26247089417,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition1.user_login_into_the_application_with_username_and_password()"
});
formatter.result({
  "duration": 4999448240,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition1.Home_page_is_populated()"
});
formatter.result({
  "duration": 4999422396,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition1.cards_are_displayed()"
});
formatter.result({
  "duration": 4999627921,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition1.all_rhe_elements_are_enabled()"
});
formatter.result({
  "duration": 4999671816,
  "status": "passed"
});
formatter.uri("feature2.feature");
formatter.feature({
  "line": 2,
  "name": "register to app",
  "description": "",
  "id": "register-to-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "user register to app",
  "description": "",
  "id": "register-to-app;user-register-to-app",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user navigated to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "entered email id",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click next",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "entered username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "entered password",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition2.user_navigated_to_the_application()"
});
formatter.result({
  "duration": 14701614174,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition2.entered_email_id()"
});
formatter.result({
  "duration": 4999818268,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition2.click_next()"
});
formatter.result({
  "duration": 4999775194,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition2.entered_username()"
});
formatter.result({
  "duration": 4999670586,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition2.entered_password()"
});
formatter.result({
  "duration": 4999293994,
  "status": "passed"
});
});