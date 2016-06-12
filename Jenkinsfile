node {
    stage 'Checkout'
    checkout scm

    stage 'Build virtualenv'
    sh '''virtualenv venv
    . ./venv/bin/activate
    # Workaround for pip, because it will hang forever when not updated and using the cache.
    pip install --upgrade pip --no-cache-dir
    pip install -e .
    pip install -r tests/requirements.txt'''

    stage 'Tests'
    sh '''. venv/bin/activate
    nosetests --with-xcoverage --with-xunit'''
    step([$class: 'XUnitPublisher', testTimeMargin: '3000', thresholdMode: 1, thresholds: [[$class: 'FailedThreshold', failureNewThreshold: '1', failureThreshold: '1', unstableNewThreshold: '0', unstableThreshold: '0'], [$class: 'SkippedThreshold', failureNewThreshold: '1', failureThreshold: '1', unstableNewThreshold: '0', unstableThreshold: '0']], tools: [[$class: 'JUnitType', deleteOutputFiles: true, failIfNotNew: true, pattern: '**/nosetests.xml', skipNoTestFiles: false, stopProcessingIfError: true]]])
}
