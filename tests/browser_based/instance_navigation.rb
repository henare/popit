# encoding: UTF-8
# coding: UTF-8
# -*- coding: UTF-8 -*-

require 'lib/popit_watir_test_case'
require 'pry'
require 'net/http'
require 'uri'


class NavigationTests < PopItWatirTestCase

  def test_navigation_around_site
    goto_instance 'test'
    delete_instance_database
    load_test_fixture

    # home page
    goto '/'

    # go to org
    @b.link(:text => /United States Government\n4 members/).click
    assert_path '/organizations/united-states-government'

    # go to person and then back to the org
    @b.link(:text => /Bill Clinton/).click
    assert_path '/persons/bill-clinton'
    @b.link(:text => 'United States Government').click
    assert_path '/organizations/united-states-government'
    
  end 

end
