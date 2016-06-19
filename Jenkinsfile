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

    stage 'Deployment'
    if (env.BRANCH_NAME.equals("staging")) {

      echo "Branch is: ${env.BRANCH_NAME}"
      sh '''. /srv/local/ubuntuusers/oss/venv/bin/activate

      cd /srv/local/ubuntuusers/oss/theme
      git pull
      npm install
      ./node_modules/grunt-cli/bin/grunt

      cd /srv/local/ubuntuusers/oss/inyoka
      git pull
      pip install --upgrade pip --no-cache-dir
      pip install -r extra/requirements/development.txt
      python manage.py migrate --noinput
      python manage.py collectstatic --noinput

      sudo supervisorctl restart inyoka-oss-celery
      sudo supervisorctl restart inyoka-oss-wsgi '''

    } else {
      echo "Branch is: ${env.BRANCH_NAME}, not running the deployment!"
    }
}
