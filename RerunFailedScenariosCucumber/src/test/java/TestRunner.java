import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(ExtendedCucumber.class)
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
     //   excludeCoverageTags = {"@flaky" },
        includeCoverageTags = {"@run" },
        outputFolder = "target")

@CucumberOptions(
        features =  {"src/test/resources/features"},
        glue=       {"stepDefinitions"},
        strict = true,
        tags =      {"@run"},
        monochrome = true,
        plugin =    {
                    "pretty",
                "html:target/cucumber-reports/cucumber-html-report",
                    "json:target/cucumber-reports/CucumberTestReport.json",
                "usage:target/cucumber-usage.json",

                    "rerun:target/rerun.txt"}
        )

public class TestRunner {

}