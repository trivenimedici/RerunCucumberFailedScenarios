ExtendedCucumberOptions to rerun the failed scenarios Automatically:
\
This uses the Extendedcucumberoptions feature to rerun the failed scenarios in the BDD test suite using cucumber with java.
Retry count tells how many times the framework should retry running the failed scenarios

Configuration to be added:

Adding the Dependencies in POM.XML:


          <dependency>
             <groupId>com.github.mkolisnyk</groupId>
             <artifactId>cucumber-runner</artifactId>
             <version>1.3.3</version>
          </dependency>



Modify the TestRunner file as below:


In the Testrunner.java file ass the extendedcucumberoptions tag as below:


         @ExtendedCucumberOptions(
                 jsonReport = "target/cucumber-reports/CucumberTestReport.json",
                 retryCount = 3,
                 detailedReport = true,
                 detailedAggregatedReport = true,
                 overviewReport = true,
                 coverageReport = true,
                 jsonUsageReport = "target/cucumber-usage.json",
                 usageReport = true,
                 toPDF = true,
                 includeCoverageTags = {"@run" },
                 outputFolder = "target")


   Here as the retryCount = 3, the build will try to rerun the scenarios for 3 times 

